const db = require("../config/db");

const submitRating = async (req, res) => {
  const userId = req.user.id;
  const { storeId } = req.params;
  const { rating } = req.body;

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }

  try {
    await db.execute(
      "INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE rating = ?",
      [userId, storeId, rating, rating]
    );
    res.status(200).json({ message: "Rating submitted successfully" });
  } catch (err) {
    console.error("Error submitting rating:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { submitRating };
