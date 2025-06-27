"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../../controller/auth/auth.controller");
const jwt_1 = require("../../middleware/jwt/jwt");
const cookie_1 = require("../../middleware/cookie/cookie");
const router = (0, express_1.Router)();
// ─── Google OAuth Routes ──────────────────────────────
router.get("/google", passport_1.default.authenticate("google", {
    scope: ["profile", "email"],
}));
router.get("/google/callback", passport_1.default.authenticate("google", { session: false }), (req, res) => {
    const user = req.user;
    (0, cookie_1.setAuthCookie)(res, user.token);
    res.redirect("http://localhost:3000/api/v1/auth/profile");
});
// ─── Local Auth Routes ────────────────────────────────
router.post("/register", auth_controller_1.userRegi);
router.post("/login", auth_controller_1.userLogin);
router.get("/profile", jwt_1.verifyToken, auth_controller_1.profile);
exports.default = router;
