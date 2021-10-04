import React, { useState } from 'react';
import './Button.scss';

const Button = ({ type = 'button', children, name, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick(isClicked);
    }
  };

  return (
    <button
      type={type}
      className={`button button--${name}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
