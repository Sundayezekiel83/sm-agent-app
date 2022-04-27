import React from 'react';
import './dropdown.scss';

function Dropdown({ ...props }) {
  return (
    <div className="dropdown-card" {...props}>
      {props.children}
    </div>
  );
}

export default Dropdown;
