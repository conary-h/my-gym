import React, { useEffect } from 'react';
import { fetchCategoriesAction } from '../actions/categoryActions';

export default function Dashboard(props) {
  useEffect(() => {
    fetchCategoriesAction();
  });

  return (
    <div id="dashboard" className="">
      {props.children}
    </div>
  );
}
