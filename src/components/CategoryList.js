import React from 'react';
import data from '../data';
import MuscleItem from './MuscleItem';
import Header from './Header';
import CategoryListBackground from '../images/categoryListBackground.png';

export default function CategoryList() {
  const renderCategoryCards = () =>
    data.map(category => (
      <MuscleItem key={category.id} muscleData={category} />
    ));

  return (
    <>
      <Header title="Category List" image={CategoryListBackground} />
      <div className="content">{renderCategoryCards()}</div>
    </>
  );
}
