const express = require("express");
const Student = require("../models/student");
const { createStudent } = require("../controllers/studentController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all students");
});

router.get("/:id", (req, res) => {
  res.send("get student by id");
});

// @desc Create new student
// @route POST /api/student
// @access private
router.post("/", createStudent);

router.patch("/", (req, res) => {
  res.send("update student");
});

module.exports = router;
