import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function WorkoutItem({ workoutData: { id, name, day } }) {
  return (
    <Link to={`categories/${id}`}>
      <div className={`card workout-card ${day}`}>
        <span className="workout-day">{day}</span>
        <strong className="workout-name">{name}</strong>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </Link>
  );
}
