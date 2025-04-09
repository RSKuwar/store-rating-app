const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const { submitRating } = require("../controllers/ratingController");

router.post("/:storeId", verifyToken, submitRating);

module.exports = router;
