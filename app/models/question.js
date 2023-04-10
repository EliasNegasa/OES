module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("questions", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    question_text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    question_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    remarks: {
      type: Sequelize.STRING,
    },
  });
  return Question;
};
