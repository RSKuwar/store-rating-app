import { useState } from "react";
import api from "../api/axios";
import "../styles/Form.css";

const AddStore = () => {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/stores",
        { name: storeName, address },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Store added successfully!");
      setStoreName("");
      setAddress("");
    } catch (err) {
      console.error("Error adding store:", err.response?.data || err.message);
      setMessage("Failed to add store");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Store Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Add Store</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddStore;
