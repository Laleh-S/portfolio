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
            <p><span>Hello, I am Laleh!</span><br /> <br />A junior software engineer from London with a thirst for knowledge and love for 
            technology. My interest in programming started as a hobby; within a few months my enthusiasm led to my enrolment in a 
            software engineering course at General Assembly where I developed my skills and gained invaluable knowledge.  <br/> <br/>
            Being a natural problem solver gave me a natural inclination towards finding solutions to challenges, often with creative 
            resourceful approaches. I believe this is a valuable skill in many fields and would contribute to my success and fulfilment
            in both professional and personal life. <br /> < br />
            I would describe myself as someone who is mentally tough, loves challenges, disciplined and great on a team as well as 
            working alone. Working within the healthcare industry gave me the ability to adapt and work under pressure. </p>
      </div>
      
    </>
  )
}

export default AppWrap(About, 'about')


