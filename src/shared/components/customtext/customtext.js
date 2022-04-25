import React from 'react';
import styled from 'styled-components';

function CustomText({ children, ...props }) {
  const Text = styled[props.type]`
    ${props.size && `font-size: ${props.size}px;`}
    text-align: ${props.center ? 'center' : 'left'} !important;
    ${props.color && `color: ${props.color};`}
    ${props.bold && `font-weight: bold;`}
  `;
  return <Text {...props}>{children}</Text>;
}

export default CustomText;
