const asyncHandler = require("express-async-handler");
const Objective = require("../models/objective");

// @desc Get all objectives
// @route GET /api/objectives
// @access private

const getObjectives = asyncHandler(async (req, res) => {
  const objectives = await Objective.find({});
  res.json(objectives);
});

// @desc Get Objective by id
// @route GET /api/objective/:id
// @access private

const getObjectiveById = asyncHandler(async (req, res) => {
  const objective = await Objective.findById(req.params.id);
  if (!objective) {
    res.status(404);
    throw new Error("Objective not found");
  }
  res.status(200).json(objective);
});

module.exports = { getObjectives, getObjectiveById };
