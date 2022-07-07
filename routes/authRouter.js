import { Router } from "express";
import { validateSignIn, validateSignUp } from "../middlewares/validateAuthMiddleware.js";
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.post("/sign-in", validateSignIn, signIn);

export default authRouter;