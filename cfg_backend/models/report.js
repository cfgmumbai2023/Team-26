const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  r_id: {
    type: String,
    required: [true, "Objective Name is required"],
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
  program: [
    {
      programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
        required: true,
      },
      objective: [
        {
          name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Objective",
          },
          score: {
            type: Number,
          },
        },
      ],
    },
  ],
  year: {
    type: Date,
    default: Date.now(),
  },
  quarter: {
    type: Number,
    required: [true, "Quarter is required"],
  },
});

module.exports = mongoose.model("Report", reportSchema);
