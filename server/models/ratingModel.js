const db = require("../config/db");

const submitRating = async (user_id, store_id, rating) => {
  await db.execute(
    `REPLACE INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)`,
    [user_id, store_id, rating]
  );
};

const getRatingsForStore = async (store_id) => {
  const [rows] = await db.execute(
    `SELECT u.name, r.rating, r.created_at FROM ratings r
     JOIN users u ON r.user_id = u.id
     WHERE r.store_id = ?`, [store_id]);
  return rows;
};

const getUserRating = async (user_id, store_id) => {
  const [rows] = await db.execute(
    `SELECT rating FROM ratings WHERE user_id = ? AND store_id = ?`, [user_id, store_id]);
  return rows[0];
};

module.exports = { submitRating, getRatingsForStore, getUserRating };