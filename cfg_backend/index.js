const express = require("express");
const dotenv = require("dotenv").config();
const studentRouter = require("./routes/studentRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const connectDb = require("./config/dbConnection");

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
