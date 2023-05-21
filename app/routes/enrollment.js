import express from "express";
import enrollmentController from "../controllers/enrollment";

const router = express.Router();

router
  .route("/")
  .get(enrollmentController.getEnrollments)
  .post(enrollmentController.createEnrollment);

router
  .route("/:id(\\d+)")
  .get(enrollmentController.getEnrollmentById)
  .put(enrollmentController.updateEnrollment)
  .delete(enrollmentController.deleteEnrollment);

router.route("/search").get(enrollmentController.getEnrollmentsByQuery);

export default router;
