const asyncHandler = require("express-async-handler");
const Program = require("../models/program");

// @desc Get program by id
// @route GET /api/program/:id
// @access private
const getProgramById = asyncHandler(async (req, res) => {
  const program = await Program.findById(req.params.id);
  if (!program) {
    res.status(404);
    throw new Error("Program not found");
  }
  res.status(200).json(program);
});

module.exports = { getProgramById };
