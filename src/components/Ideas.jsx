// src/components/Ideas.jsx
import { useState } from "react";

const Ideas = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      user: "Tanu",
      content: "We should organize a tech-hackathon for all departments!",
      likes: 0,
    },
    {
      id: 2,
      user: "Akriti",
      content: "Add a book exchange corner in the library.",
      likes: 0,
    },
    {
      id: 3,
      user: "Nisha",
      content: "Attendence percentage .",
      likes: 0,
    },
  ]);

  const [newIdea, setNewIdea] = useState("");

  const handlePost = () => {
    if (!newIdea.trim()) {
      alert("Please enter your idea.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      user: "You",
      content: newIdea,
      likes: 0,
    };
    setIdeas([newEntry, ...ideas]);
    setNewIdea("");
  };

  const handleLike = (id) => {
    const updatedIdeas = ideas.map((idea) =>
      idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
    );
    setIdeas(updatedIdeas);
  };

  return (
    <div className="ideas-container">
      <h2>Share Your Ideas</h2>
      <div className="idea-form">
        <textarea
          placeholder="Type your innovative idea here..."
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
        ></textarea>
        <button onClick={handlePost}>Post Idea</button>
      </div>

      <div className="idea-list">
        {ideas.map((idea) => (
          <div key={idea.id} className="idea-card">
            <h4>{idea.user}</h4>
            <p>{idea.content}</p>
            <div className="idea-actions">
              <button onClick={() => handleLike(idea.id)}>👍 {idea.likes}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
