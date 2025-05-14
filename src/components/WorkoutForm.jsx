// WorkoutForm.jsx
import React, { useState } from 'react';

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ exercise, reps, duration });
    setExercise('');
    setReps('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;
