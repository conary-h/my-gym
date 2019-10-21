import React from 'react';
import MuscleItem from './MuscleItem';
import Header from './Header';
import CategoryListBackground from '../images/categoryListBackground.png';
import { useSelector } from 'react-redux';

export default function CategoryList() {
  const categories = useSelector(state => state.categories);
  debugger;

  const renderCategoryCards = () =>
    categories.map(category => (
      <MuscleItem key={category.id} muscleData={category} />
    ));

  return (
    <>
      <Header title="Category List" image={CategoryListBackground} />
      <div className="content">{renderCategoryCards()}</div>
    </>
  );
}
