module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Just for 2d@y",
  DB: "oes_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
