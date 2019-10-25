import React, { useEffect } from 'react';
import { fetchCategories } from '../actions/categoryActions';
import { fetchAllExercises } from '../actions/exerciseActions';
import { useDispatch } from 'react-redux';

export default function Dashboard({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllExercises());
  });

  return (
    <div id="dashboard" className="">
      {children}
    </div>
  );
}
