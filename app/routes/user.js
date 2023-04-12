import express from "express";
import userController from "../controllers/user";

const router = express.Router();

router.route("/").get(userController.getUsers).post(userController.createUser);

router
  .route("/:id(\\d+)")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
