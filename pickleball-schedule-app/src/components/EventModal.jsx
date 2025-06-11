import React from 'react';

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