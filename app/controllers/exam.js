import db from "../models";

const Exam = db.exam;
const Course = db.course;

const getExams = async (req, res) => {
  try {
    const exam = await Exam.findAll({ include: Course });

    res.json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findByPk(req.params.id, { include: Course });
    exam == null
      ? res.status(404).json({ message: "Exam not found" })
      : res.json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createExam = async (req, res) => {
  try {
    const exam = await Exam.create(req.body);
    res.json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateExam = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Exam.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Exam updated successfully" })
      : res.status(400).json({ message: "Exam not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteExam = (req, res) => {
  console.log("DELETE COURSE");
};

module.exports = {
  getExamById,
  getExams,
  createExam,
  updateExam,
  deleteExam,
};
