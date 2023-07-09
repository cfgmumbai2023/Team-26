const express = require("express");
const Program = require("../models/program");
const { getProgramById } = require("../controllers/programController");
const router = express.Router();

router.get("/:id", getProgramById);

module.exports = router;
