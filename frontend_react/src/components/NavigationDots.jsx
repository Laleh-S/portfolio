import React from 'react'

const NavigationDots = ({ active }) => (  // the active will tell us in which section we are currently in
  <div className="app__navigation">
    {['home', 'about', 'projects', 'skills'].map((item, index) => (
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
