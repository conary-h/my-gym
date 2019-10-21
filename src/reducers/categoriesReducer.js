import { FECTH_CATEGORIES } from '../actions/types';
import { handleActions } from 'redux-actions';

const defaultState = [];

const categoriesReducer = handleActions(
  {
    [FECTH_CATEGORIES]: (state, { payload }) => {
      const categories = payload;
      return [...state, ...categories];
    }
  },
  defaultState
);

export default categoriesReducer;
