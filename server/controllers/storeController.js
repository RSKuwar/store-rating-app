const db = require("../config/db");

const addStore = (req, res) => {
  const { name, address } = req.body;
  const ownerId = req.user.id;

  if (!name || !address) {
    return res.status(400).json({ message: "Name and address are required" });
  }

  const sql = "INSERT INTO stores (name, address, owner_id) VALUES (?, ?, ?)";
  db.query(sql, [name, address, ownerId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Store added successfully" });
  });
};

module.exports = { addStore };
