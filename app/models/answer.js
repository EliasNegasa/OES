module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define("answers", {
    answer_text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    is_correct: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    lecturer: {
      type: Sequelize.INTEGER,
    },
  });

  return Answer;
};
