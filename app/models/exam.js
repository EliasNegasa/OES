module.exports = (sequelize, Sequelize) => {
  const Exam = sequelize.define("exams", {
    exam_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    duration_minutes: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    exam_start: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    exam_end: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return Exam;
};
