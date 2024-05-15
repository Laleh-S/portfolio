import React from "react";
import { FaUserFriends, FaHeartbeat, FaClock, FaLightbulb, FaComments, FaHandsHelping, FaBrain, FaTools, FaHeadset, FaChalkboardTeacher } from 'react-icons/fa'; // Import icons
import './Skills.scss';
import { MdPeople } from 'react-icons/md';

const SoftSkills = () => {
    return (
        <div className="soft-skills">
        {/* <h2>Soft Skills</h2> */}
        <ul className="soft-skills-list">
            <li>
            <FaUserFriends className="skill-icon" />
            <span>Teamwork</span>
            </li>
            <li>
            <FaChalkboardTeacher className="skill-icon" />
            <span>Leadership</span>
            </li>
            <li>
            <FaClock className="skill-icon" />
            <span>Time Management</span>
            </li>
            <li>
            <FaComments className="skill-icon" />
            <span>Communication</span>
            </li>
            <li>
            <FaTools className="skill-icon" />
            <span>Problem Solving</span>
            </li>
            <li>
            <FaBrain className="skill-icon" />
            <span>Adaptability</span>
            </li>
            <li>
            <FaHeartbeat className="skill-icon" />
            <span>Patience</span>
            </li>
            <li>
            <FaHeadset className="skill-icon" />
            <span>Customer Service</span>
            </li>
        </ul>
        </div>
    );
};

export default SoftSkills;