import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import images from '../images';

function About () {
  return (
    <div>  
      <h2 className="head-text">About</h2>
      <div className="app__about-container">
        <img src={images.me} alt="me" /> 
        <div className="about-container-p">
          <p>A junior software engineer based in London, driven by a deep passion for technology and a relentless desire to learn and grow.</p>
          <p >My journey into the world of programming began while working as a dental nurse. I realised that my career lacked the thrill and excitement I craved. Seeking a new challenge, I delved into coding as a hobby, which soon blossomed into a full-blown obsession.</p>
          <p>This realisation led me to start a transformative journey at General Assembly's software engineering bootcamp. Through this immersive experience, I refined my technical skills and gained invaluable insights that cleared the way for my transition into the world of software development.</p>
          <p>I thrive on challenges and pride myself on being disciplined, whether collaborating within a team or working alone. My background in the healthcare industry has equipped me with the resilience and adaptability needed to thrive even in high-pressure environments.</p>
          <p>The process of solving coding problems is incredibly rewarding for me. It not only fills me with excitement but also transports me to a whole new realm of engagement. I'm driven by a relentless curiosity and am always eager to explore new avenues in this field.</p>
          <p> I'm eager for the journey ahead! There's so much to learn and explore in the world of software engineering, and I'm ready to dive in headfirst.</p>
        </div>
      </div>
    </div>
  );
};
export default AppWrap(About, 'about');





