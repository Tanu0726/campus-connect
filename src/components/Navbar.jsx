import { Link, useNavigate } from "react-router-dom";
import "./../styles/App.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("token");
    // Redirect to login
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Campus Connect
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/ideas">Ideas</Link></li>
        <li><Link to="/news">Updates</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li className="logout">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
