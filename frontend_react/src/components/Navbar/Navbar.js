import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to open the menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="app__navbar">
      {/* Navigation Links */}
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div className="app__navbar-menu">
        {/* Hamburger Icon (Open Menu) */}
        <HiMenuAlt4 onClick={openMenu} />

        {/* Conditional rendering of menu */}
        {isMenuOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* Close Icon (Close Menu) */}
            <HiX onClick={closeMenu} />

            {/* Menu Links */}
            <ul>
              {[ "home", "about", "projects", "skills" ].map((item) => (
                <li key={item}>
                  <div />
                  {/* Menu Link (Close Menu on Click) */}
                  <a href={`#${item}`} onClick={closeMenu}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
