// src/pages/Profile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    bio: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileData({ ...profileData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profileData.name || !profileData.age || !profileData.bio) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Profile saved successfully!");
    navigate("/dashboard"); // redirect to dashboard after saving
  };

  return (
    <div className="form-container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={profileData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={profileData.age}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={profileData.bio}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {profileData.image && (
          <img
            src={profileData.image}
            alt="Profile Preview"
            style={{ marginTop: "1rem", width: "100px", borderRadius: "50%" }}
          />
        )}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
