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
exports.deleteProductCustomField = exports.updateProductCustomField = exports.getProductCustomFields = exports.createProductCustomField = void 0;
const prisma_1 = require("../../generated/prisma");
const httpres_1 = require("../../utils/helper/httpRes/httpres");
const prisma = new prisma_1.PrismaClient();
const createProductCustomField = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    // ✅ Check if user is logged in and a seller
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized. Only sellers can create custom fields.");
        return;
    }
    const product_id = req.params.id;
    if (!product_id) {
        (0, httpres_1.sendErrorResponse)(res, 400, "Product id is required");
        return;
    }
    const product = yield prisma.product.findFirst({ where: { id: product_id } });
    if (!product) {
        (0, httpres_1.sendErrorResponse)(res, 404, "Product not found");
        return;
    }
    const { field_name, field_type, isRequired, options } = req.body;
    if (!field_name || !field_type) {
        return (0, httpres_1.sendErrorResponse)(res, 400, "Missing required fields");
    }
    let findField = yield prisma.productCustomField.findFirst({ where: { field_name: field_name } });
    if (field_name) {
        (0, httpres_1.sendSucessResponse)(res, 400, "Field name already exists");
        return;
    }
    try {
        const field = yield prisma.productCustomField.create({
            data: {
                seller_id: user.userId,
                product_id,
                field_name,
                field_type,
                isRequired: isRequired !== null && isRequired !== void 0 ? isRequired : false,
                options: options !== null && options !== void 0 ? options : [],
            },
        });
        (0, httpres_1.sendSucessResponse)(res, 201, "Custom field created", field);
    }
    catch (error) {
        console.error(error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Internal server error");
    }
});
exports.createProductCustomField = createProductCustomField;
const getProductCustomFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized. Seller access only.");
        return;
    }
    try {
        const fields = yield prisma.productCustomField.findMany({
            where: { seller_id: user.userId },
        });
        (0, httpres_1.sendSucessResponse)(res, 200, "Fetched custom fields", fields);
    }
    catch (error) {
        console.error(error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Internal server error");
    }
});
exports.getProductCustomFields = getProductCustomFields;
const updateProductCustomField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const user = req.user;
    const { id } = req.params;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized. Seller access only.");
        return;
    }
    try {
        const existing = yield prisma.productCustomField.findFirst({
            where: { id, seller_id: user.userId },
        });
        if (!existing) {
            (0, httpres_1.sendErrorResponse)(res, 404, "Custom field not found");
            return;
        }
        const updated = yield prisma.productCustomField.update({
            where: { id },
            data: {
                field_name: (_a = req.body.field_name) !== null && _a !== void 0 ? _a : existing.field_name,
                field_type: (_b = req.body.field_type) !== null && _b !== void 0 ? _b : existing.field_type,
                isRequired: (_c = req.body.isRequired) !== null && _c !== void 0 ? _c : existing.isRequired,
                options: (_d = req.body.options) !== null && _d !== void 0 ? _d : existing.options,
                updateAt: new Date(),
            },
        });
        (0, httpres_1.sendSucessResponse)(res, 200, "Custom field updated", updated);
    }
    catch (error) {
        console.error(error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Update failed");
    }
});
exports.updateProductCustomField = updateProductCustomField;
const deleteProductCustomField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { id } = req.params;
    if (!user || user.role !== "seller") {
        (0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized. Seller access only.");
        return;
    }
    try {
        const existing = yield prisma.productCustomField.findFirst({
            where: { id, seller_id: user.userId },
        });
        if (!existing) {
            (0, httpres_1.sendErrorResponse)(res, 404, "Custom field not found");
            return;
        }
        yield prisma.productCustomField.delete({ where: { id } });
        (0, httpres_1.sendSucessResponse)(res, 200, "Custom field deleted");
    }
    catch (error) {
        console.error(error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Delete failed");
    }
});
exports.deleteProductCustomField = deleteProductCustomField;
