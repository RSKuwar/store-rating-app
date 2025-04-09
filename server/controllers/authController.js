const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { findUserByEmail, createUser } = require("../models/userModel");
dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ name, email, password: hashedPassword, address, role: "user" });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", email, password); 

    const user = await findUserByEmail(email);
    if (!user) {
      console.log("User not found for email:", email); 
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch for user:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });    
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: err.message });
  }
};


module.exports = { register, login };
