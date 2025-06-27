import { Router } from "express";
import authRoutes from "../routes/auth/auth.routes";
import sellerRoutes from "./seller/seller.routes";
import buyerRoutes from "./buyer/buyer.routes";
import op from "./OpenAI/openai.routes"
import productCustom from "./productCustomField/productCustomField.routes"
const router = Router();

router.use('/auth', authRoutes);     
router.use('/seller', sellerRoutes); 
router.use('/buyer', buyerRoutes);   
router.use("/seller",op);
router.use("/custom-field",productCustom)

export default router;
