import { Link } from "react-router-dom";
import "../styles/Form.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    role: "user",
  };

  const getWelcomeMessage = () => {
    switch (user.role) {
      case "admin":
        return `Welcome Admin, ${user.name}!`;
      case "owner":
        return `Welcome Store Owner, ${user.name}!`;
      default:
        return `Welcome, ${user.name}!`;
    }
  };

  return (
    <div className="form-container">
      <h2>{getWelcomeMessage()}</h2>
      <p>You're logged in to the Store Rating Platform.</p>

      {/* store owners */}
      {user.role === "owner" && (
        <div style={{ marginTop: "1rem" }}>
          <Link to="/add-store" className="btn-link">
            Add a Store
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
