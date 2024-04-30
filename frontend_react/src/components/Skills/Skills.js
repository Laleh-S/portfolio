import React from "react";
import "./Skills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  // State to store skills data fetched 
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetching all skills data from Sanity CMS 
    const skillsQuery = '*[_type == "skills"]'; 

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
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
            <motion.div className="app__skills-item app_flex" key={skill.name}>
              <div className="app__flex">
                <motion.img
                src={urlFor(skill.icon)}
                alt={skill.name}
                whileHover={{ scale: 1.3 }} 
              />
              </div>
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
