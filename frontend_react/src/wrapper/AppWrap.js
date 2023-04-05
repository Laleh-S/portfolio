import React from 'react'
import { NavigationDots } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />
      <div className="copyright" >
        <p className="p-text" style={{ color: '#999999' }}>@2022 Laleh Shahidi</p>
      </div>
      </div>
      {/* active will tell in which section we are curently on */}
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
