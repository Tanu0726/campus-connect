// src/pages/EventForm.jsx
import { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.image) {
      alert("All fields are required.");
      return;
    }

    // Replace with actual event POST request
    alert("Event created successfully!");
    setFormData({ title: "", description: "", image: "" });
  };

  return (
    <div className="form-container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          name="image"
          type="text"
          placeholder="Image Path (e.g. /images/diwali.1.PNG)"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
