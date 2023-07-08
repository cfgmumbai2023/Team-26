const asyncHandler = require("express-async-handler");
const Student = require("../models/student");

// @desc Create new student
// @route POST /api/students
// @access private

const createStudent = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const {
    udid,
    name,
    age,
    gender,
    dateOfBirth,
    dateOfAdmission,
    address,
    aadharId,
    contactNo,
    disability,
    schoolName,
    group,
    program,
  } = req.body;

  const student = await Student.create({
    udid,
    name,
    age,
    gender,
    dateOfBirth,
    dateOfAdmission,
    address,
    aadharId,
    contactNo,
    disability,
    schoolName,
    group,
    program,
  });
  res.status(201).json(Student);
});

const getAllStudents = async (req, res) => {
  try {
    const users = await Student.find(); // Use appropriate query or method to fetch data from MongoDB
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStudentById = async (req, res) => {
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

module.exports = { createStudent, getAllStudents, getStudentById };
