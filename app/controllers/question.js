import db from "../models";

const Question = db.question;
const Exam = db.exam;

const getQuestions = async (req, res) => {
  try {
    const question = await Question.findAll({ include: [Exam] });

    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id, {
      include: [Exam],
    });
    question == null
      ? res.status(404).json({ message: "Question not found" })
      : res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Question.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Question updated successfully" })
      : res.status(400).json({ message: "Question not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteQuestion = (req, res) => {
  console.log("DELETE QUESTION");
};

module.exports = {
  getQuestionById,
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};