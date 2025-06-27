import { PrismaClient } from "../../generated/prisma";
import { Request, Response, NextFunction } from "express";
import { sendErrorResponse, sendSucessResponse } from "../../utils/helper/httpRes/httpres";
import cloudinary from "../../utils/cloudinary/cloudinary";
import { saveToPinecone } from '../../utils/pinecone/saveToPinecone';
import { getEmbedding } from "../../utils/pinecone/getEmbedding";
import { index } from '../../utils/pinecone/pinecone';
import path, { parse } from "path";
import { ADDRGETNETWORKPARAMS } from "dns";
import { deleteProductCustomField } from "../productCustom/productCustomField.controller";
const prisma = new PrismaClient();


export const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {

const user = req.user as Express.User;

    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized");
        return;
    }

    try {
        const { name, description, category, features } = req.body;
        const price = parseFloat(req.body.price);
        const quantity = parseInt(req.body.quantity, 10);
        const images = req.files as Express.Multer.File[];

        if (!name || !description || !category || !features || isNaN(price) || isNaN(quantity) || !images) {
            sendErrorResponse(res, 400, "All fields are required");
            return;
        }

        const allowedFormats = [".png", ".jpg", ".jpeg"];
        const filteredImages = images.filter(img =>
            allowedFormats.includes(path.extname(img.originalname).toLowerCase())
        );

        if (!filteredImages.length || filteredImages.length > 4) {
            sendErrorResponse(res, 400, "Upload 1–4 images (png/jpg/jpeg)");
            return;
        }

        const maxSize = 5 * 1024 * 1024;
        const oversized = filteredImages.find(img => img.size > maxSize);
        if (oversized) {
            sendErrorResponse(res, 400, `Image too large: ${oversized.originalname}`);
            return;
        }

        const existing = await prisma.product.findFirst({ where: { name } });
        if (existing) {
            sendErrorResponse(res, 400, "Product already exists");
            return;
        }

        const featuresArray: string[] = typeof features === "string"
            ? features.split(",").map(f => f.trim()).filter(Boolean)
            : [];

        const featuresObject = featuresArray.reduce((acc: Record<string, null>, cur) => {
            acc[cur] = null;
            return acc;
        }, {});

        const uploads = await Promise.all(
            filteredImages.map(img =>
                cloudinary.uploader.upload(img.path, {
                    folder: "ecom/product/images",
                })
            )
        );

        const imageURLs = uploads.map(img => ({
            public_id: img.public_id,
            secure_url: img.secure_url,
        }));

        const vector = await getEmbedding(
            `${name}. ${description}. Features: ${featuresArray.join(', ')}. Category: ${category}`
        );

        const created = await prisma.product.create({
            data: {
                name,
                description,
                price,
                quantity,
                category,
                image: imageURLs,
                features: featuresObject,
                seller: { connect: { id: user.userId } },
            },
        });

        try {
            await saveToPinecone({
                id: created.id,
                values: vector,
                metadata: { name, category },
            });
        } catch (pineError) {
            await prisma.product.delete({ where: { id: created.id } });
            console.error("❌ Pinecone save failed, product rolled back:", pineError);
            return next(sendErrorResponse(res, 500, "Embedding failed. Product not saved."));
        }

        sendSucessResponse(res, 201, "Product created", { product: created });
    } catch (error) {
        console.error("CreateProduct Error:", error);
        sendErrorResponse(res, 500, "Server error");
    }
};

export const listProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    console.log("---", user);
    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthoriwjkdzed to fatch product")
        return;
    }
    const products = await prisma.product.findMany({});
    if (!products) {
        sendErrorResponse(res, 404, "No products found")
        return;
    }
    let page = Math.max(parseInt(req.query.page as string, 10) || 1, 1);
    let limit = Math.min(Math.max(parseInt(req.query.limit as string, 10) || 10, 1), 100);
    let skip = (page - 1) * limit;
    let search = (req.query.search as string)?.trim().toLocaleLowerCase();
    let searchFilter = search ? {
        OR: [
            {
                name: {
                    contains: search
                }
            }
        ]
    } : {};
    let [total, product] = await Promise.all([
        prisma.product.count({ where: searchFilter }),
        prisma.product.findMany({
            where: searchFilter,
            skip,
            take: limit,
            select: {
                id: true,
                name: true,
                price: true,
                category: true,
                image: true,
                quantity: true,
                description: true,
                features: true,
                // productCustomField: {
                //     where: { status: true },
                //     select: {
                //         field_name: true,
                //         field_type: true,
                //         isRequired: true,
                //         options: true,
                //     },
                // },
            },
        }),
    ]);
    sendSucessResponse(res, 200, "Products fached sucess-fully...", {
        products: product,
        total: total,
        page: page,
        limit,
        skip
    })
}

