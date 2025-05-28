import React, { useState } from 'react';
import './App.css';
import EventCard from './components/EventCard';

function App() {
  const [events, setEvents] = useState([
    {
      title: "Morning Open Play",
      date: "2025-06-01",
      time: "9:00 AM - 11:00 AM",
      location: "Vavaʻu Courts",
    },
    {
      title: "Tonga Club Tournament",
      date: "2025-06-05",
      time: "2:00 PM - 6:00 PM",
      location: "Tanoa Gym",
    },
    {
      title: "Evening Beginner Clinic",
      date: "2025-06-07",
      time: "5:30 PM - 7:00 PM",
      location: "Vavaʻu Sports Center",
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents(prev => [...prev, formData]);
    setFormData({ title: '', date: '', time: '', location: '' });
  };

  const handleDelete = (indexToDelete) => {
    setEvents(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>🏓 Pickleball Schedule</h1>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <form className="event-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time (e.g. 2PM - 4PM)"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <main className="schedule-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} onDelete={() => handleDelete(index)} />
          ))
        ) : (
          <p>No matching events found.</p>
        )}
      </main>

      <footer>
        <p>© 2025 Tonga Pickleball Club</p>
      </footer>
    </div>
  );
}

export default App;
