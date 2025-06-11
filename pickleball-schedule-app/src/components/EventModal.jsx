import React, { useState, useEffect } from 'react';

const EventModal = ({ event, onClose, onRSVP, rsvpCount, isEditing, onEdit, onSaveEdit }) => {

  const [editData, setEditData] = useState(event || {});

  useEffect(() => {
    setEditData(event || {});
  }, [event]);

  if (!event) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

    return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!isEditing ? (
          <>
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>

            <button onClick={onRSVP}>✅ Going ({rsvpCount})</button>
            <button onClick={onEdit}>✏️ Edit</button>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <>
           <h2>Edit Event</h2>
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              placeholder="Event Title"
            />
            <input
              type="date"
              name="date"
              value={editData.date}
              onChange={handleChange}
            />
            <input
              type="text"
              name="time"
              value={editData.time}
              onChange={handleChange}
              placeholder="Time"
            />
            <input
              type="text"
              name="location"
              value={editData.location}
              onChange={handleChange}
              placeholder="Location"
            />
            <button onClick={() => onSaveEdit(editData)}>💾 Save</button>
            <button onClick={onClose}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventModal;
