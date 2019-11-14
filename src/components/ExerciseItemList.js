import React from 'react';
import PropTypes from 'prop-types';
import ExerciseItem from './ExerciseItem';

export default function ExerciseItemList({ exerciseData, isAddItem }) {
  const generateExerciseItems = () =>
    exerciseData.map(({ id, name }) => (
      <ExerciseItem
        key={id}
        exerciseName={name}
        exerciseId={id}
        isAddItem={isAddItem}
      />
    ));
  return <div id="exercise-item-list">{generateExerciseItems()}</div>;
}
ExerciseItemList.propTypes = {
  exerciseData: PropTypes.array,
  isAddItem: PropTypes.bool
};

ExerciseItemList.defaultProps = {
  exerciseData: [],
  isAddItem: false
};
