const asyncHandler = require("express-async-handler");
const Report = require("../models/report");

// @desc Create new report
// @route POST /api/reports
// @access private
const createReport = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { r_id, studentId, level, scores, year, quarter } = req.body;

  const report = await Report.create({
    r_id,
    studentId,
    level,
    scores,
    year,
    quarter,
  });
  res.status(201).json(Report);
});

// @desc Get all reports
// @route GET /api/reports
// @access private

const getAllReports = asyncHandler(async (req, res) => {
  try {
    const reports = await Report.find(); // Use appropriate query or method to fetch data from MongoDB
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { createReport, getAllReports };
