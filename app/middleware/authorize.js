import db from "../models";

const User = db.user;

const isAdmin = (req, res, next) => {
  console.log("IS ADMIN MIDDLEWARE");
  User.findByPk(req.id).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].role_name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

const isStudent = (req, res, next) => {
  User.findByPk(req.id).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].role_name === "student") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Student Role!",
      });
    });
  });
};

const isLecturer = (req, res, next) => {
  User.findByPk(req.id).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].role_name === "lecturer") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Lecturer Role!",
      });
    });
  });
};

const isLecturerOrAdmin = (req, res, next) => {
  User.findByPk(req.id).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].role_name === "lecturer") {
          next();
          return;
        }

        if (roles[i].role_name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Lecturer or Admin Role!",
      });
    });
  });
};

module.exports = {
  isAdmin,
  isStudent,
  isLecturer,
  isLecturerOrAdmin,
};
