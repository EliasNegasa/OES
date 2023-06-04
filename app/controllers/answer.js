import db from "../models";

const Answer = db.answer;
const Question = db.question;

const getAnswers = async (req, res) => {
  try {
    const answer = await Answer.findAll({
      include: [Question],
      order: [["createdAt", "ASC"]],
    });

    res.json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getAnswerById = async (req, res) => {
  try {
    const answer = await Answer.findByPk(req.params.id, {
      include: [Question],
    });
    answer == null
      ? res.status(404).json({ message: "Answer not found" })
      : res.json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createAnswer = async (req, res) => {
  try {
    const answer = await Answer.create(req.body);
    res.json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateAnswer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Answer.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Answer updated successfully" })
      : res.status(400).json({ message: "Answer not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAnswer = (req, res) => {
  console.log("DELETE COURSE");
};

module.exports = {
  getAnswerById,
  getAnswers,
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
