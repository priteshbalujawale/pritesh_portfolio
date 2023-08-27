import { motion } from 'framer-motion'
import React from 'react'

function AboutMe() {
  return (
    <motion.div className='m-about-me my-3' style={{fontSize:'20px'}}
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:'0.3s'}}
    exit={{opacity:0,transition:'0.3s',scale:0}}
    
    >
        <h1 style={{textAlign:'center'}}>About Me</h1>
<p>Creative and detail-oriented Front-End Developer with a passion
for creating visually appealing and accessible websites. Proficient
in HTML, CSS, JavaScript, jQuery, WordPress, React, Redux, and
REST API integration. Dedicated to meeting client requirements
and delivering exceptional user experiences. Contributed to a
project that developed a productivity-enhancing text
transformation bookmarklet.</p><br />

    </motion.div>
  )
}

export default AboutMe
