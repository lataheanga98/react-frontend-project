import React from 'react';

const EventModal = ({ event, onClose, onRSVP, rsvpCount }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>

   <button onClick={onRSVP}>✅ Going ({rsvpCount})</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;