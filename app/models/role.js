module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    role_name: {
      type: Sequelize.STRING,
    },
  });

  return Role;
};
