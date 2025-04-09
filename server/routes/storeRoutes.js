const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

// Add a new store (POST)
router.post("/", verifyToken, authorizeRoles("owner"), async (req, res) => {
  const { name, address } = req.body;
  const ownerId = req.user.id;

  try {
    await db.query("INSERT INTO stores (name, address, owner_id) VALUES (?, ?, ?)", [name, address, ownerId]);
    res.status(201).json({ message: "Store added successfully" });
  } catch (err) {
    console.error("Error adding store:", err.message);
    res.status(500).json({ error: "Failed to add store" });
  }
});

// 👇 Add this GET route
router.get("/", async (req, res) => {
  try {
    const [stores] = await db.query("SELECT * FROM stores");
    res.json(stores);
  } catch (err) {
    console.error("Error fetching stores:", err.message);
    res.status(500).json({ error: "Failed to fetch stores" });
  }
});

module.exports = router;
