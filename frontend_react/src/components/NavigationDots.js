import React from 'react';

const NavigationDots = ({ active }) => {  // the active will tell us in which section or page we are currently in
  // Define an array of section IDs for navigation dots
  const sections = ['home', 'about', 'projects', 'skills'];

  return (
    <div className="app__navigation">
      {/* Map through the sections array to render navigation dots */}
      {sections.map((sectionId, index) => (
        <a
          key={sectionId + index}
          href={`#${sectionId}`}
          className="app__navigation-dot"
          style={active === sectionId ? { backgroundColor: '#1372df' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;










