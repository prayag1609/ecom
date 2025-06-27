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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = void 0;
const pinecone_1 = require("./pinecone");
const getEmbedding_1 = require("./getEmbedding");
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const searchProduct = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const vector = yield (0, getEmbedding_1.getEmbedding)(query);
    const result = yield pinecone_1.index.query({
        vector,
        topK: 10, // mean to get top 10 results
        includeValues: false,
        includeMetadata: true,
    });
    const matches = result.matches || [];
    if (matches.length === 0)
        return [];
    const ids = matches.map(m => m.id);
    const products = yield prisma.product.findMany({
        where: { id: { in: ids } },
        select: {
            id: true,
            name: true,
            description: true,
            category: true,
            price: true,
            // features: true,
            // quantity: true,
            // image: true,
        },
    });
    // Sort products by Pinecone similarity order
    const idOrderMap = matches.reduce((acc, cur, idx) => {
        acc[cur.id] = idx;
        return acc;
    }, {});
    return products.sort((a, b) => idOrderMap[a.id] - idOrderMap[b.id]);
});
exports.searchProduct = searchProduct;
