import { Router } from 'express';
import { createProduct, listProduct, updateProductDetails, updateProductImage, updateAllImages, searchProductController,deleteProduct } from '../../controller/seller/seller.controller';
import { verifyToken } from '../../middleware/jwt/jwt';
import uploads from '../../middleware/multer/productImage/multer';
const router = Router();


router.get("/products/search", verifyToken,searchProductController);

router.post('/product', verifyToken, uploads.array("images", 5), createProduct);
router.get('/product', verifyToken, listProduct);
router.patch('/product/update/:id', verifyToken, updateProductDetails);
router.post('/product/update/image/:id', verifyToken, uploads.array("images", 5), updateAllImages);
router.delete("/product/:id",verifyToken,deleteProduct)
    
export default router;

