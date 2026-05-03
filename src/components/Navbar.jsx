import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-links">Home</Link>

      {!user && (
        <>
          <Link to="/login" className="nav-links">Login</Link>
          <Link to="/register" className="nav-links">Register</Link>
        </>
      )}

      {user && (
        <>
          <span className="nav-welcome">Hi, {user.firstName}</span>
          <Link to="/profile" className="nav-links">Profile</Link>
          <button onClick={logout} className="logout-button">Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;