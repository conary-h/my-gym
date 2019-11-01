import {
  FETCH_WORKOUTS,
  FETCH_WORKOUTS_STARTED,
  FETCH_WORKOUTS_FAILURE
} from './types';
import { createAction } from 'redux-actions';
import { getWorkouts } from '../services/workouts';

export const fetchWorkoutsAction = createAction(FETCH_WORKOUTS);
export const fetchWorkoutsStartedAction = createAction(FETCH_WORKOUTS_STARTED);
export const fetchWorkoutsFailureAction = createAction(FETCH_WORKOUTS_FAILURE);

export const fetchWorkouts = () => {
  return async dispatch => {
    dispatch(fetchWorkoutsStartedAction());

    try {
      const workouts = await getWorkouts();
      dispatch(fetchWorkoutsAction(workouts));
    } catch (error) {
      dispatch(fetchWorkoutsFailureAction(error));
    }
  };
};
