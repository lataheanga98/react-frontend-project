import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import EventModal from './components/EventModal';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpCounts, setRsvpCounts] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const initialEvents = [
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
  ];

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : initialEvents;
  });

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

  const handleEventUpdate = (updatedEvent) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event === selectedEvent ? updatedEvent : event
      )
    );
    setSelectedEvent(updatedEvent);
    setIsEditing(false);
  };

  // ✅ Save events to LocalStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>🏓 Pickleball Schedule</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage
                  events={events}
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleDelete={handleDelete}
                  filteredEvents={filteredEvents}
                  onEventClick={(event) => setSelectedEvent(event)}
                />
                <EventModal
                  event={selectedEvent}
                  onClose={() => {
                    setSelectedEvent(null);
                    setIsEditing(false);
                  }}
                  onRSVP={() => {
                    const id = selectedEvent.title + selectedEvent.date;
                    setRsvpCounts((prev) => ({
                      ...prev,
                      [id]: (prev[id] || 0) + 1
                    }));
                  }}
                  rsvpCount={rsvpCounts[selectedEvent?.title + selectedEvent?.date] || 0}
                  isEditing={isEditing}
                  onEdit={() => setIsEditing(true)}
                  onSaveEdit={handleEventUpdate}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <p>© 2025 Tonga Pickleball Club</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
