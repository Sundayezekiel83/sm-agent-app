import React from 'react';

function Height({ ...props }) {
  return <div style={{ height: props.val }} className={props.className}
    ></div>;
}

export default Height;
