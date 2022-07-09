import { Router } from "express";
import { getProduct, getProductId } from '../controllers/productController.js'



const router = Router();
router.get('/products', getProduct);
router.get('/products/:id', getProductId);



export default router;