import { useEffect, useState } from "react";
import api from "../api/axios";
import "./AdminPanel.css"; // ✅ Import CSS

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then((res) => setUsers(res.data));
    api.get("/admin/stores").then((res) => setStores(res.data));
  }, []);

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <h3>Users</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <span>{u.name}</span> - {u.email} ({u.role})
          </li>
        ))}
      </ul>

      <h3>Stores</h3>
      <ul>
        {stores.map((s) => (
          <li key={s.id}>
            <span>{s.name}</span> - {s.address} (Rating:{" "}
            {parseFloat(s.average_rating).toFixed(1)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
