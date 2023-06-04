import db from "../models";

const Enrollment = db.enrollment;
const User = db.user;
const Course = db.course;
const Exam = db.exam;

const getEnrollments = async (req, res) => {
  try {
    const enrollment = await Enrollment.findAll({
      include: [User, Course],
      order: [["createdAt", "ASC"]],
    });

    res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id, {
      include: [User, Course],
    });
    enrollment == null
      ? res.status(404).json({ message: "Enrollment not found" })
      : res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateEnrollment = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Enrollment.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Enrollment updated successfully" })
      : res.status(400).json({ message: "Enrollment not Found" });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

const getEnrollmentsByQuery = async (req, res) => {
  try {
    const query = req.query;

    console.log("QQ", query);

    const enrollments = await Enrollment.findAll({
      where: query,
      include: { model: User, model: Course, include: Exam },
      // include: {model: User, model: Course, } [User, Course],
      eager: true,
    });

    res.send(enrollments);
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

const deleteEnrollment = (req, res) => {
  console.log("DELETE Enrollment");
};

module.exports = {
  getEnrollments,
  getEnrollmentById,
  createEnrollment,
  updateEnrollment,
  getEnrollmentsByQuery,
  deleteEnrollment,
};
