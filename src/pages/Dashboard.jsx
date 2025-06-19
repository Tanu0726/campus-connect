// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard!</h1>
      <p>You are now logged in.</p>

      {user ? (
        <div className="user-profile-card">
          <h3>User Profile</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.uid}</p>
          
          {/* ✅ Wrapped logout button for centering */}
          <div className="logout-button-container">
            <button className="logout-button" onClick={handleLogout}>
              🔒 Logout
            </button>
          </div>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Dashboard;
