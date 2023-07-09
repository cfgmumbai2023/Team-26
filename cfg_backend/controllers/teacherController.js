const asyncHandler = require("express-async-handler");
const Student = require("../models/teacher");

// @desc Create new student
// @route POST /api/students
// @access private

const createTeacher = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, password, groups, levels_taught } = req.body;

  const teacher = await Teacher.create({
    name,
    email,
    password,
    groups,
    levels_taught,
  });
  res.status(201).json(Teacher);
});

const getAllTeachers = async (req, res) => {
  try {
    const users = await Teacher.find(); // Use appropriate query or method to fetch data from MongoDB
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const objectId = req.params.id;

    const object = await Student.findById(objectId);

    if (!object) {
      return res.status(404).json({ error: "Object not found" });
    }

    // Send the retrieved object as a response
    res.json(object);
  } catch (error) {
    console.error("Error fetching object:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateData = async (req, res) => {
  const teacherId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedTeacher = await Student.findByIdAndUpdate(
      teacherId,
      updatedData,
      { new: true }
    );

    if (!updatedTeacher) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(updatedTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createTeacher, getAllTeachers, getTeacherById, updateData };
