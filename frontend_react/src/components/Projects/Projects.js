import React from 'react'
import './Projects.scss'
import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper' // AppWrap higher-order component
import { urlFor, client } from '../../client' // Utility functions for fetching data


const Projects = () => {
  const [filterProjects, setFilterProjects] = useState([]); // Filtered projects states
  const [activeFilter, setActiveFilter] = useState('All');  // Active filter category states
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });  // Animation properties state
  const [projects, setProjects] = useState([]); // All projects state

  useEffect(() => {
    // Fetching all projects from Sanity CMS
    const query = '*[_type == "projects"]' 

    client.fetch(query).then((data) => {
      // Update projects and filtered projects state with fetched data
      setProjects(data); // Set all projects
      setFilterProjects(data); // Set filtered projects initially to all projects
    });
  }, []); // Empty array means effect runs only once after initial render

  const handleProjectsFilter = (item) => { // The Clickable items
    /// Event handler for filtering projects based on category
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        // If 'All' category is selected, show all projects
        setFilterProjects(projects);
        // else, filter projects based on selected category
      } else {
        setFilterProjects(projects.filter((project) => project.tags && project.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className="head-text">Projects</h2>
      <div className="app__projects-filter">
        {/* Filtering buttons for project categories */}
        {['JavaScript', 'React JS', 'Full-Stack', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectsFilter(item)}
            className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects-portfolio"
      >

        {/* Iterating over filtered projects and getting project cards */}
        {filterProjects.map((project, index) => (
          <div className="app__projects-item app__flex" key={index}>
            {/* Project image and hover overlay */}
            <div className="app__projects-img app__flex">
              <img src={urlFor(project.imgUrl)} alt={project.name} />
              <motion.div
                className="app__projects-hover app__flex"
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerchildren: 0.5}}   
              >
                {/* Links to project details and code */}
                <a href={project.projectLink} target="_blank" rel="noreferrer"> 
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                  >
                  <AiFillEye />  {/* Eye icon for project details */}
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer"> 
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                  >
                  <AiFillGithub /> {/* GitHub icon for project code */}
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Project details */}
            <div className="app__projects-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
              <div className="app__projects-tag app__flex"> {/* Placeholder for project tags */}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Projects, 'projects')


















