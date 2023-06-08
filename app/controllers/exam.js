import db from "../models";

const Exam = db.exam;
const Course = db.course;
const Question = db.question;
const Answer = db.answer;

const getExams = async (req, res) => {
  try {
    const exam = await Exam.findAll({
      include: [Course, Question],
      order: [["createdAt", "ASC"]],
    });

    res.json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findByPk(req.params.id, {
      include: { model: Course, model: Question, include: Answer },
    });
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
    const { questions } = req.body;

    const result = await Exam.update(req.body, {
      where: { id },
    });

    if (questions && questions.length > 0) {
      await Question.update(
        { exam_id: id },
        { where: { id: questions.map((question) => question.id) } }
      );
    }

    result[0] === 1
      ? res.json({ message: "Exam updated successfully" })
      : res.status(400).json({ message: "Exam not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getExamByQuery = async (req, res) => {
  try {
    const query = req.query;

    console.log("QQ", query);

    const exam = await Exam.findAll({
      where: query,
      include: { model: Course, model: Question, include: Answer },
      eager: true,
    });

    res.send(exam);
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

const deleteExam = (req, res) => {
  console.log("DELETE COURSE");
};

module.exports = {
  getExamById,
  getExams,
  getExamByQuery,
  createExam,
  updateExam,
  deleteExam,
};
