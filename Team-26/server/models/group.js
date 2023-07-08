const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  groupId: {
    type: Number,
    required: [true, "Group Id is required"],
    unique: true,
  },
  level: {
    type: Number,
    required: [true, "Level is required"],
  },
  programs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
    },
  ],
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  teacherIncharge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: [true, "Teacher Incharge is required"],
  },
});

module.exports = mongoose.model("Group", groupSchema);
