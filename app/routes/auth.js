import { Router } from "express";
import authController from "../controllers/auth";

const router = Router();
router.route("/signin").post(authController.signin);

export default router;
