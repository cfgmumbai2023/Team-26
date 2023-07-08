const express = require("express");
const dotenv = require("dotenv").config();
const studentRouter = require("./routes/studentRoutes");
const connectDb = require("./config/dbConnection");

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
