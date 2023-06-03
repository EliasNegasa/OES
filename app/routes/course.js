import express from "express";
import courseController from "../controllers/course";

const router = express.Router();

router
  .route("/")
  .get(courseController.getCourses)
  .post(courseController.createCourse);

router
  .route("/:id(\\d+)")
  .get(courseController.getCourseById)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

  router.route("/search").get(courseController.getCoursesByQuery);


export default router;
