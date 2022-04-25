import React from 'react';

function PullUp({ ...props }) {
  return <div style={{ marginTop: `-${props.val}px` }}></div>;
}

export default PullUp;
