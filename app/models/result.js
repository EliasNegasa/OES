module.exports = (sequelize, Sequelize) => {
  const Result = sequelize.define("results", {
    score: {
      type: Sequelize.FLOAT,
    },
    status: {
      type: Sequelize.STRING,
    },
    lecturer: {
      type: Sequelize.INTEGER,
    },
  });
  return Result;
};
