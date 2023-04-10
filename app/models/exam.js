module.exports = (sequelize, Sequelize) => {
  const Exam = sequelize.define("exams", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    exam_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    duration_minutes: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    exam_start: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    exam_end: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Exam;
};
