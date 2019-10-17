import React from 'react';

export default function ExerciseItem(props) {
  const { name, description } = props.data;

  return (
    <div>
      <strong>{`Exercise: ${name}`}</strong>
      <p>{description}</p>
    </div>
  );
}
