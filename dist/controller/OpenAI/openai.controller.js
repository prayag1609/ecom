"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.generateProductDescription = void 0;
const httpres_1 = require("../../utils/helper/httpRes/httpres");
const prisma_1 = require("../../generated/prisma");
const getEmbedding_1 = require("../../utils/pinecone/getEmbedding");
const saveToPinecone_1 = require("../../utils/pinecone/saveToPinecone");
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY });
const prisma = new prisma_1.PrismaClient();
const generateProductDescription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const user = req.user;
    const id = req.params.id;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized: Please login as seller");
        return;
    }
    const productData = yield prisma.product.findFirst({
        where: { sellerId: user.userId, id },
    });
    if (!productData) {
        (0, httpres_1.sendErrorResponse)(res, 403, "You are not authorized to view this product");
        return;
    }
    const { name, description, category, features } = productData;
    if (!name || !description || !category || !features) {
        (0, httpres_1.sendErrorResponse)(res, 400, "Missing product fields");
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
        const completion = yield openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: prompt }],
            max_tokens: 2048,
            temperature: 0.8,
        });
        const aiContent = (_c = (_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.trim();
        if (!aiContent)
            throw new Error("Empty response from OpenAI");
        const generated = JSON.parse(aiContent);
        (0, httpres_1.sendSucessResponse)(res, 200, "Generated product preview", generated);
    }
    catch (error) {
        console.error("OpenAI Error:", ((_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.data) || error.message);
        res.status(500).json({ error: "Failed to generate product description" });
    }
});
exports.generateProductDescription = generateProductDescription;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const user = req.user;
    if (!user || user.role !== "seller") {
        return (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized");
    }
    const id = req.params.id;
    const findProduct = yield prisma.product.findFirst({
        where: { id, sellerId: user.userId },
    });
    if (!findProduct) {
        return (0, httpres_1.sendErrorResponse)(res, 404, "Product not found");
    }
    try {
        const name = (_a = req.body.name) !== null && _a !== void 0 ? _a : findProduct.name;
        const description = (_b = req.body.description) !== null && _b !== void 0 ? _b : findProduct.description;
        const category = (_c = req.body.category) !== null && _c !== void 0 ? _c : findProduct.category;
        const price = req.body.price ? parseFloat(req.body.price) : findProduct.price;
        if (price <= 0) {
            return (0, httpres_1.sendErrorResponse)(res, 400, "Price must be greater than 0");
        }
        let features = findProduct.features;
        if (req.body.features && typeof req.body.features === "object" && !Array.isArray(req.body.features)) {
            features = req.body.features;
        }
        const embeddingText = `${name}. ${description}. Features: ${Object.entries(features)
            .map(([k, v]) => `${k}: ${v}`)
            .join(", ")}. Category: ${category}`;
        const embedding = yield (0, getEmbedding_1.getEmbedding)(embeddingText);
        const updatedProduct = yield prisma.product.update({
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
        yield (0, saveToPinecone_1.saveToPinecone)({
            id: updatedProduct.id,
            values: embedding,
            metadata: { name, category },
        });
        return (0, httpres_1.sendSucessResponse)(res, 200, "Product updated successfully", updatedProduct);
    }
    catch (error) {
        console.error("Error updating product:", error);
        return (0, httpres_1.sendErrorResponse)(res, 500, "Server error");
    }
});
exports.updateProduct = updateProduct;
