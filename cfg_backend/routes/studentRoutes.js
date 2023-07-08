const express = require("express");
const Student = require("../models/student");
const {
  createStudent,
  getAllStudents,
  getStudentById,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

// @desc Create new student
// @route POST /api/student
// @access private
router.post("/", createStudent);

router.patch("/", (req, res) => {
  res.send("update student");
});

module.exports = router;
