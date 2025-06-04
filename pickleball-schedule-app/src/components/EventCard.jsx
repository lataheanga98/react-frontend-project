import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => (
  <div className="event-card" onClick={onClick}>
    <h3>{event.title}</h3>
    <p><strong>Date:</strong> {event.date}</p>
    <p><strong>Time:</strong> {event.time}</p>
    <p><strong>Location:</strong> {event.location}</p>
  </div>
);

export default EventCard;
