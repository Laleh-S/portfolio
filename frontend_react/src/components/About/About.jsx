import React from 'react'
import './About.scss'
// import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'


const About = () => {
  return (
    <>  
      <h2 className="head-text">About</h2>
      <div className="app__profiles">
        <img className="app__about-img" src={images.laleh} alt="laleh" />
        <p><span>Hello, I am Laleh!</span><br /> I am a software enginner with a thirst for knowledge and passion for technology. My interest in programming started as a hobby; within a few months my enthusiasm led to my enrolment in a software engineering course at General Assembly. <br/> <br/>
        I like programming because it is challenging. It gets me out of my comfort zone. There is always a new technique that will help solving harder problems. <br /> < br />
        I would describe myself as someone who is mentally tough, disciplined and great in a team as well as working alone. Working within the healthcare industry gave me the ability to adapt and work under pressure. I am looking for opportunities where I can further develop my knowledge  as a software engineer.</p>
      </div>
    </>
  )
}

export default AppWrap(About, 'about')


