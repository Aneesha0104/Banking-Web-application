
import React from 'react';
import '../index';

const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );
};

export default Tooltip;