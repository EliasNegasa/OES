import express from "express";
import cors from "cors";
import db from "./app/models";
import router from "./app/routes";

const app = express();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
// });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/auth", authRouter);
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
