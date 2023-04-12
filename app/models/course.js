module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    course_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    course_code: {
      type: Sequelize.STRING,
    },
    course_year: {
      type: Sequelize.INTEGER,
    },
  });

  return Course;
};