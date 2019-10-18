import { createAction } from 'redux-actions';
import { FECTH_CATEGORIES } from './types';
import { getCategories } from '../services/categories';

export const fetchCategoriesAction = createAction({
  FECTH_CATEGORIES
});

export const fetchCategories = () => {
  const data = getCategories();
  return dispatch => {
    dispatch(fetchCategoriesAction(data));
  };
};
