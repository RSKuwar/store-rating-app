const { createUser, getAllUsers } = require("../models/userModel");
const { createStore, getAllStores } = require("../models/storeModel");

const addUser = async (req, res) => {
  try {
    await createUser(req.body);
    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addStore = async (req, res) => {
  try {
    await createStore(req.body);
    res.status(201).json({ message: "Store added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listStores = async (req, res) => {
  try {
    const stores = await getAllStores();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addUser, addStore, listUsers, listStores };