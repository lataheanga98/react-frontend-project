import React from 'react';
import EventCard from '../components/EventCard';

const HomePage = ({ 
  events, formData, handleChange, handleSubmit, searchTerm, setSearchTerm, handleDelete, filteredEvents 
}) => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <form className="event-form" onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="text" name="time" value={formData.time} onChange={handleChange} placeholder="Time (e.g. 2PM - 4PM)" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
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
    </>
  );
};

export default HomePage;
