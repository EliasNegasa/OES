import { Router } from "express";
import userRouter from "./user";
import courseRouter from "./course";
import enrollmentRouter from "./enrollment";
import examRouter from "./exam";
import questionRouter from "./question";
import answerRouter from "./answer";
import resultRouter from "./result";

const router = Router();

router.use("/users", userRouter);
router.use("/courses", courseRouter);
router.use("/enrollments", enrollmentRouter);
router.use("/exams", examRouter);
router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/results", resultRouter);

export default router;
