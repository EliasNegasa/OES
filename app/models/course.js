module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    course_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    course_code: {
      type: Sequelize.STRING,
    },
    course_year: {
      type: Sequelize.STRING,
    },
  });

  return Course;
};
