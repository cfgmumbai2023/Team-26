const express = require("express");
const Objective = require("../models/objective");
const {
  getObjectives,
  getObjectiveById,
} = require("../controllers/objectiveController");
const router = express.Router();

router.get("/", getObjectives);

router.get("/:id", getObjectiveById);

module.exports = router;
