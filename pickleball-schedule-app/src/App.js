import React from 'react';
import './App.css';
import EventCard from './components/EventCard';

const events = [
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

function App() {
  return (
    <div className="App">
      <header>
        <h1>🏓 Pickleball Schedule</h1>
      </header>
      <main className="schedule-container">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </main>
      <footer>
        <p>© 2025 Vava'u Pickleball Club</p>
      </footer>
    </div>
  );
}

export default App;
