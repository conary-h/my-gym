import React from 'react';
import { Link } from '@reach/router';

export default function MuscleItem(props) {
  return (
    <Link to={`category/${props.muscleData.id}`}>
      <div className="card">
        <strong>{props.muscleData.muscle}</strong>
      </div>
    </Link>
  );
}
