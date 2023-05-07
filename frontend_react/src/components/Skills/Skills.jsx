import React from 'react'
import './Skills.scss'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client } from '../../client';

const Skills = () => {
  const [ skills, setSkills ] = useState([])

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]' // Fetching all my skills

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5}}
              className="app__skills-item app_flex"
              key={skill.name}
            >
              <div className="app__flex"
                style={{ backgroundColor: skill.bgColor }}  
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
      
              </div>
              {/* <p className="app_flex">{skill.name}</p> */}
              
            </motion.div>
          ))}
        </motion.div>
      </div>   
        
        <div className='app__skills-bottom'>
          <h2>Soft Skills</h2>
          <ul className='app__skills'>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Patience</li>
            <li>Adaptability</li>
            <li>Communication</li>
            <li>Customer Service</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      
    </>
  )
}

export default AppWrap(Skills, 'skills')


