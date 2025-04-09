import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

const RatingPage = () => {
  const { storeId } = useParams();
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.post(
        `/ratings/${storeId}`,
        { rating },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Rating submitted successfully!");
    } catch (err) {
      setMessage("Error submitting rating.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Rate This Store</h2>
      <form onSubmit={handleSubmit}>
        <label>Select a rating (1-5):</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RatingPage;
