import React, { useEffect, useState } from 'react';
import data from '../data';
import ExerciseItem from './ExerciseItem';

export default function CategoryDetail(props) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const currentCategory = data.find(
      category => props.categoryId == category.id
    );
    setCategory(currentCategory);
  }, [props.categoryId]);
  const getExerciseItemList = () =>
    category.exercises.map(item => <ExerciseItem key={item.id} data={item} />);
  return (
    <>
      <div className="header">
        <h1>Muscle: {category.muscle}</h1>
      </div>
      <div className="content">
        {category.exercises ? getExerciseItemList() : ''}
      </div>
    </>
  );
}
