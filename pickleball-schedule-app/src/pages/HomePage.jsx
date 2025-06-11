import React from 'react';
import EventCard from '../components/EventCard';

const HomePage = ({
  events, formData, handleChange, handleSubmit,
  searchTerm, setSearchTerm, handleDelete,
  filteredEvents, onEventClick
}) => {

  const sortedEvents = [...filteredEvents].sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  );

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
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onClick={() => onEventClick(event)}
              onDelete={() => {
                if (window.confirm("Are you sure you want to delete this event?")) {
                  handleDelete(index);
                }
              }}
            />
          ))
        ) : (
          <p>No matching events found.</p>
        )}
      </main>
    </>
  );
};

export default HomePage;
