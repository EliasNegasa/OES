module.exports = (sequelize, Sequelize) => {
  const Result = sequelize.define("results", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    score: {
      type: Sequelize.FLOAT,
      primaryKey: true,
    },
  });
  return Result;
};
