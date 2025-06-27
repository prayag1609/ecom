"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/core/middleware/multer/multer.ts
const multer_1 = __importDefault(require("multer"));
// const storage = multer.memoryStorage();
const storage = multer_1.default.diskStorage({});
const upload = (0, multer_1.default)({ storage,
});
exports.default = upload;
