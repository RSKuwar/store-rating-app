const db = require("../config/db");

const createUser = async (user) => {
  const [result] = await db.execute(
    "INSERT INTO users (name, email, address, password, role) VALUES (?, ?, ?, ?, ?)",
    [user.name, user.email, user.address, user.password, user.role || "user"]
  );
  return result;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

const getAllUsers = async () => {
  const [rows] = await db.execute("SELECT id, name, email, address, role FROM users");
  return rows;
};

module.exports = { createUser, findUserByEmail, getAllUsers };