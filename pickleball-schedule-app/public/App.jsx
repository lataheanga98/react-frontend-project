import React from 'react';
import './App.css';
import EventCard from '/components/EventCard';

const events = [
    {
        title: "Morning Open Play",
        date: "2025-06-01",
        time: "9:00 AM - 11:00 AM",
        location: "Vava'u Courts", 
    },
    {
        title: "Vava'u Club Tournaments",
        date: "2025-06-05",
        time: "2:00 PM - 6:00 PM",
        location: "Saineha High School Gym",
    },
    {
        title: "Evening Beginner Clinic",
        date: "2025-06-07",
        time: "5:30 PM - 7:00 PM",
        location: "Vava'u Sports Center",
    },
];

function App() {
    return (
        <div className="App">
            <header>
                <h1>🏓 Pickleball Schedule</h1>
            </header>
            <main>
                <div className="schedule-container">
                    {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                    ))}
                </div>
            </main>
            <footer>
                <p>© 2025 Vava'u Pickleball Club</p>
            </footer>
        </div>

    );
}

export default App;