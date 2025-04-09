const db = require("../config/db");

const createStore = async (store) => {
  const [result] = await db.execute(
    "INSERT INTO stores (name, email, address, owner_id) VALUES (?, ?, ?, ?)",
    [store.name, store.email, store.address, store.owner_id || null]
  );
  return result;
};

const getAllStores = async () => {
  const [rows] = await db.execute(
    `SELECT s.*, IFNULL(AVG(r.rating), 0) as average_rating 
     FROM stores s 
     LEFT JOIN ratings r ON s.id = r.store_id 
     GROUP BY s.id`
  );
  return rows;
};

module.exports = { createStore, getAllStores };