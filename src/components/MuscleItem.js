import React from "react";

export default function MuscleItem(props) {
  return (
    <div className="muscle-card">
      <strong>{props.muscleData.muscle}</strong>
    </div>
  );
}
