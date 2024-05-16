import React, { useState } from 'react';
import { HiXCircle } from 'react-icons/hi';
import { IoMenu } from "react-icons/io5";
import { motion } from 'framer-motion';
import images from '../images';
import './Navbar.scss';

function Navbar () {
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
      {/* <img src={images.logoSmall} alt="logo" style={{ width: '60px', height: 'auto' }} /> */}
      {/* Navigation Links */}
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills" ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div className="app__navbar-menu">
        {/* Hamburger Icon (Open Menu) */}
        <IoMenu  onClick={openMenu} />

        {/* Conditional rendering of menu */}
        {isMenuOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* Close Icon (Close Menu) */}
            <HiXCircle onClick={closeMenu} />

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
