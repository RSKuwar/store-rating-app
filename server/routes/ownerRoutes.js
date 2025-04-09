const express = require("express");
const router = express.Router();
const { addStore } = require("../controllers/storeController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

router.post("/add-store", verifyToken, authorizeRoles("owner"), addStore);

module.exports = router;
