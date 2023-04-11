module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollments", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    enrollment_date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Enrollment;
};
