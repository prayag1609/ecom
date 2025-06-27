import { Router } from 'express';
import { listProduct,addProduct, viewKart } from '../../controller/buyer/buyer.controller';
import { verifyToken } from '../../middleware/jwt/jwt';
const router = Router();

// router.post('/product', verifyToken, uploads.si/ngle("image") ,createProduct);
router.get('/product', verifyToken ,listProduct);
router.get('/product/:id/:quantity', verifyToken, addProduct);
router.get('/kart', verifyToken, viewKart);
// router.post('/login',userLogin);

export default router;