import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Checkbox } from 'antd';

export default function ExerciseItem({
  exerciseId,
  exerciseName,
  description,
  isAddItem
}) {
  const goToURI = () => {
    navigate(`/exercises/${exerciseId}`);
  };
  const toggle = () => {};
  return (
    <div className="card exercise-card">
      {isAddItem && <Checkbox onChange={toggle()}></Checkbox>}
      <strong>{exerciseName}</strong>
      <p>{description}</p>
    </div>
  );
}

ExerciseItem.propTypes = {
  exerciseId: PropTypes.number,
  exerciseName: PropTypes.string,
  description: PropTypes.string,
  isAddItem: PropTypes.bool
};

ExerciseItem.defaultProps = {
  exerciseId: '',
  exerciseName: '',
  description: '',
  isAddItem: false
};
