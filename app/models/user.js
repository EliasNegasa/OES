module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Please enter a valid email address",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    academic_year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return User;
};
