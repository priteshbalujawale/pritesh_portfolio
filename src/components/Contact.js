import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Contact() {

  return (
    <motion.div
      className="container m-contact-container"
      style={{ marginTop: "100px", textAlign: "center" }}
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1,transition:'0.3s'}}
      exit={{opacity:0,transition:'0.3s',scale:0}}
    >
      <h1 className="mb-4">Contact Me</h1>
      <p className="container">
        Send me an email if You Want to connect
        </p>
        <i className="bi bi-envelope"></i> &nbsp;<Link to="mailto:priteshbalujawale@gmail.com">
               priteshbalujawale@gmail.com
            </Link>

      <div className="m-contact-container">
        <h2 className="my-4">Connect Me on</h2>
        <ul>
          <li>

            <Link to={"https://www.linkedin.com/in/priteshjawale003"} target="_blank">
              <i className="bi bi-linkedin"></i>
            </Link>
          </li>
          </ul>
          <h2 className="my-4">Follow Me On</h2>
          <ul>
          <li>
            <Link to={"https://www.facebook.com/pritesh.jawale2"} target="_blank">
              <i className="bi bi-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to={"https://instagram.com/pritesh_jawale?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"} target="_blank">
              <i className="bi bi-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to={"https://github.com/priteshbalujawale"} target="_blank">
              <i className="bi bi-github"></i>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Contact;
