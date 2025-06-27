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
exports.generateToken = exports.verifyToken = void 0;
const httpres_1 = require("../../utils/helper/httpRes/httpres");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    // console.log(token);
    if (!token)
        return (0, httpres_1.sendErrorResponse)(res, 400, "Unauthorized");
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            // console.error("JWT_SECRET is not set in environment variables");
            return (0, httpres_1.sendErrorResponse)(res, 500, "Server configuration error");
        }
        const decode = jsonwebtoken_1.default.verify(token, secret);
        req.user = { userId: decode.userId, role: decode.role };
        next();
    }
    catch (error) {
        return (0, httpres_1.sendErrorResponse)(res, 400, "Unauthorized or invalid token");
    }
});
exports.verifyToken = verifyToken;
const generateToken = (userId, role) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    return jsonwebtoken_1.default.sign({ userId, role }, secret, { expiresIn: "1h" });
};
exports.generateToken = generateToken;
