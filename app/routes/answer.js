import express from "express";
import answerController from "../controllers/answer";

const router = express.Router();

router
  .route("/")
  .get(answerController.getAnswers)
  .post(answerController.createAnswer);

router
  .route("/:id(\\d+)")
  .get(answerController.getAnswerById)
  .put(answerController.updateAnswer)
  .delete(answerController.deleteAnswer);

export default router;
