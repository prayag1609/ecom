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
exports.viewKart = exports.addProduct = exports.listProduct = void 0;
const prisma_1 = require("../../generated/prisma");
const httpres_1 = require("../../utils/helper/httpRes/httpres");
const prisma = new prisma_1.PrismaClient();
const listProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = req.user;
    console.log("________seller______");
    console.log(user);
    if (!user || user.role !== "buyer") {
        return next((0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized to fatch product"));
    }
    const products = yield prisma.product.findMany({});
    if (!products) {
        return next((0, httpres_1.sendErrorResponse)(res, 404, "No products found"));
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
        prisma.product.findMany({ where: searchFilter, skip, take: limit })
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
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log(user);
    if (!user || user.role !== "buyer") {
        return next((0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized to fatch product"));
    }
    const { id, quantity } = req.params;
    const qty = quantity ? Number(quantity) : 1;
    try {
        const product = yield prisma.product.findUnique({ where: { id: id } });
        if (!product) {
            return next((0, httpres_1.sendErrorResponse)(res, 404, "Product not found"));
        }
        const findKart = yield prisma.kart.findFirst({ where: { userId: user.userId } });
        if (!findKart) {
            const addProduct = yield prisma.kart.create({
                data: {
                    quantity: qty,
                    user: {
                        connect: { id: user.userId }
                    },
                    product: {
                        connect: { id: id }
                    }
                }
            });
        }
        else {
            const updateKart = yield prisma.kart.update({
                where: { id: findKart.id },
                data: {
                    quantity: findKart.quantity + qty
                }
            });
        }
        // const addProduct = await prisma.kart.create({
        //     data: {
        //         quantity: qty,
        //         user: {
        //             connect: { id: user.userId }
        //         },
        //         product: {
        //             connect: { id: id }
        //         }
        //     }
        // });
        if (!exports.addProduct) {
            return next((0, httpres_1.sendErrorResponse)(res, 404, "Product not found"));
        }
        (0, httpres_1.sendSucessResponse)(res, 200, "Product added sucess-fully...", exports.addProduct);
    }
    catch (error) {
        console.log(error);
        return next((0, httpres_1.sendErrorResponse)(res, 500, "Error adding product to cart"));
    }
});
exports.addProduct = addProduct;
const viewKart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log(user);
    if (!user || user.role !== "buyer") {
        return next((0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized to fatch product"));
    }
    const kartData = yield prisma.kart.findMany({
        where: {
            userId: user.userId
        },
        include: {
            product: true
        }
    });
    const kartIn = kartData.map((kart) => ({
        prodtctName: kart.product.name,
        image: kart.product.image,
        description: kart.product.description,
        price: kart.product.price,
        quantity: kart.quantity,
        subTotal: kart.product.price * kart.quantity,
    }));
    const total = kartData.reduce((acc, kartItem) => {
        return acc + (kartItem.product.price * kartItem.quantity);
    }, 0);
    (0, httpres_1.sendSucessResponse)(res, 200, 'Kart facthed sucess-fully...', { KartInfo: kartIn, KartTotal: total });
});
exports.viewKart = viewKart;
