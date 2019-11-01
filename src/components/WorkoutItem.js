import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function WorkoutItem({ workoutData: { id, name, dayName } }) {
  return (
    <Link to={`categories/${id}`}>
      <div className={`card workout-card ${dayName}`}>
        <span className="workout-day">{dayName}</span>
        <strong className="workout-name">{name}</strong>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </Link>
  );
}
