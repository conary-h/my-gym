import { combineReducers } from 'redux';
import { default as categories } from './categoriesReducer';
import { default as exercises } from './exercisesReducer';
import { default as workouts } from './workoutsReducer';

export default combineReducers({ categories, exercises, workouts });
