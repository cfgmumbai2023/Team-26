const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  r_id: {
    type: String,
    required: [true, "Objective Name is required"],
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
  objectives: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },
  date:{
    type:Date,
    required:true,
});

const Program = mongoose.model("Program", programSchema);
