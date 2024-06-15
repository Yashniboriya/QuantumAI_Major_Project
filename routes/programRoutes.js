const express = require("express");
const router = express.Router();
const programController = require("../controllers/programController");

router.get("/search", programController.searchPrograms);

module.exports = router;
