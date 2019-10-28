import { FETCH_WORKOUTS } from '../actions/types';
import { handleActions } from 'redux-actions';

const defaultState = [];

const workoutsReducer = handleActions(
  {
    [FETCH_WORKOUTS]: (state, { payload }) => {
      const workouts = payload;
      return [...workouts];
    }
  },
  defaultState
);

export default workoutsReducer;
