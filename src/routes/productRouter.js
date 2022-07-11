import { Router } from "express";
import { getProduct, getProductId } from "../controllers/productController.js";

const productRouter = Router();
productRouter.get("/products", getProduct);
productRouter.get("/products/:id", getProductId);

export default productRouter;
