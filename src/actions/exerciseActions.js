import { createAction } from 'redux-actions';
import { SET_CURRENT_CATEGORY, FETCH_ALL_EXERCISES } from './types';
import { getAllExercises } from '../services/exercises';

export const setRestingTimeAction = createAction(SET_CURRENT_CATEGORY);

export const fetchAllExercisesAction = createAction(FETCH_ALL_EXERCISES);

export const fetchAllExercises = () => {
  const data = getAllExercises();

  return dispatch => {
    dispatch(fetchAllExercisesAction(data));
  };
};

export const setRestingTime = () => {
  return dispatch => {
    dispatch(setRestingTimeAction());
  };
};
