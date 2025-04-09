// server/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { addUser, addStore, listUsers, listStores } = require("../controllers/adminController");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

// Admin-only routes
router.use("/users", verifyToken, authorizeRoles("admin"));
router.get("/users", listUsers);

// Shared route: Admin and Owner can add stores
router.post("/add-store", verifyToken, authorizeRoles("admin", "owner"));
router.get("/stores", verifyToken, authorizeRoles("admin", "owner"), listStores);

// Optional: restrict add-user to admin
router.post("/add-user", verifyToken, authorizeRoles("admin"));

module.exports = router;
