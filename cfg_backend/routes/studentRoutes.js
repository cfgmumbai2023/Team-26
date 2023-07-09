const express = require("express");
const Student = require("../models/student");
const {
  createStudent,
  //   updateStudent,
  getAllStudents,
  getStudentById,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

router.post("/", createStudent);

// router.patch("/", updateStudent);

module.exports = router;
