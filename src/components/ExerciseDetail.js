import React, { useEffect, useState } from 'react';
import data from '../data';

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
    <>
      <div className="header">
        <h1>{exercise.name}</h1>
        <p>{exercise.description}</p>
      </div>
      <div className="content">
        <div className="card">
          <p>{exercise.description}</p>
        </div>
      </div>
    </>
  );
}

export default ExerciseDetail;
