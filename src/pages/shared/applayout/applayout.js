import React from 'react';
import InnerLayout from './innerlayout/innerlayout';
import './applayout.scss';

const AppLayout = props => Component => moreProps => {
  return (
    <div className="app-layout">
      <InnerLayout {...{ ...props, ...moreProps }} Component={Component} />
    </div>
  );
};

export default AppLayout;
