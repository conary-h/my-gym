import React from 'react';

export default function WorkoutCreate() {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const generateDayOptionsList = days =>
    days.map((day, index) => (
      <option value="day" key={index}>
        {day}
      </option>
    ));
  return (
    <div id="workout-create">
      <div className="container">
        <h1>Create Workout:</h1>
        <label htmlFor="workoutName">Name</label>
        <input type="text" name="workoutName" />

        <select name="days" id="select-days">
          <option value="default">Any</option>
          {generateDayOptionsList(days)}
        </select>
      </div>
    </div>
  );
}
