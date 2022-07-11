import { Router } from "express";

const checkoutRouter = Router();
checkoutRouter.get("/checkout");
checkoutRouter.post("/checkout");
checkoutRouter.delete("/checkout")

export default checkoutRouter;
