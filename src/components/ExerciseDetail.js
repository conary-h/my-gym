import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

function ExerciseDetail({ exerciseId }) {
  const exercises = useSelector(state => state.exercises);
  let currentExercise = {};

  if (exercises.length) {
    currentExercise = exercises.find(
      exercise => exercise.id === parseInt(exerciseId)
    );
  }

  return (
    <div className="exercise-detail">
      <Header title={currentExercise.name} />
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
