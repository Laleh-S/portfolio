import React from 'react';
import { NavigationDots } from '../components';

// Higher-Order Component for wrapping components with common layout
const AppWrap = (Component, idName, classNames) => {
  // Returned functional component that receives props
  const WrappedComponent = () => {
    return (
      // Main container with specified ID and additional classNames
      <div id={idName} className={`app__container ${classNames}`}>
        {/* Wrapper for the app content */}
        <div className="app__wrapper app__flex">
          {/* Render the wrapped component */}
          <Component />
          {/* Copyright section */}
          <div className="copyright">
            <p className="p-text" style={{ color: '#999999' }}>@2022 Laleh Shahidi</p>
          </div>
        </div>
        {/* Navigation dots component to indicate active section */}
        <NavigationDots active={idName} />
      </div>
    );
  };

  return WrappedComponent; // Return the wrapped component
};

export default AppWrap;