export const updateProductDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    console.log(user);
    try {
        if (!user || user.role !== "seller") {
            sendErrorResponse(res, 401, "Unauthorized to create product")
            return;
        }
        const id = req.params.id;
        const findProduct = await prisma.product.findFirst({ where: { id: id } });
        if (!findProduct) {
            sendErrorResponse(res, 404, "Product not found")
            return;
        }
        const name = req.body.name ?? findProduct.name;
        const description = req.body.description ?? findProduct.description;
        const price = Number(req.body.price) ?? findProduct.price;
        if (price <= 0) {
            sendErrorResponse(res, 400, "Price must be greater than 0")
            return;
        }
        const updateProduct = await prisma.product.update({
            where: { id: id },
            data: {
                name: name,
                description: description,
                price: price,
                updateAt: new Date()
            }
        })
        if (!updateProduct) {
            sendErrorResponse(res, 404, "Error in updating product")
            return;
        }
        sendSucessResponse(res, 201, 'product updated sucess-fully...', updateProduct)
    } catch (error) {
        console.log(error);
        sendErrorResponse(res, 500, "Error in updating product")
        return;
    }
};

export const updateProductImage = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized")
        return;
    }
    try {
        const id = req.params.id;
        const imageIDs = req.body.imageIDs || [];
        const newImages = req.files as Express.Multer.File[];
        const trimIDs = Array.isArray(imageIDs) ? imageIDs : imageIDs.split(",").map((id: string) => id.trim());
        const product = await prisma.product.findUnique({ where: { id } });
        if (!product) {
            sendErrorResponse(res, 404, "Product not found")
            return;
        }
        let currentImages = product.image as { public_id: string; secure_url: string }[];
        const allowedFormats = [".png", ".jpg", ".jpeg"];
        const filterImages = newImages.filter((img) =>
            allowedFormats.includes(path.extname(img.originalname).toLowerCase())
        );
        if (filterImages.length > 4) {
            sendErrorResponse(res, 400, "Only 4 images are allowed")
            return;
        }
        const max_size = 5 * 1024 * 1024;
        const oversized = filterImages.find((img) => img.size > max_size);
        if (oversized) {
            sendErrorResponse(res, 400, `Image "${oversized.originalname}" is too large (max 5MB)`)
            return;
        }
        if (trimIDs.length > 0) {
            const existingPublicIds = currentImages.map((img) => img.public_id);
            const invalidIDs = trimIDs.filter((id: any) => !existingPublicIds.includes(id));
            if (invalidIDs.length > 0) {
                sendErrorResponse(res, 404, `Invalid image IDs: ${invalidIDs.join(", ")}`)
                return;
            }
            await Promise.all(
                trimIDs.map((public_id: any) => cloudinary.uploader.destroy(public_id))
            );
            currentImages = currentImages.filter((img) => !trimIDs.includes(img.public_id));
        }
        if (filterImages.length > 0) {
            if (currentImages.length + filterImages.length > 4) {
                sendErrorResponse(res, 400, "You can upload a maximum of 4 images")
                return;
            }
            const uploadToCloudinary = await Promise.all(
                filterImages.map((img) =>
                    cloudinary.uploader.upload(img.path, {
                        folder: "ecom/product/images"
                    })
                )
            );
            const newImageData = uploadToCloudinary.map((img) => ({
                public_id: img.public_id,
                secure_url: img.secure_url
            }));
            currentImages = [...currentImages, ...newImageData];
        }
        const updatedProduct = await prisma.product.update({
            where: { id },
            data: {
                image: currentImages
            }
        });
        sendSucessResponse(res, 200, "Product images updated successfully", updatedProduct);
    } catch (error) {
        console.error("Image update error:", error);
        sendErrorResponse(res, 500, "Internal server error")
        return;
    }
};

