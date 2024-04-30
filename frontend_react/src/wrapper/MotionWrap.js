import React from 'react';
import { motion } from 'framer-motion';

// Higher-Order Component (HOC) for wrapping components with Framer Motion animations
const MotionWrap = (Component, classNames) => {
  // Returned functional component that receives props
  const WrappedComponent = () => {
    return (
      // Apply motion animations to the wrapped component
      <motion.div
        // Define animation variants for when the component is in view
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} // Set animation duration
        className={`${classNames} app__flex`} // Apply additional classNames and flex styling
      >
        {/* Render the wrapped component */}
        <Component />
      </motion.div>
    );
  };

  return WrappedComponent; // Return the wrapped component
};

export default MotionWrap;
