import { FECTH_CATEGORIES } from '../actions/types';
import { handleActions } from 'redux-actions';

const defaultState = [];

const categoriesReducer = handleActions(
  {
    [FECTH_CATEGORIES]: (state, payload) => {
      return { ...state, categories: payload };
    }
  },
  defaultState
);

export default categoriesReducer;
