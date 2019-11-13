import React from 'react';
import { Link } from '@reach/router';

export default function ExerciseItem({
  exerciseId,
  exerciseName,
  description
}) {
  return (
    <Link to={`/exercises/${exerciseId}`}>
      <div className="card exercise-card">
        <strong>{exerciseName}</strong>
        <p>{description}</p>
      </div>
    </Link>
  );
}
