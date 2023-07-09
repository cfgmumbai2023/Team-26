const express = require("express");
const Student = require("../models/student");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateData,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

// @desc Create new student
// @route POST /api/student
// @access private
router.post("/", createStudent);

router.patch("/:id", updateData);

module.exports = router;
