const express = require("express");
const Teacher = require("../models/teacher");
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateData,
} = require("../controllers/teacherController");
const router = express.Router();

router.get("/", getAllTeachers);

router.get("/:id", getTeacherById);

// @desc Create new student
// @route POST /api/student
// @access private
router.post("/", createTeacher);

router.patch("/:id", updateData);

module.exports = router;
