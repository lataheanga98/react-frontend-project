import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick, onDelete }) => (
  <div className="event-card" onClick={onClick}>
    <h3>{event.title}</h3>
    <p><strong>Date:</strong> {event.date}</p>
    <p><strong>Time:</strong> {event.time}</p>
    <p><strong>Location:</strong> {event.location}</p>
    <p><strong>Category:</strong> {event.category}</p>
    <button
      className="delete-button"
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
    >
      Delete
    </button>
  </div>
);

export default EventCard;
