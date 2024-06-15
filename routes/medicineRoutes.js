const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicineController");

router.get("/search", medicineController.searchMedicines);

module.exports = router;
