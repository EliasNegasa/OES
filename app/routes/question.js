import express from "express";
import questionController from "../controllers/question";

const router = express.Router();

router
  .route("/")
  .get(questionController.getQuestions)
  .post(questionController.createQuestion);

router
  .route("/:id(\\d+)")
  .get(questionController.getQuestionById)
  .put(questionController.updateQuestion)
  .delete(questionController.deleteQuestion);

export default router;
