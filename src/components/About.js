import React, {useState } from 'react'
import Education from './Education';
import ProfSkills from './ProfSkills';
import Experience from './Experience';
import AboutMe from './AboutMe';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';

function About() {
  const [activeComponent, setActiveComponent] = useState('About');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Education':
        return <Education />;
      case 'Profeessional Skills':
        return <ProfSkills />;
      case 'Experience':
        return <Experience />;
      case 'About':
        return <AboutMe />;
      default:
        return <AboutMe/>;
    }
  };
  return (
    <motion.div className="container d-flex flex-column m-about-container"

    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:'0.3s'}}
    exit={{opacity:0,transition:'0.3s',scale:0}}
    >
      
  <ul className="list-group list-group-horizontal about-nav">
  <li className={`list-group-item ${activeComponent === 'About' ? 'active' : ''}`} onClick={() => handleButtonClick('About')}>About</li>
  <li className={`list-group-item ${activeComponent === 'Education' ? 'active' : ''}`} onClick={() => handleButtonClick('Education')}>Education</li>
  <li className={`list-group-item ${activeComponent === 'Profeessional Skills' ? 'active' : ''}`} onClick={() => handleButtonClick('Professional Skills')}>Profeessional Skills</li>
  <li className={`list-group-item ${activeComponent === 'Experience' ? 'active' : ''}`} onClick={() => handleButtonClick('Experience')}>Experience</li>
</ul>
<div className="m-about-render-comp"style={{marginTop:'5rem',transition:'3s'}}>{renderComponent()}</div>

</motion.div>
  )
}

export default About
