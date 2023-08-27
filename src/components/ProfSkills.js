import React from 'react'
import jQueryLogo from '../imgs/jQueryLogo.png'
import { motion } from 'framer-motion'

function ProfSkills() {
  return (
    <motion.div className='m-prof-skills'
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:'0.3s'}}
    exit={{opacity:0,transition:'0.3s',scale:0}}
    >
      <h1>Professional Skills</h1>
      <div className="d-flex">
        <div className="col">
        <div className="cl-inner">
        <i className="fab fa-html5" style={{"color": '#fe5823'}}></i>
        <span>HTML</span>
        </div>
        <div className="cl-inner">
        <i className="fa-brands fa-js" style={{color:"rgb(246, 222, 26)"}}></i>
        <span>Javascript</span>
        </div>
        <div className="cl-inner">
        <i className="fa-brands fa-wordpress"  style={{color:"rgb(255, 255, 255)"}}></i>
        <span>Wordpress</span>
        </div>
</div>
        <div className="col">
        <div className="cl-inner">
        <i className="fa-brands fa-css3-alt" style={{color:"rgb(2, 119, 188)"}}></i>
        <span>CSS</span>
        </div>
        <div className="cl-inner">
        <i className="fa-brands fa-react" style={{color:"rgb(98, 218, 247)"}}></i>
        <span>React Js</span>
        </div>
        <div className="cl-inner">
        <img src={jQueryLogo} alt="jQueryLogo" />
        <span>jQuery</span>
        </div>
</div>
      </div>
 </motion.div>
  )
}

export default ProfSkills
