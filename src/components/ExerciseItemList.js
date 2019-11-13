import React from 'react';
import ExerciseItem from './ExerciseItem';

export default function ExerciseItemList({ exerciseData }) {
  const generateExerciseItems = () =>
    exerciseData.map(({ id, name }) => (
      <ExerciseItem key={id} exerciseName={name} exerciseId={id} />
    ));
  return (
    <div>
      <h1>Choose exercises for this workout</h1>
      {generateExerciseItems()}
    </div>
  );
}
