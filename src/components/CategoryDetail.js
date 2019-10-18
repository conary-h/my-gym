import React, { useEffect, useState } from 'react';
import data from '../data';
import ExerciseItem from './ExerciseItem';
import Header from './Header';

export default function CategoryDetail({ categoryId }) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const currentCategory = data.find(
      category => parseInt(categoryId) === category.id
    );
    setCategory(currentCategory);
  }, [categoryId]);
  const getExerciseItemList = () =>
    category.exercises.map(item => <ExerciseItem key={item.id} data={item} />);
  return (
    <>
      <Header title={category.muscle} />
      <div className="content">
        {category.exercises ? getExerciseItemList() : ''}
      </div>
    </>
  );
}
