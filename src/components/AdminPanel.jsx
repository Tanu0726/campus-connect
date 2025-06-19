// src/components/AdminPanelContent.jsx
import React, { useState } from "react";

const AdminPanelContent = () => {
  // Sample event data
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Fest", status: "pending" },
    { id: 2, title: "Cultural Day", status: "pending" },
  ]);

  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "Tanu", role: "User" },
    { id: 2, name: "Ravi", role: "Moderator" },
    { id: 3, name: "Ayesha", role: "Admin" },
  ]);

  // Accept/Reject actions
  const handleEventAction = (id, action) => {
    setEvents(events.map((event) =>
      event.id === id ? { ...event, status: action } : event
    ));
  };

  // Change user role
  const handleRoleChange = (id, newRole) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  return (
    <div className="admin-section">
      {/* Events Section */}
      <section className="admin-events">
        <h3>📅 Manage Events</h3>
        <ul className="event-list">
          {events.map((e) => (
            <li key={e.id} className="event-item">
              <div>
                <strong>{e.title}</strong> — <em>Status:</em> {e.status}
              </div>
              <div className="button-group">
                <button
                  className="accept-btn"
                  onClick={() => handleEventAction(e.id, "accepted")}
                  disabled={e.status === "accepted"}
                >
                  Accept
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleEventAction(e.id, "rejected")}
                  disabled={e.status === "rejected"}
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Users Section */}
      <section className="admin-users">
        <h3>👤 Manage Users</h3>
        <ul className="user-list">
          {users.map((u) => (
            <li key={u.id} className="user-item">
              <span>
                <strong>{u.name}</strong> — Role: {u.role}
              </span>
              <select
                value={u.role}
                onChange={(e) => handleRoleChange(u.id, e.target.value)}
                className="role-select"
              >
                <option value="User">User</option>
                <option value="Moderator">Moderator</option>
                <option value="Admin">Admin</option>
              </select>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminPanelContent;
