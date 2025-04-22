const express = require("express");
const router = express.Router();
const { addSchool } = require("../controllers/schoolController");
const { validateSchool } = require("../middlewares/validateSchool");
const { listSchools } = require("../controllers/schoolController");

// Route to add a new school
router.post("/addSchool", validateSchool, addSchool);

router.get("/listSchools", listSchools);

module.exports = router;
