import db from "../models";

const User = db.User;

const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  getUsers,
};
