import db from "../models";

const Course = db.course;
const User = db.user;
const Enrollment = db.enrollment;
const Exam = db.exam;

const getCourses = async (req, res) => {
  try {
    const course = await Course.findAll({ include: [Enrollment, Exam] });

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id, {
      include: [User, Enrollment, Exam],
    });
    course == null
      ? res.status(404).json({ message: "Course not found" })
      : res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Course.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Course updated successfully" })
      : res.status(400).json({ message: "Course not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getCoursesByQuery = async (req, res) => {
  try {
    const query = req.query;

    console.log("QQ", query);

    const courses = await Course.findAll({
      where: query,
      include: { model: User, model: Enrollment, include: Exam },
      // include: {model: User, model: Course, } [User, Course],
      eager: true,
    });

    res.send(courses);
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

const deleteCourse = (req, res) => {
  console.log("DELETE USER");
};

module.exports = {
  getCourses,
  getCourseById,
  updateCourse,
  createCourse,
  deleteCourse,
  getCoursesByQuery,
};
