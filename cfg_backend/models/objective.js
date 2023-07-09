const mongoose = require("mongoose");

const objectiveSchema = new mongoose.Schema({
  objectiveName: {
    type: String,
    required: [true, "objective Name is required"],
  },
  objectiveId: {
    type: String,
    required: [true, "objective Id is required"],
  },
});
module.exports = mongoose.model("Objective", objectiveSchema);
