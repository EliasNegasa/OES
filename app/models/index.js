import config from "../config/db";
import Sequelize from "sequelize";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
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

db.user = require("../models/user")(sequelize, Sequelize);
db.role = require("../models/role")(sequelize, Sequelize);
db.course = require("../models/course")(sequelize, Sequelize);
db.enrollment = require("../models/enrollment")(sequelize, Sequelize);
db.exam = require("../models/exam")(sequelize, Sequelize);
db.question = require("../models/question")(sequelize, Sequelize);
db.answer = require("../models/answer")(sequelize, Sequelize);
db.result = require("../models/result")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  // as: "user",
  foreignKey: "role_id",
  otherKey: "user_id",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  // as: "role",
  foreignKey: "user_id",
  otherKey: "role_id",
});

db.course.belongsToMany(db.user, {
  through: "course_users",
  // as: "user",
  foreignKey: "course_id",
  otherKey: "user_id",
});

db.user.belongsToMany(db.course, {
  through: "course_users",
  // as: "course",
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

db.exam.hasMany(db.enrollment, { foreignKey: "exam_id" });

db.question.belongsTo(db.exam, { foreignKey: "exam_id" });

db.question.hasMany(db.answer, { foreignKey: "question_id" });

db.answer.belongsTo(db.question, { foreignKey: "question_id" });

db.enrollment.hasOne(db.result, { foreignKey: "enrollment_id" });

db.enrollment.hasOne(db.exam, { foreignKey: "enrollment_id" });

db.result.belongsTo(db.enrollment, { foreignKey: "enrollment_id" });

db.exam.hasMany(db.result, { foreignKey: "exam_id" });

db.result.belongsTo(db.exam, { foreignKey: "exam_id" });

db.ROLES = ["admin", "student", "lecturer"];

module.exports = db;
