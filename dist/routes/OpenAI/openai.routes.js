"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const openai_controller_1 = require("../../controller/OpenAI/openai.controller");
const jwt_1 = require("../../middleware/jwt/jwt");
const router = (0, express_1.Router)();
router.get("/generate-description/:id", jwt_1.verifyToken, openai_controller_1.generateProductDescription);
router.post("/generate-description/:id", jwt_1.verifyToken, openai_controller_1.updateProduct);
exports.default = router;
