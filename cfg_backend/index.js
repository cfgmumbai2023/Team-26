const express = require("express");
const dotenv = require("dotenv").config();
const studentRouter = require("./routes/studentRoutes");
const groupRouter = require("./routes/groupRoutes");
const programRouter = require("./routes/programRoutes");
const objectiveRouter = require("./routes/objectiveRoutes");
const reportRouter = require("./routes/reportRoutes");
const connectDb = require("./config/dbConnection");

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentRouter);
app.use("/api/group", groupRouter);
app.use("/api/objective", objectiveRouter);
app.use("/api/program", programRouter);
app.use("/api/report", reportRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
