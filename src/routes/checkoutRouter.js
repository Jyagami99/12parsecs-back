import { Router } from "express";
import { getCheckout, postCheckout } from "../controllers/checkoutController.js";

const checkoutRouter = Router();
checkoutRouter.get("/checkout", getCheckout);
checkoutRouter.post("/checkout", postCheckout);
checkoutRouter.delete("/checkout")

export default checkoutRouter;
