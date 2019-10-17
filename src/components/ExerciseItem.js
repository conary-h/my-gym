import React from 'react';
import { Link } from '@reach/router';

export default function ExerciseItem({ data: { id, name, description } }) {
  return (
    <Link to={`exercises/${id}`}>
      <div className="card">
        <strong>{`Exercise: ${name}`}</strong>
        <p>{description}</p>
      </div>
    </Link>
  );
}
