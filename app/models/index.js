import config from "../config/db";
import Sequelize from "sequelize";
import user from "./user";
import role from "./role";
import course from "./course";
import enrollment from "./enrollments";
import exam from "./exam";
import question from "./question";
import answer from "./answer";

const sequelize = new Sequelize(config.DB, config.HOST, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const db = {
  user: user(sequelize, Sequelize),
  role: role(sequelize, Sequelize),
  course: course(sequelize, Sequelize),
  enrollment: enrollment(sequelize, Sequelize),
  exam: exam(sequelize, Sequelize),
  question: question(sequelize, Sequelize),
  answer: answer(sequelize, Sequelize),
};

// db.user = require("../models/user")(sequelize, Sequelize);
// db.role = require("../models/role")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.course.belongsToMany(db.user, {
  through: "course_users",
  foreignKey: "course_id",
  otherKey: "user_id",
});

db.user.belongsToMany(db.course, {
  through: "course_users",
  foreignKey: "user_id",
  otherKey: "course_id",
});

db.user.hasMany(db.enrollment, { foreignKey: "user_id" });

db.enrollment.belongsTo(db.user, { foreignKey: "user_id" });

db.course.hasMany(db.enrollment, { foreignKey: "course_id" });

db.enrollment.belongsTo(db.course, { foreignKey: "course_id" });

db.course.hasMany(db.exam, { foreignKey: "course_id" });

db.exam.belongsTo(db.course, { foreignKey: "course_id" });

db.exam.hasMany(db.question, { foreignKey: "exam_id" });

db.question.belongsTo(db.exam, { foreignKey: "exam_id" });

db.question.hasMany(db.answer, { foreignKey: "question_id" });

db.answer.belongsTo(db.question, { foreignKey: "question_id" });

module.exports = db;
