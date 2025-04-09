import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {auth.token ? (
        <>
          {auth.role === "admin" && <Link to="/admin">Admin Panel</Link>}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
