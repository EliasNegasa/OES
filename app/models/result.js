module.exports = (sequelize, Sequelize) => {
  const Result = sequelize.define("results", {
    score: {
      type: Sequelize.FLOAT,
    },
  });
  return Result;
};
