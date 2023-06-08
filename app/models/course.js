module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    course_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    course_code: {
      type: Sequelize.STRING,
    },
    // course_desciption: {
    //   type: Sequelize.STRING,
    // },
    course_year: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
    lecturer: {
      type: Sequelize.INTEGER,
    },
  });

  return Course;
};
