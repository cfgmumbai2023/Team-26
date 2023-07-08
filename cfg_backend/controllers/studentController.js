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

// @desc Update student
// @route PATCH /api/student/:id
// @access private

const updateStudent = asyncHandler(async (req, res) => {
  const { studentId, programId, newScore } = req.body;
  try {
    const student = await Student.findById(studentId);

    const programToUpdate = student.program.find(
      (program) => program.program.toString() === programId
    );

    if (!programToUpdate) {
      console.log("Program not found");
      return;
    }

    programToUpdate.score = newScore;

    await student.save();
    console.log("Score updated successfully");
  } catch (error) {
    console.error(error);
  }
});

module.exports = { createStudent, updateStudent };
