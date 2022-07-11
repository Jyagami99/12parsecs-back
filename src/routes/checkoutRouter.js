import { Router } from "express";
import { getCheckout, postCheckout } from "../controllers/checkoutController.js";
import { validaToken } from "../middlewares/tokenMidleware.js";

const checkoutRouter = Router();

checkoutRouter.post("/checkout", validaToken, postCheckout);

export default checkoutRouter;
