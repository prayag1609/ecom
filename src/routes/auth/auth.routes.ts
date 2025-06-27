import { Router } from "express";
import passport from "passport";
import { userRegi, userLogin, profile } from "../../controller/auth/auth.controller";
import { verifyToken } from "../../middleware/jwt/jwt";
import { setAuthCookie } from "../../middleware/cookie/cookie";
const router = Router();

// ─── Google OAuth Routes ──────────────────────────────

router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }));

router.get("/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const user = req.user as { token: string };
    setAuthCookie(res, user.token);
    res.redirect("http://localhost:3000/api/v1/auth/profile");
  }
);

// ─── Local Auth Routes ────────────────────────────────
router.post("/register", userRegi);
router.post("/login", userLogin);
router.get("/profile", verifyToken, profile);

export default router;
