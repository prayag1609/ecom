import { Router } from "express";
import { verifyToken } from "../../middleware/jwt/jwt";
import {
  createProductCustomField,
  getProductCustomFields,
  updateProductCustomField,
  deleteProductCustomField
} from "../../controller/productCustom/productCustomField.controller";
const router = Router();
router.post("/:id",verifyToken, createProductCustomField);
router.get("/",verifyToken, getProductCustomFields);
router.put("/:id",verifyToken, updateProductCustomField);
router.delete("/:id",verifyToken, deleteProductCustomField);
export default router;
