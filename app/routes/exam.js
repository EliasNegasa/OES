import express from "express";
import examController from "../controllers/exam";

const router = express.Router();

router.route("/").get(examController.getExams).post(examController.createExam);

router
  .route("/:id(\\d+)")
  .get(examController.getExamById)
  .put(examController.updateExam)
  .delete(examController.deleteExam);

export default router;
