module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("questions", {
    question_text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    question_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    remarks: {
      type: Sequelize.STRING,
    },
    lecturer: {
      type: Sequelize.INTEGER,
    },
  });
  return Question;
};
