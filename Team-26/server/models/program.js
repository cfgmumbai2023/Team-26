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
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const program = mongoose.model("Program", programSchema);
