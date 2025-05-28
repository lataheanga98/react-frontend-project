import React from 'react';
import './EventCard.css';

const EventCard = ({ title, date, time, location }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default EventCard;