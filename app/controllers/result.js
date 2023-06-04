import db from "../models";

const Result = db.result;
const Enrollment = db.enrollment;
const Exam = db.exam;
const User = db.user;

const getResults = async (req, res) => {
  try {
    const result = await Result.findAll({
      include: [{ model: Exam }, { model: Enrollment, include: User }],
      order: [["createdAt", "ASC"]],
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getResultById = async (req, res) => {
  try {
    const result = await Result.findByPk(req.params.id, {
      include: [{ model: Exam }, { model: Enrollment, include: User }],
    });
    result == null
      ? res.status(404).json({ message: "Result not found" })
      : res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createResult = async (req, res) => {
  try {
    const result = await Result.create(req.body);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateResult = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Result.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Result updated successfully" })
      : res.status(400).json({ message: "Result not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getResultsByQuery = async (req, res) => {
  try {
    const query = req.query;

    console.log("QQ", query);

    const result = await Result.findAll({
      where: query,
      include: { model: Exam, model: Enrollment, include: User },
      eager: true,
    });

    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

const deleteResult = (req, res) => {
  console.log("DELETE Result");
};

module.exports = {
  getResultById,
  getResults,
  getResultsByQuery,
  createResult,
  updateResult,
  deleteResult,
};
