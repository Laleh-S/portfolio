import React from 'react'
import './About.scss'
// import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
// import me from '../assets/me.jpg'


const About = () => {
  return (
    <>  
      <h2 className="head-text">About</h2>

      <div className="app__about-container">
            <img src={images.me} alt="me" /> 
            {/* <img src={assets.me} alt="me" /> */}
            <p><span>Hello, I am Laleh!</span><br /> <br />A junior software engineer from London with a strong passion for technology and a constant thirst for learning. My journey into programming began as a hobby, leading me to enrol in a software engineering bootcamp at General Assembly. There, I honed my skills and gained valuable knowledge.  <br/> <br/>
            My natural ability to solve problems has led me to find creative solutions to challenges. I think this skill is valuable in many areas and would contribute to my success and fulfilment in both my professional and personal lives. <br /> < br />
            I would describe myself as mentally tough, thriving on challenges, disciplined, and effective both in team settings and when working independently. My experience in the healthcare industry has equipped me with the ability to adapt and perform well under pressure.</p>
      </div>
      
    </>
  )
}

export default AppWrap(About, 'about')





