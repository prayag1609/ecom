import { Router } from "express";
import { generateProductDescription,updateProduct } from "../../controller/OpenAI/openai.controller";
import { verifyToken } from "../../middleware/jwt/jwt";

const router = Router();

router.get("/generate-description/:id", verifyToken ,generateProductDescription);
router.post("/generate-description/:id", verifyToken ,updateProduct);

export default router;
