import { FECTH_CATEGORIES } from './types';
import { getCategories } from '../services/categories';
import { createAction } from 'redux-actions';

export const fetchCategoriesAction = createAction(FECTH_CATEGORIES);

export const fetchCategories = () => {
  const data = getCategories();

  return dispatch => {
    dispatch(fetchCategoriesAction(data));
  };
};
