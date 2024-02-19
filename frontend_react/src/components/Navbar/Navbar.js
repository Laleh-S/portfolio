import React, { useState } from "react";
import "./Navbar.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  // ----- State for hamburger menue -----
  const [toggle, setToggle] = useState(false); // sets to false to keep our menue close

  return (
    <nav className="app__navbar">
      {/* <div>
        <img src={images.logo} alt="logo" />
      </div> */}
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menue">
        {/* ----- Hamburger menue ----- */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && ( // if true render navigation bar
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "projects", "skills"].map((item) => (
                <li key={item}>
                  <div />
                  {/* closes the navigation bar after we clicked on a specific link */}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
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
