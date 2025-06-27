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
exports.deleteProduct = exports.searchProductController = exports.updateAllImages = exports.updateProductImage = exports.updateProductDetails = exports.listProduct = exports.createProduct = void 0;
const prisma_1 = require("../../generated/prisma");
const httpres_1 = require("../../utils/helper/httpRes/httpres");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary/cloudinary"));
const saveToPinecone_1 = require("../../utils/pinecone/saveToPinecone");
const getEmbedding_1 = require("../../utils/pinecone/getEmbedding");
const pinecone_1 = require("../../utils/pinecone/pinecone");
const path_1 = __importDefault(require("path"));
const prisma = new prisma_1.PrismaClient();
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized");
        return;
    }
    try {
        const { name, description, category, features } = req.body;
        const price = parseFloat(req.body.price);
        const quantity = parseInt(req.body.quantity, 10);
        const images = req.files;
        if (!name || !description || !category || !features || isNaN(price) || isNaN(quantity) || !images) {
            (0, httpres_1.sendErrorResponse)(res, 400, "All fields are required");
            return;
        }
        const allowedFormats = [".png", ".jpg", ".jpeg"];
        const filteredImages = images.filter(img => allowedFormats.includes(path_1.default.extname(img.originalname).toLowerCase()));
        if (!filteredImages.length || filteredImages.length > 4) {
            (0, httpres_1.sendErrorResponse)(res, 400, "Upload 1–4 images (png/jpg/jpeg)");
            return;
        }
        const maxSize = 5 * 1024 * 1024;
        const oversized = filteredImages.find(img => img.size > maxSize);
        if (oversized) {
            (0, httpres_1.sendErrorResponse)(res, 400, `Image too large: ${oversized.originalname}`);
            return;
        }
        const existing = yield prisma.product.findFirst({ where: { name } });
        if (existing) {
            (0, httpres_1.sendErrorResponse)(res, 400, "Product already exists");
            return;
        }
        const featuresArray = typeof features === "string"
            ? features.split(",").map(f => f.trim()).filter(Boolean)
            : [];
        const featuresObject = featuresArray.reduce((acc, cur) => {
            acc[cur] = null;
            return acc;
        }, {});
        const uploads = yield Promise.all(filteredImages.map(img => cloudinary_1.default.uploader.upload(img.path, {
            folder: "ecom/product/images",
        })));
        const imageURLs = uploads.map(img => ({
            public_id: img.public_id,
            secure_url: img.secure_url,
        }));
        const vector = yield (0, getEmbedding_1.getEmbedding)(`${name}. ${description}. Features: ${featuresArray.join(', ')}. Category: ${category}`);
        const created = yield prisma.product.create({
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
            yield (0, saveToPinecone_1.saveToPinecone)({
                id: created.id,
                values: vector,
                metadata: { name, category },
            });
        }
        catch (pineError) {
            yield prisma.product.delete({ where: { id: created.id } });
            console.error("❌ Pinecone save failed, product rolled back:", pineError);
            return next((0, httpres_1.sendErrorResponse)(res, 500, "Embedding failed. Product not saved."));
        }
        (0, httpres_1.sendSucessResponse)(res, 201, "Product created", { product: created });
    }
    catch (error) {
        console.error("CreateProduct Error:", error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Server error");
    }
});
exports.createProduct = createProduct;
const listProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = req.user;
    console.log("---", user);
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthoriwjkdzed to fatch product");
        return;
    }
    const products = yield prisma.product.findMany({});
    if (!products) {
        (0, httpres_1.sendErrorResponse)(res, 404, "No products found");
        return;
    }
    let page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    let limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 10, 1), 100);
    let skip = (page - 1) * limit;
    let search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.trim().toLocaleLowerCase();
    let searchFilter = search ? {
        OR: [
            {
                name: {
                    contains: search
                }
            }
        ]
    } : {};
    let [total, product] = yield Promise.all([
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
    (0, httpres_1.sendSucessResponse)(res, 200, "Products fached sucess-fully...", {
        products: product,
        total: total,
        page: page,
        limit,
        skip
    });
});
exports.listProduct = listProduct;
const updateProductDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const user = req.user;
    console.log(user);
    try {
        if (!user || user.role !== "seller") {
            (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized to create product");
            return;
        }
        const id = req.params.id;
        const findProduct = yield prisma.product.findFirst({ where: { id: id } });
        if (!findProduct) {
            (0, httpres_1.sendErrorResponse)(res, 404, "Product not found");
            return;
        }
        const name = (_a = req.body.name) !== null && _a !== void 0 ? _a : findProduct.name;
        const description = (_b = req.body.description) !== null && _b !== void 0 ? _b : findProduct.description;
        const price = (_c = Number(req.body.price)) !== null && _c !== void 0 ? _c : findProduct.price;
        if (price <= 0) {
            (0, httpres_1.sendErrorResponse)(res, 400, "Price must be greater than 0");
            return;
        }
        const updateProduct = yield prisma.product.update({
            where: { id: id },
            data: {
                name: name,
                description: description,
                price: price,
                updateAt: new Date()
            }
        });
        if (!updateProduct) {
            (0, httpres_1.sendErrorResponse)(res, 404, "Error in updating product");
            return;
        }
        (0, httpres_1.sendSucessResponse)(res, 201, 'product updated sucess-fully...', updateProduct);
    }
    catch (error) {
        console.log(error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Error in updating product");
        return;
    }
});
exports.updateProductDetails = updateProductDetails;
const updateProductImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized");
        return;
    }
    try {
        const id = req.params.id;
        const imageIDs = req.body.imageIDs || [];
        const newImages = req.files;
        const trimIDs = Array.isArray(imageIDs) ? imageIDs : imageIDs.split(",").map((id) => id.trim());
        const product = yield prisma.product.findUnique({ where: { id } });
        if (!product) {
            (0, httpres_1.sendErrorResponse)(res, 404, "Product not found");
            return;
        }
        let currentImages = product.image;
        const allowedFormats = [".png", ".jpg", ".jpeg"];
        const filterImages = newImages.filter((img) => allowedFormats.includes(path_1.default.extname(img.originalname).toLowerCase()));
        if (filterImages.length > 4) {
            (0, httpres_1.sendErrorResponse)(res, 400, "Only 4 images are allowed");
            return;
        }
        const max_size = 5 * 1024 * 1024;
        const oversized = filterImages.find((img) => img.size > max_size);
        if (oversized) {
            (0, httpres_1.sendErrorResponse)(res, 400, `Image "${oversized.originalname}" is too large (max 5MB)`);
            return;
        }
        if (trimIDs.length > 0) {
            const existingPublicIds = currentImages.map((img) => img.public_id);
            const invalidIDs = trimIDs.filter((id) => !existingPublicIds.includes(id));
            if (invalidIDs.length > 0) {
                (0, httpres_1.sendErrorResponse)(res, 404, `Invalid image IDs: ${invalidIDs.join(", ")}`);
                return;
            }
            yield Promise.all(trimIDs.map((public_id) => cloudinary_1.default.uploader.destroy(public_id)));
            currentImages = currentImages.filter((img) => !trimIDs.includes(img.public_id));
        }
        if (filterImages.length > 0) {
            if (currentImages.length + filterImages.length > 4) {
                (0, httpres_1.sendErrorResponse)(res, 400, "You can upload a maximum of 4 images");
                return;
            }
            const uploadToCloudinary = yield Promise.all(filterImages.map((img) => cloudinary_1.default.uploader.upload(img.path, {
                folder: "ecom/product/images"
            })));
            const newImageData = uploadToCloudinary.map((img) => ({
                public_id: img.public_id,
                secure_url: img.secure_url
            }));
            currentImages = [...currentImages, ...newImageData];
        }
        const updatedProduct = yield prisma.product.update({
            where: { id },
            data: {
                image: currentImages
            }
        });
        (0, httpres_1.sendSucessResponse)(res, 200, "Product images updated successfully", updatedProduct);
    }
    catch (error) {
        console.error("Image update error:", error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Internal server error");
        return;
    }
});
exports.updateProductImage = updateProductImage;
const updateAllImages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = req.user;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized");
        return;
    }
    const productId = req.params.id;
    const newImages = req.files || [];
    try {
        const product = yield prisma.product.findFirst({
            where: { id: productId, sellerId: user.userId }
        });
        if (!product || !Array.isArray(product.image)) {
            return (0, httpres_1.sendErrorResponse)(res, 400, "Product not found or no valid images.");
        }
        if (newImages.length === 0) {
            return (0, httpres_1.sendErrorResponse)(res, 400, "No new images provided.");
        }
        const maxImageLimit = 5;
        if (newImages.length > maxImageLimit) {
            return (0, httpres_1.sendErrorResponse)(res, 400, `Cannot add more than ${maxImageLimit} images.`);
        }
        const currentImages = ((_a = product.image) !== null && _a !== void 0 ? _a : []);
        for (const image of currentImages) {
            try {
                const result = yield cloudinary_1.default.uploader.destroy(image.public_id);
                if (!result) {
                    return (0, httpres_1.sendErrorResponse)(res, 400, `Failed to delete image ${image.public_id}`);
                }
            }
            catch (err) {
                console.error(`Cloudinary delete failed for ${image.public_id}`, err);
                return (0, httpres_1.sendErrorResponse)(res, 500, "Failed to delete image.");
            }
        }
        yield prisma.product.update({
            where: { id: productId },
            data: { image: [] }
        });
        const uploadedImageUrls = [];
        for (const file of newImages) {
            try {
                const result = yield cloudinary_1.default.uploader.upload(file.path, {
                    folder: 'product_images'
                });
                uploadedImageUrls.push({
                    public_id: result.public_id,
                    secure_url: result.secure_url
                });
            }
            catch (err) {
                console.error("Upload error:", err);
                return (0, httpres_1.sendErrorResponse)(res, 500, "Failed to upload image.");
            }
        }
        yield prisma.product.update({
            where: { id: productId },
            data: { image: uploadedImageUrls }
        });
        return (0, httpres_1.sendSucessResponse)(res, 200, "Product images updated successfully");
    }
    catch (error) {
        console.error("Update failed:", error);
        return (0, httpres_1.sendErrorResponse)(res, 500, "Internal server error.");
    }
});
exports.updateAllImages = updateAllImages;
const searchProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const user = req.user;
    if (!user) {
        return (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized");
    }
    const query = (_a = req.query.query) === null || _a === void 0 ? void 0 : _a.trim();
    if (!query) {
        return (0, httpres_1.sendErrorResponse)(res, 400, "Query is required");
    }
    try {
        // 🌐 Generate vector from query
        const vector = yield (0, getEmbedding_1.getEmbedding)(query);
        // 🔍 Perform vector search in Pinecone
        const result = yield pinecone_1.index.query({
            vector,
            topK: 100, // Fetch more and paginate manually
            includeValues: false,
            includeMetadata: true,
        });
        const allMatchedIds = ((_b = result.matches) === null || _b === void 0 ? void 0 : _b.map((m) => m.id)) || [];
        // 🧠 Pagination, Filters, Sorting
        const allowedSortFields = ["price", "category", "createAt"];
        const sortBy = ((_c = req.query.sortBy) === null || _c === void 0 ? void 0 : _c.trim()) || "createAt";
        const orderBy = ((_d = req.query.orderBy) === null || _d === void 0 ? void 0 : _d.toLowerCase()) === "desc" ? "desc" : "asc";
        if (!allowedSortFields.includes(sortBy)) {
            return (0, httpres_1.sendErrorResponse)(res, 400, `Invalid sortBy field. Allowed: ${allowedSortFields.join(", ")}`);
        }
        const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
        const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 10, 1), 100);
        const skip = (page - 1) * limit;
        const paginatedIds = allMatchedIds.slice(skip, skip + limit);
        // 💸 Price Filters
        const maxPrice = req.query.maxPrice ? parseFloat(req.query.maxPrice) : undefined;
        const minPrice = req.query.minPrice ? parseFloat(req.query.minPrice) : undefined;
        const priceFilter = minPrice !== undefined || maxPrice !== undefined
            ? {
                price: Object.assign(Object.assign({}, (minPrice !== undefined && { gte: minPrice })), (maxPrice !== undefined && { lte: maxPrice })),
            }
            : {};
        // 🧾 Fetch filtered products from DB
        const matchedProducts = yield prisma.product.findMany({
            where: Object.assign({ id: { in: paginatedIds } }, priceFilter),
        });
        // 🔄 Preserve Pinecone relevance order
        const productMap = new Map(matchedProducts.map((p) => [p.id, p]));
        const orderedProducts = paginatedIds.map((id) => productMap.get(id)).filter(Boolean);
        const total = allMatchedIds.length;
        const totalPages = Math.ceil(total / limit);
        return (0, httpres_1.sendSucessResponse)(res, 200, "Search results fetched", {
            products: orderedProducts,
            total,
            page,
            limit,
            totalPages,
        });
    }
    catch (error) {
        console.error("Vector search failed:", error);
        return (0, httpres_1.sendErrorResponse)(res, 500, "Failed to perform search");
    }
});
exports.searchProductController = searchProductController;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized");
        return;
    }
    const id = req.params.id;
    if (!id) {
        (0, httpres_1.sendErrorResponse)(res, 400, "Please select product");
        return;
    }
    try {
        const findProduct = yield prisma.product.findFirst({
            where: { id, sellerId: user.userId },
        });
        if (!findProduct) {
            (0, httpres_1.sendErrorResponse)(res, 404, "Product not found");
            return;
        }
        yield prisma.product.delete({ where: { id } });
        // ✅ Works only if you saved `id` in metadata
        yield pinecone_1.index.deleteMany({
            filter: { id: { $eq: id } },
        });
        (0, httpres_1.sendSucessResponse)(res, 200, "Product deleted successfully");
    }
    catch (error) {
        console.error("Delete product failed:", error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Failed to delete product");
    }
});
exports.deleteProduct = deleteProduct;
