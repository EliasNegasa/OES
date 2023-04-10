module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define("answers", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    answer_text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_correct: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Answer;
};
