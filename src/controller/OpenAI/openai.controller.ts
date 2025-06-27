import { sendErrorResponse, sendSucessResponse } from "../../utils/helper/httpRes/httpres";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { getEmbedding } from "../../utils/pinecone/getEmbedding";
import { saveToPinecone } from "../../utils/pinecone/saveToPinecone"

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const prisma = new PrismaClient();
export const generateProductDescription = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = req.user as Express.User;
  const id = req.params.id;

  if (!user || user.role !== "seller") {
    sendErrorResponse(res, 401, "Unauthorized: Please login as seller");
    return;
  }

  const productData = await prisma.product.findFirst({
    where: { sellerId: user.userId, id },
  });

  if (!productData) {
    sendErrorResponse(res, 403, "You are not authorized to view this product");
    return;
  }

  const { name, description, category, features } = productData;

  if (!name || !description || !category || !features) {
    sendErrorResponse(res, 400, "Missing product fields");
    return;
  }

  const featureKeys = Object.keys(features);

  const prompt = `
You are an AI product content generator.

📝 Input:
- Product Name: ${name}
- Description: ${description}
- Category: ${category}
- Features: ${featureKeys.join(", ")}

🎯 Task:
Generate a clean JSON object using the following structure:

{
  "name": "Corrected and well-formatted product name",
  "description": "A 4–5 sentence paragraph describing what the product is, what it does, and its key benefits.",
  "category": "Corrected category (only if the original category doesn't match the product)",
  "features": {
    "Corrected Feature Title 1": "1–2 sentences explaining this feature in detail.",
    "Corrected Feature Title 2": "Explanation for the second feature.",
    ...
  }
}

📌 Rules:
- Fix all spelling and grammar issues.
- Only change the category if clearly inaccurate.
- Return exactly 4 to 5 features.
- Output only valid JSON (no markdown/code block).
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 2048,
      temperature: 0.8,
    });

    const aiContent = completion.choices[0]?.message?.content?.trim();
    if (!aiContent) throw new Error("Empty response from OpenAI");

    const generated = JSON.parse(aiContent);

    sendSucessResponse(res, 200, "Generated product preview", generated);
  } catch (error: any) {
    console.error("OpenAI Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate product description" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User; if (!user || user.role !== "seller") {
    return sendErrorResponse(res, 401, "Unauthorized");
  }

  const id = req.params.id;

  const findProduct = await prisma.product.findFirst({
    where: { id, sellerId: user.userId },
  });

  if (!findProduct) {
    return sendErrorResponse(res, 404, "Product not found");
  }

  try {
    const name = req.body.name ?? findProduct.name;
    const description = req.body.description ?? findProduct.description;
    const category = req.body.category ?? findProduct.category;
    const price = req.body.price ? parseFloat(req.body.price) : findProduct.price;

    if (price <= 0) {
      return sendErrorResponse(res, 400, "Price must be greater than 0");
    }

    let features: Record<string, string> = findProduct.features as any;
    if (req.body.features && typeof req.body.features === "object" && !Array.isArray(req.body.features)) {
      features = req.body.features;
    }

    const embeddingText = `${name}. ${description}. Features: ${Object.entries(features)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ")}. Category: ${category}`;

    const embedding = await getEmbedding(embeddingText);

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        category,
        features,
        price,
        updateAt: new Date(),
      },
    });

    await saveToPinecone({
      id: updatedProduct.id,
      values: embedding,
      metadata: { name, category },
    });

    return sendSucessResponse(res, 200, "Product updated successfully", updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return sendErrorResponse(res, 500, "Server error");
  }
};
