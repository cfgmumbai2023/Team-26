const express = require("express");
const Report = require("../models/report");
const {
  createReport,
  getAllReports,
} = require("../controllers/reportController");

const router = express.Router();

router.get("/", getAllReports);
router.post("/", createReport);

module.exports = router;
