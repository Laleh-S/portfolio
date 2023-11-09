import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { AiFillGithub,  AiFillLinkedin , AiOutlineMail} from 'react-icons/ai';


const scaleVariants = {
  whileInView: {
    scale: [0, 1], 
    opacity: [0, 1],
    transition: {
      duration:1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => (
    <div className="app__header app__flex">
      <motion.div
      // -100 is animating from minus value. opacity 0, 1 meaning from fully invisible to fully visible. 
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__header-info"
      >

      <div className="app__icons"> 
        <h1>Hi, My name is Laleh</h1>
        <h2>A a dental nurse turned software developer</h2>
        <div className="app__icons-ai">
          <a classname="git" href="https://github.com/Laleh-S" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a classname="linkedin" href="https://www.linkedin.com/in/laleh-shahidi/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a className="email" href="mailto:laleh.shahidi78@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
      </motion.div>
    </div>
  
)

export default AppWrap(Header, 'home')
