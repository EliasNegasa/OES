module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    role_name: {
      type: Sequelize.STRING,
    },
  });

  return Role;
};
