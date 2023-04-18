import express from "express";
import userController from "../controllers/user";
import authorize from "../middleware/authorize";

const router = express.Router();

router
  .route("/")
  // .all(authorize.isAdmin)
  .get(userController.getUsers)
  .post(userController.createUser);

router
  .route("/:id(\\d+)")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
