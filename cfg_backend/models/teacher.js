const mongoose = require("mongoose");
const validator = require("validator");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
  levels_taught:[{
      type:Number,
      required:true,
  }]
});

module.exports = mongoose.model("Teacher", teacherSchema);
