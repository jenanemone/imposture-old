// // Once a series of recordings is made into a session

// // Create Practicum for each session

// // Once Practicum is created....

// // Add option to analyze, which will
// // => Link to single practice analysis page (depending on user's click)

const express = require("express");
const router = express.Router();
const recordings = require("../controllers/record");
const speechController = require("../controllers/speech");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, speechController.getSpeech);

module.exports = router;
