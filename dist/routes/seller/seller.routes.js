"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seller_controller_1 = require("../../controller/seller/seller.controller");
const jwt_1 = require("../../middleware/jwt/jwt");
const multer_1 = __importDefault(require("../../middleware/multer/productImage/multer"));
const router = (0, express_1.Router)();
router.get("/products/search", jwt_1.verifyToken, seller_controller_1.searchProductController);
router.post('/product', jwt_1.verifyToken, multer_1.default.array("images", 5), seller_controller_1.createProduct);
router.get('/product', jwt_1.verifyToken, seller_controller_1.listProduct);
router.patch('/product/update/:id', jwt_1.verifyToken, seller_controller_1.updateProductDetails);
router.post('/product/update/image/:id', jwt_1.verifyToken, multer_1.default.array("images", 5), seller_controller_1.updateAllImages);
router.delete("/product/:id", jwt_1.verifyToken, seller_controller_1.deleteProduct);
exports.default = router;
