import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import signUpMiddleware from '../middlewares/authMiddleware.js';


const router = Router();
router.post('/sign-up', signUpMiddleware, signUp);


export default router;