import React, { useEffect, useState } from 'react';
import data from '../data';
import ExerciseItem from '../components/ExerciseItem';

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
    <div>
      <h1>{category.muscle}</h1>
      {category.exercises ? getExerciseItemList() : ''}
    </div>
  );
}
