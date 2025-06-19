// src/pages/Reviews.jsx
import { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Nisha",
      content: "The Diwali event was amazing! Loved the decorations and music.",
      rating: 5,
    },
    {
      id: 2,
      user: "Neha",
      content: "The cafeteria food quality could be improved.",
      rating: 3,
    },
  ]);

  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!newReview.trim() || rating < 1 || rating > 5) {
      alert("Please write a review and select a rating (1–5).");
      return;
    }

    const newEntry = {
      id: Date.now(),
      user: "You",
      content: newReview,
      rating: rating,
    };

    setReviews([newEntry, ...reviews]);
    setNewReview("");
    setRating(0);
  };

  return (
    <div className="reviews-container">
      <h2>Leave a Review</h2>
      <div className="review-form">
        <textarea
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <div className="rating-select">
          <label>Select Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value={0}>--</option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r} Star{r > 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>

      <div className="review-list">
        {reviews.map((rev) => (
          <div key={rev.id} className="review-card">
            <h4>{rev.user}</h4>
            <p>{rev.content}</p>
            <p>Rating: {"⭐".repeat(rev.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
