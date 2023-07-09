const asyncHandler = require("express-async-handler");
const Group = require("../models/group");

// @desc Get all groups
// @route GET /api/group
// @access private
const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find({});
  res.json(groups);
});

// @desc Get group by id
// @route GET /api/group/:id
// @access private
const getGroupById = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) {
    res.status(404);
    throw new Error("Group not found");
  }
  res.status(200).json(group);
});

module.exports = { getGroups, getGroupById };
