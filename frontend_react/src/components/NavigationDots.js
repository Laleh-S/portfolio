import React from 'react'

const NavigationDots = ({ active }) => (  // the active will tell us in which section or page we are currently in
  <div className="app__navigation">
    {['home', 'about', 'projects', 'skills'].map((item, index) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
