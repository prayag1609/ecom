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
exports.profile = exports.userLogin = exports.userRegi = void 0;
const prisma_1 = require("../../generated/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const httpres_1 = require("../../utils/helper/httpRes/httpres");
const jwt_1 = require("../../middleware/jwt/jwt");
const prisma = new prisma_1.PrismaClient();
const userRegi = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name, role } = req.body;
        const userRole = ["seller", "buyer"];
        if (!email || !password || !name || !role || !userRole.includes(role)) {
            res.status(400).json({ message: "Missing required fields or invalid role(seller,buyer)" });
            return;
        }
        const existingUser = yield prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            res.status(409).json({ message: "Email already registered" });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role,
            },
        });
        res.status(201).json({ message: "User registered successfully", userId: user.id });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.userRegi = userRegi;
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const userData = yield prisma.user.findFirst({ where: { email: email } });
        if (!userData) {
            (0, httpres_1.sendErrorResponse)(res, 404, "email is not found");
            return;
        }
        const isValidPassword = yield bcrypt_1.default.compare(password, userData.password);
        if (!isValidPassword) {
            (0, httpres_1.sendErrorResponse)(res, 401, "Invalid password");
            return;
        }
        // const token = jwt.sign(
        //     {
        //         userId: userData.id,
        //         role: userData.role,
        //     },
        //     "SDJFILUWNE8I3RNX34R46587678R68X3B8458",
        //     { expiresIn: "1h" }
        // );
        const token = (0, jwt_1.generateToken)(userData.id, userData.role);
        if (!token) {
            (0, httpres_1.sendErrorResponse)(res, 500, "Failed to generate token");
        }
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000,
            sameSite: "lax",
            secure: false,
        });
        // setAuthCookie(res,token);
        (0, httpres_1.sendSucessResponse)(res, 200, `User logged in sucess-fully as a ${userData.role}...`, token);
    }
    catch (error) {
        console.error(error);
        (0, httpres_1.sendErrorResponse)(res, 500, "Server error");
    }
});
exports.userLogin = userLogin;
const profile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log(user);
    if (!user) {
        return next((0, httpres_1.sendErrorResponse)(res, 401, "Unauthorized"));
    }
    const userData = yield prisma.user.findFirst({ where: { id: user.userId } });
    if (!userData) {
        (0, httpres_1.sendErrorResponse)(res, 404, "User not found");
        return; // ✅ Prevent further execution
    }
    (0, httpres_1.sendSucessResponse)(res, 200, "Profile", userData);
    return;
});
exports.profile = profile;
