import { motion } from "framer-motion";
import React from "react";

function Experience() {
  return (
    <motion.div className="m-experience d-flex justify-content-center flex-column align-items-center"
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:'0.3s'}}
    exit={{opacity:0,transition:'0.3s',scale:0}}
    >
      <h2>Experience</h2>
      <strong>TRAINEE WEB DEVELOPER (THOMSON REUTERS) </strong>
      April 2022 - present (Bangalore)<br/>
      <ul className="my-3">
        <li>
          Provided guidance and leadership to less-experienced web developer
          personnel.
        </li>
        <li>
          Maintained well-organized digital filing system and backups to reduce
          data loss.
        </li>
        <li>Created clean, well-documented custom code and updates.</li>
        <li>
          Maintained understanding of current web technologies and programming
          practices through continuing education and participation in
          professional conferences and workshops.
        </li>
        <li>
          Achieved and maintained the Quality above 85% ensuring consistently
          high standards throughout
        </li>
      </ul>
      <h2>Key Project Contribution</h2>
      <strong>Text Transform Bookmarklet</strong>
      <ul>
      <li>
        Developed an innovative text transformation bookmarklet using
        JavaScript. changing text cases without the need for repetitive copying
        and pasting. Significantly improved workflow efficiency and minimized
        the risk of data alteration. Recognized for enhancing productivity and
        user experience through automation.
      </li>
      </ul>
    </motion.div>
  );
}

export default Experience;
