import { useState, useEffect } from "react";

// Dummy events (add this or import from a file)
const dummyEvents = [
  {
    id: 1,
    title: "Tech Talk",
    description: "A session on the latest tech trends.",
    image: "/images/tech-talk.jpg",
  },
  {
    id: 2,
    title: "Cultural Fest",
    description: "A day full of music, dance, and fun.",
    image: "/images/cultural-fest.jpg",
  },
  // Add more events if needed
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [rsvpStatus, setRsvpStatus] = useState({}); // Tracks RSVP status per event

  useEffect(() => {
    setEvents(dummyEvents);
  }, []);

  const handleRSVP = (eventId) => {
    setRsvpStatus((prevStatus) => ({
      ...prevStatus,
      [eventId]: true,
    }));
    alert("You have successfully RSVP’d for the event!");
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button
              onClick={() => handleRSVP(event.id)}
              disabled={rsvpStatus[event.id]}
              className={rsvpStatus[event.id] ? "rsvp-done" : ""}
            >
              {rsvpStatus[event.id] ? "RSVP’d" : "RSVP"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
