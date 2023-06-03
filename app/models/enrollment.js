module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollments", {
    enrollment_date: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "Please enter a valid date",
        },
      },
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return Enrollment;
};
