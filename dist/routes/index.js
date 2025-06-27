"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../routes/auth/auth.routes"));
const seller_routes_1 = __importDefault(require("./seller/seller.routes"));
const buyer_routes_1 = __importDefault(require("./buyer/buyer.routes"));
const openai_routes_1 = __importDefault(require("./OpenAI/openai.routes"));
const productCustomField_routes_1 = __importDefault(require("./productCustomField/productCustomField.routes"));
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
router.use('/seller', seller_routes_1.default);
router.use('/buyer', buyer_routes_1.default);
router.use("/seller", openai_routes_1.default);
router.use("/custom-field", productCustomField_routes_1.default);
exports.default = router;
