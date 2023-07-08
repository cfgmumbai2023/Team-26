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
  res.status(201).json(student);
});

module.exports = { createStudent };
