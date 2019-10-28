import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkouts } from '../actions/workoutActions';

export default function Workout() {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workouts);
  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const generateWorkoutItems = () =>
    workouts.map(({ id, name }) => <li key={id}>{name}</li>);

  return (
    <div id="WorkoutList">
      <h1>WorkoutList</h1>
      <ul>{generateWorkoutItems()}</ul>
    </div>
  );
}
