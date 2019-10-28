import React, { useEffect, useState } from 'react';
import data from '../data';
import ExerciseItem from '../components/ExerciseItem';
import Header from '../components/Header';

export default function WorkoutDetail({ workoutId }) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const currentCategory = data.find(
      category => parseInt(workoutId) === category.id
    );
    setCategory(currentCategory);
  }, [workoutId]);
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
