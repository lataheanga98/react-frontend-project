// WorkoutList.jsx
import React from 'react';

function WorkoutList({ workouts, deleteWorkout }) {
  return (
    <div>
      {workouts.length === 0 ? (
        <p>No workouts yet.</p>
      ) : (
        <ul className="space-y-2">
          {workouts.map((workout, index) => (
            <li key={index} className="border p-3 rounded flex justify-between items-center">
              <div>
                <strong>{workout.exercise}</strong><br />
                Reps: {workout.reps}, Duration: {workout.duration} min
              </div>
              <button
                onClick={() => deleteWorkout(index)}
                className="text-red-500 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutList;
