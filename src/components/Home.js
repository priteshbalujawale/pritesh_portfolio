import { motion } from "framer-motion";
import React from "react";

function Home() {
  return (
    
    <motion.div
      className="container d-flex justify-content-center align-items-center flex-column m-home-container"
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,transition:'0.3s',scale:1}}
      exit={{opacity:0,transition:'0.3s',scale:0}}
    >
      <p className="welcome">Welcome</p>
      <h1>
        Hi, I'm <span className="m-name">Pritesh Jawale</span>
      </h1>
      <span className="m-title my-2">(Front-End Developer)</span>
      <p className="m-description">
Passionate Front-End Developer
with good experience building
and maintaining responsive
websites. Seeking an opportunity
to be a part of a progressive team
environment to enhance my skills.
</p>
    </motion.div>
  );
}

export default Home;
