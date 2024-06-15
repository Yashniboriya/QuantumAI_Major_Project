const express = require("express");
const router = express.Router();
const queryController = require("../controllers/queryController");

router.get("/search", queryController.searchQueries);

module.exports = router;