export const updateAllImages = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized")
        return;
    }
    const productId = req.params.id;
    const newImages = req.files as Express.Multer.File[] || [];
    try {
        const product = await prisma.product.findFirst({
            where: { id: productId, sellerId: user.userId }
        });
        if (!product || !Array.isArray(product.image)) {
            return sendErrorResponse(res, 400, "Product not found or no valid images.");
        }
        if (newImages.length === 0) {
            return sendErrorResponse(res, 400, "No new images provided.");
        }
        const maxImageLimit = 5;
        if (newImages.length > maxImageLimit) {
            return sendErrorResponse(res, 400, `Cannot add more than ${maxImageLimit} images.`);
        }
        const currentImages = (product.image ?? []) as { public_id: string; secure_url: string }[];
        for (const image of currentImages) {
            try {
                const result = await cloudinary.uploader.destroy(image.public_id);
                if (!result) {
                    return sendErrorResponse(res, 400, `Failed to delete image ${image.public_id}`);
                }
            } catch (err) {
                console.error(`Cloudinary delete failed for ${image.public_id}`, err);
                return sendErrorResponse(res, 500, "Failed to delete image.");
            }
        }
        await prisma.product.update({
            where: { id: productId },
            data: { image: [] }
        });
        const uploadedImageUrls: { public_id: string; secure_url: string }[] = [];
        for (const file of newImages) {
            try {
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: 'product_images'
                });
                uploadedImageUrls.push({
                    public_id: result.public_id,
                    secure_url: result.secure_url
                });
            } catch (err) {
                console.error("Upload error:", err);
                return sendErrorResponse(res, 500, "Failed to upload image.");
            }
        }
        await prisma.product.update({
            where: { id: productId },
            data: { image: uploadedImageUrls }
        });
        return sendSucessResponse(res, 200, "Product images updated successfully");
    } catch (error) {
        console.error("Update failed:", error);
        return sendErrorResponse(res, 500, "Internal server error.");
    }
};

export const searchProductController = async (
    req: Request,
    res: Response
) => {
  const user = req.user as Express.User;    if (!user) {
        return sendErrorResponse(res, 401, "Unauthorized");
    }

    const query = (req.query.query as string)?.trim();
    if (!query) {
        return sendErrorResponse(res, 400, "Query is required");
    }

    try {
        // 🌐 Generate vector from query
        const vector = await getEmbedding(query);

        // 🔍 Perform vector search in Pinecone
        const result = await index.query({
            vector,
            topK: 100, // Fetch more and paginate manually
            includeValues: false,
            includeMetadata: true,
        });

        const allMatchedIds = result.matches?.map((m) => m.id) || [];

        // 🧠 Pagination, Filters, Sorting
        const allowedSortFields = ["price", "category", "createAt"];
        const sortBy = (req.query.sortBy as string)?.trim() || "createAt";
        const orderBy = (req.query.orderBy as string)?.toLowerCase() === "desc" ? "desc" : "asc";

        if (!allowedSortFields.includes(sortBy)) {
            return sendErrorResponse(res, 400, `Invalid sortBy field. Allowed: ${allowedSortFields.join(", ")}`);
        }

        const page = Math.max(parseInt(req.query.page as string, 10) || 1, 1);
        const limit = Math.min(Math.max(parseInt(req.query.limit as string, 10) || 10, 1), 100);
        const skip = (page - 1) * limit;

        const paginatedIds = allMatchedIds.slice(skip, skip + limit);

        // 💸 Price Filters
        const maxPrice = req.query.maxPrice ? parseFloat(req.query.maxPrice as string) : undefined;
        const minPrice = req.query.minPrice ? parseFloat(req.query.minPrice as string) : undefined;

        const priceFilter = minPrice !== undefined || maxPrice !== undefined
            ? {
                price: {
                    ...(minPrice !== undefined && { gte: minPrice }),
                    ...(maxPrice !== undefined && { lte: maxPrice }),
                },
            }
            : {};

        // 🧾 Fetch filtered products from DB
        const matchedProducts = await prisma.product.findMany({
            where: {
                id: { in: paginatedIds },
                ...priceFilter,
            },
        });

        // 🔄 Preserve Pinecone relevance order
        const productMap = new Map(matchedProducts.map((p) => [p.id, p]));
        const orderedProducts = paginatedIds.map((id) => productMap.get(id)).filter(Boolean);

        const total = allMatchedIds.length;
        const totalPages = Math.ceil(total / limit);

        return sendSucessResponse(res, 200, "Search results fetched", {
            products: orderedProducts,
            total,
            page,
            limit,
            totalPages,
        });
    } catch (error) {
        console.error("Vector search failed:", error);
        return sendErrorResponse(res, 500, "Failed to perform search");
    }
};

export const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;
    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized");
        return;
    }

    const id = req.params.id;
    if (!id) {
        sendErrorResponse(res, 400, "Please select product");
        return;
    }

    try {
        const findProduct = await prisma.product.findFirst({
            where: { id, sellerId: user.userId },
        });

        if (!findProduct) {
            sendErrorResponse(res, 404, "Product not found");
            return;
        }

        await prisma.product.delete({ where: { id } });

        // ✅ Works only if you saved `id` in metadata
        await index.deleteMany({
            filter: { id: { $eq: id } },
        });

        sendSucessResponse(res, 200, "Product deleted successfully");
    } catch (error) {
        console.error("Delete product failed:", error);
        sendErrorResponse(res, 500, "Failed to delete product");
    }
};
