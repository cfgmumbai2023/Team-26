const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  udid: {
    type: String,
    required: [true, "UDID is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "DOB is required"],
  },
  dateOfAdmission: {
    type: Date,
    required: [true, "DOA is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  aadharId: {
    type: Number,
    required: [true, "Aadhar Id is required"],
    unique: true,
  },
  contactNo: {
    type: Number,
    required: [true, "Contact No is required"],
    unique: true,
  },
  disability: {
    type: String,
    required: [true, "Disability is required"],
  },
  schoolName: {
    type: String,
    required: [true, "School Name is required"],
  },

  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },

  program: [
    {
      program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
