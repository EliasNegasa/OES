import express from "express";
import resultController from "../controllers/result";

const router = express.Router();

router
  .route("/")
  .get(resultController.getResults)
  .post(resultController.createResult);

router
  .route("/:id(\\d+)")
  .get(resultController.getResultById)
  .put(resultController.updateResult)
  .delete(resultController.deleteResult);

export default router;
