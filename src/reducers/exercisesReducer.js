import { FETCH_ALL_EXERCISES } from '../actions/types';
import { handleActions } from 'redux-actions';

const defaultState = [];

const exercisesReducer = handleActions(
  {
    [FETCH_ALL_EXERCISES]: (state, { payload }) => {
      const exercises = payload;
      return [...state, ...exercises];
    }
  },
  defaultState
);

export default exercisesReducer;
