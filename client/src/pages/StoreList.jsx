import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get("/stores").then((res) => setStores(res.data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Store List</h2>
      <ul>
        {stores.map((store) => (
          <li key={store.id} style={{ marginBottom: "1rem" }}>
            <div>
              <strong>{store.name}</strong> - {store.address} (Rating:{" "}
              {parseFloat(store.average_rating).toFixed(1)})
            </div>
            <Link to={`/rate/${store.id}`}>⭐ Rate This Store</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
