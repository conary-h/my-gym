import React from 'react';
import data from '../data';
import MuscleItem from './MuscleItem';

export default function CategoryList() {
  const renderCategoryCards = () =>
    data.map(category => (
      <MuscleItem key={category.id} muscleData={category} />
    ));

  return (
    <div>
      <h1>Category List</h1>
      {renderCategoryCards()}
    </div>
  );
}
