const express = require("express");
const Student = require("../models/student");
const {
  createStudent,
  updateStudent,
  getAllStudents,
  getStudentById,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all students");
});

router.get("/:id", (req, res) => {
  res.send("get student by id");
});

router.post("/", createStudent);

router.patch("/", updateStudent);

module.exports = router;
