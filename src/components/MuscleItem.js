import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function MuscleItem({ muscleData: { id, muscle } }) {
  return (
    <Link to={`categories/${id}`}>
      <div className="card">
        <strong>{muscle}</strong>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </Link>
  );
}
