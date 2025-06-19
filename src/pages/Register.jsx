// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // ✅ Import initialized auth instance
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // ✅ Firebase functions

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      // ✅ Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // ✅ Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
