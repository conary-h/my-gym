import React from 'react';

function Header({ image, title }) {
  return (
    <div className="header">
      {image && <img src={image} alt="Gym" />}
      <h1>{title}</h1>
    </div>
  );
}
export default Header;
