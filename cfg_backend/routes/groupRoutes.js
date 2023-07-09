const express = require("express");
const Group = require("../models/group");
const { getGroups, getGroupById } = require("../controllers/groupController");
const router = express.Router();

router.get("/", getGroups);

router.get("/:id", getGroupById);

module.exports = router;
