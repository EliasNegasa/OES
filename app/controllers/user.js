import db from "../models";

const User = db.user;
const Role = db.role;

const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user == null
      ? res.status(404).json({ message: "User not found" })
      : res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await User.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "User updated successfully" })
      : res.status(400).json({ message: "User not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = (req, res) => {
  console.log("DELETE COURSE");
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
