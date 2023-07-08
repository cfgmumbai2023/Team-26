const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  programName: {
    type: String,
    required: [true, "program Name is required"],
  },
  programId: {
    type: String,
    required: [true, "program Id is required"],
  },

  objective: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Objective",
    },
  ],
});

const program = mongoose.model("Program", programSchema);
