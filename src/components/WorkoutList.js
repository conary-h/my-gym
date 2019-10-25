import React from 'react';
import { useSelector } from 'react-redux';

export default function WorkoutList() {
  const exercises = useSelector(state => state.exercises);

  const generateExercisesItems = () =>
    exercises.map(({ id, name }) => <li key={id}>{name}</li>);

  return (
    <div>
      <h1>WorkoutList</h1>
      <ul>{generateExercisesItems()}</ul>
    </div>
  );
}
