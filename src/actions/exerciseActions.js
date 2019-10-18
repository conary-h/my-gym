import { createAction } from 'redux-actions';
import { SET_CURRENT_CATEGORY } from './types';

export const setRestingTimeAction = createAction({
  SET_CURRENT_CATEGORY
});

export const setRestingTime = () => {
  return dispatch => {
    dispatch(setRestingTimeAction());
  };
};
