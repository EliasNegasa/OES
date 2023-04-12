import db from "../models";

const Role = db.role;

const getRoles = async (req, res) => {
  try {
    const role = await Role.findAll();

    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const getRoleById = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    role == null
      ? res.status(404).json({ message: "Role not found" })
      : res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Role.update(req.body, {
      where: { id },
    });

    result[0] === 1
      ? res.json({ message: "Role updated successfully" })
      : res.status(400).json({ message: "Role not Found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getRoleById,
  getRoles,
  createRole,
  updateRole,
};
