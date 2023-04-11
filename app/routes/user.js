import express from "express";
import userController from "../controllers/user";

const router = express.Router();

router.route("/").get(userController.getUsers).post();

router.route("/:id(\\d+)").put().delete();

export default router;
