import React, { useEffect } from 'react';
import { fetchCategories } from '../actions/categoryActions';
import { useDispatch } from 'react-redux';

export default function Dashboard({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  });

  return (
    <div id="dashboard" className="">
      {children}
    </div>
  );
}
