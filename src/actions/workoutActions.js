import { FETCH_WORKOUTS } from './types';
import { getWorkouts } from '../services/workouts';
import { createAction } from 'redux-actions';

export const fetchWorkoutsAction = createAction(FETCH_WORKOUTS);

export const fetchWorkouts = () => {
  const data = getWorkouts();

  return dispatch => {
    dispatch(fetchWorkoutsAction(data));
  };
};
