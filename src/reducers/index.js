import { combineReducers } from 'redux';
import { default as categories } from './categoriesReducer';
import { default as exercises } from './exercisesReducer';

export default combineReducers({ categories, exercises });
