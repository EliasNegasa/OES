import _ from "lodash";
import db from "../models";
import encryptPassword from "../utils/encryptPassword";
import generatePassword from "../utils/generatePassword";

const User = db.user;
const Role = db.role;
const Course = db.course;

const getUsers = async (req, res) => {
  try {
    const user = await User.findAll({ include: [Role, Course] });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [Role, Course],
    });
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
    let { body } = req;
    let _generatedPassword = generatePassword(body.firstname);
    body.password
      ? (body.password = encryptPassword(body.password))
      : (body.password = encryptPassword(_generatedPassword));
    // body.password = encryptPassword(_generatedPassword);

    const user = await User.create(body);

    const { roles, courses } = req.body;
    if (roles) {
      roles.forEach(async (role) => {
        if (_.lowerCase(role.role_name) == "student") role.id = 1;
        if (_.lowerCase(role.role_name) == "admin") role.id = 2;
        if (_.lowerCase(role.role_name) == "lecturer") role.id = 3;
        console.log("Role", role.id);
        const _role = await Role.findOne({ where: { id: role.id } });
        _role && (await user.addRole(role.id));
      });
    }

    if (courses) {
      courses.forEach(async (id) => {
        const course = await Course.findOne({ where: { id } });
        course && (await user.addCourse(course));
      });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    let { body } = req;
    body.password = encryptPassword(body.password);

    const { roles, courses } = req.body;

    const [updated, user] = await User.update(body, {
      where: { id },
      returning: true,
    });

    // const roleInstances = await Role.findAll({
    //   where: {
    //     id: roles,
    //   },
    // });

    // const courseInstances = await Course.findAll({
    //   where: {
    //     id: courses,
    //   },
    // });

    // await user.setRoles(roleInstances);

    // await user.seCourses(courseInstances);

    updated === 1
      ? res.json({ message: "User updated successfully" })
      : res.status(400).json({ message: "User not Found" });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
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
