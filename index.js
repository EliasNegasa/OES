import express from "express";
import cors from "cors";
import db from "./app/models";
const Role = db.role;
import router from "./app/routes";
import authRouter from "./app/routes/auth";
import auth from "./app/middleware/authenticate";

const app = express();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("DROP and RECREATE");
//   initial();
// });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/api", auth.verifyToken, router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     role_name: "student",
//   });

//   Role.create({
//     id: 2,
//     role_name: "admin",
//   });

//   Role.create({
//     id: 3,
//     role_name: "lecturer",
//   });
// }
