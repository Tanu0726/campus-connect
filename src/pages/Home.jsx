// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Campus Connect</h1>
        <p>Your one-stop portal for campus activities, events, and ideas!</p>
        <div className="home-buttons">
          <Link to="/login" className="home-btn">Login</Link>
          <Link to="/register" className="home-btn">Register</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Events</h3>
            <p>Find and register for exciting campus events.</p>
          </div>
          <div className="feature-card">
            <h3>Ideas</h3>
            <p>Share innovative ideas and collaborate with peers.</p>
          </div>
          <div className="feature-card">
            <h3>Updates Feed</h3>
            <p>Stay updated with the latest campus news.</p>
          </div>
          <div className="feature-card">
            <h3>Reviews</h3>
            <p>Review and rate campus activities and facilities.</p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
