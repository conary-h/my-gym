import React, { useEffect, useState } from 'react';
import data from '../data';
import Header from './Header';

function ExerciseDetail({ exerciseId }) {
  const [exercise, setExercise] = useState({});
  console.log(data);
  useEffect(() => {
    const currentExercise = data
      .flatMap(muscle => muscle.exercises)
      .find(exercise => exercise.id === parseInt(exerciseId));

    setExercise(currentExercise);
  }, [exerciseId]);

  return (
    <div className="exercise-detail">
      <Header title={exercise.name} />
      <div className="content">
        <div className="card">
          <div className="rest-circle" />
          <input type="number" className="unit-input" placeholder="10" />
          <strong>X</strong>
          <input type="number" className="unit-input" placeholder="10" />
          <strong>1RM</strong>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;
