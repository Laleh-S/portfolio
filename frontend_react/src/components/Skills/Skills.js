import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import './Skills.scss';
// import SoftSkills from "./SoftSkills";

const Skills = () => {
  // State to store skills data fetched 
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetching all skills data from Sanity CMS 
    const skillsQuery = '*[_type == "skills"]'; 

    client.fetch(skillsQuery).then((data) => {
      // Filter out draft versions of skills
      const filteredSkills = data.filter(skill => !skill._id.startsWith('drafts.'));
      setSkills(filteredSkills);
    });
  }, []); // Empty dependency array means effect runs only once after initial render

  return (
    <>
      <h2 className="head-text">Skills</h2>
      
      {/* Container for displaying technical skills */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* Mapping through skills data and rendering each skill item */}
          {skills.map((skill) => (
            <motion.div className="app__skills-item app_flex" key={skill._id}>
              <div className="app__flex">
                <motion.img
                src={urlFor(skill.icon)}
                alt={skill.name}
                whileHover={{ scale: 1.3 }} 
              />
              </div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Container for displaying soft skills */}
      <div className="app__skills-bottom">
        <h2>Soft Skills</h2>
        <ul className="app__skills">
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
  );
};

export default AppWrap(Skills, "skills");

