import { motion } from "framer-motion";
import React from "react";

function Education() {
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:'0.3s'}}
    exit={{opacity:0,transition:'0.3s',scale:0}}
    >
      <h1 style={{textAlign:'center'}}>My Education</h1>
    <div className="m-education">
      <div className="card my-3">
        <div className="card-body">
          <h2 className="card-title">B. Tech</h2>
    <span className="card-subtitle mb-2 text-body-secondary">(Mechanical Engineering)</span>
          <p className="card-text mt-2">
          Karmaveer Bhaurao Patil College Of Engineering, Satara Maharashtra</p>
          <span className="card-link">
           Year-2021
          </span>
          <span className="card-link">
            CGPA 8.55
          </span>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <h2 className="card-title">UG Diploma</h2>
    <span className="card-subtitle mb-2 text-body-secondary">(Mechanical Engineering)</span>
          <p className="card-text mt-2">
          Government Polytechnic Karad,<br/> Maharashtra</p>
          <span className="card-link">
           Year-2018
          </span>
          <span className="card-link">
            68.74%
          </span>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <h2 className="card-title">Higher Secondary Education</h2>
    <span className="card-subtitle mb-2 text-body-secondary">(Science)</span>
          <p className="card-text mt-2">
Shri Hanumangiri Jr.College, <br/> Pusegaon</p>
          <span className="card-link">
           Year-2016
          </span>
          <span className="card-link">
           51.54%
          </span>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <h2 className="card-title">Primary & Secondary School Education</h2>
    <span className="card-subtitle mb-2 text-body-secondary"></span>
          <p className="card-text mt-2">
Mahatma Phule Madhyamik Vidyalaya, <br/>Katgun</p>
          <span className="card-link">
           Year-2014
          </span>
          <span className="card-link">
            77.80%
          </span>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Education;
