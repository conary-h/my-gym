import React from 'react';
import { Link } from '@reach/router';

export default function MuscleItem({ muscleData: { id, muscle } }) {
  return (
    <Link to={`categories/${id}`}>
      <div className="card">
        <strong>{muscle}</strong>
      </div>
    </Link>
  );
}
