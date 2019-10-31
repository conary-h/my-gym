import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkouts } from '../actions/workoutActions';
import WorkoutItem from '../components/WorkoutItem';

export default function Workout() {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workouts);
  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const generateWorkoutItems = () =>
    workouts.map(workout => (
      <WorkoutItem key={workout.id} workoutData={workout} />
    ));

  return (
    <div id="WorkoutList">
      <div className="intro">
        <h1>Good day UserName</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. ris
          voluptatum necessitatibus natus.
        </p>
      </div>

      <div className="future-component-plans">
        <h2>Plans</h2>
        <strong>My November Plan</strong>
      </div>

      <ul>{generateWorkoutItems()}</ul>
    </div>
  );
}
