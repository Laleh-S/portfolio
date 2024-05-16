import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub,  AiFillLinkedin , AiOutlineMail} from 'react-icons/ai';
import { AppWrap } from '../../wrapper';
import './Header.scss';
import images from '../images';

function Header () {
  return (
    <div className="app__header app__flex">
      {/* Applies animation to the header */}
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__header-info"
      >
      {/* Content within the header */}
      <div className="app__icons">
        {/* <img src={images.logoSmall} alt="logo" /> */}
        <h1><span><a className="sparkle" href="#about">Hello, I'm Laleh</a></span></h1>
        <h2>From Healthcare to Software Development.</h2>
        
        {/* Social media and contact icons */}
        <div className="app__icons-ai">
          <a className="git" href="https://github.com/Laleh-S" target="_blank" rel="noreferrer">

            <AiFillGithub />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/laleh-shahidi/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a className="email" href="mailto:laleh.shahidi78@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
      </motion.div>
    </div>
);
};
// AppWrap wraps the Header component with specific props ('home')
export default AppWrap(Header, 'home');
