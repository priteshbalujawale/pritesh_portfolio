import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.jpg";
import Brhamanti_logo from "../imgs/Brhamanti_logo.png";
import vector from "../imgs/Vector.png";
import textTransform_img from "../imgs/textTransformBM.png";
import newsOwl_img from "../imgs/NewsOwl.png"
import { motion } from "framer-motion";
function Project() {
  const cardTilt = (event) => {
    const card = event.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = cardWidth / 2;
    const centerY = cardHeight / 2;
    const mouseX = event.nativeEvent.offsetX - centerX;
    const mouseY = event.nativeEvent.offsetY - centerY;
    const rotateX = (mouseY / (cardHeight / 2)) * 20;
    const rotateY = (mouseX / (cardWidth / 2)) * 20 * -1;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  const cardTiltOut = (event) => {
    const card = event.currentTarget;
    card.style.transform = "none";
  };

  return (
    <motion.div
      className="container m-project-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: "0.3s" }}
      exit={{ opacity: 0, transition: "0.3s", scale: 0 }}
      style={{ marginTop: "5rem" }}
    >
      <h1 style={{ textAlign: "center" }}>My Projects</h1>
      <div className="m-card-container">
        <div
          className="m-cards"
          onMouseMove={cardTilt}
          onMouseLeave={cardTiltOut}
        >
          <div className="m-cards-contents">
            <div className="m-card-img-container">
              <img src={logo} alt="Landing Page" className="m-card-img" />
            </div>
            <div className="m-icon-container">
              <Link
                to="https://priteshbalujawale.github.io/tuckerlaw/"
                target="_blank"
              >
                <i className="bi bi-browser-chrome"></i>
              </Link>
              <Link
                to="https://github.com/priteshbalujawale/tuckerlaw"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </Link>
            </div>
            <div className="m-cards-content-text">
              <div className="m-card-heading">
                <h2>Landing Page</h2>
              </div>
              <div className="m-card-inner-text">
                "I've created an accessible, responsive landing page utilizing
                HTML5, JS, and CSS to showcase my dynamic web development
                skills. For easy access, you can explore the website and examine
                the code by simply clicking on the icons provided above."{" "}
              </div>
              <div className="m-card-btn-container">
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="m-cards"
          onMouseMove={cardTilt}
          onMouseLeave={cardTiltOut}
        >
          <div className="m-cards-contents">
            <div className="m-card-img-container">
              <img
                src={Brhamanti_logo}
                alt="Brhamanti"
                className="m-card-img"
              />
            </div>
            <div className="m-icon-container">
              <Link
                to="https://priteshbalujawale.github.io/Brhmanti/"
                target="_blank"
              >
                <i className="bi bi-browser-chrome"></i>
              </Link>
              <Link
                to="https://github.com/priteshbalujawale/Brhmanti"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </Link>
            </div>
            <div className="m-cards-content-text">
              <div className="m-card-heading">
                <h2>Brhamanti</h2>
              </div>
              <div className="m-card-inner-text">
                "I've created an accessible, responsive page utilizing HTML5,
                JS, and CSS to showcase my dynamic web development skills. For
                easy access, you can explore the website and examine the code by
                simply clicking on the icons provided above."{" "}
              </div>
              <div className="m-card-btn-container">
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="m-cards"
          onMouseMove={cardTilt}
          onMouseLeave={cardTiltOut}
        >
          <div className="m-cards-contents">
            <div className="m-card-img-container">
              <img src={vector} alt="Hiking" className="m-card-img" />
            </div>
            <div className="m-icon-container">
              <Link
                to="https://priteshbalujawale.github.io/Hiking/"
                target="_blank"
              >
                <i className="bi bi-browser-chrome"></i>
              </Link>
              <Link
                to="https://github.com/priteshbalujawale/Hiking"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </Link>
            </div>
            <div className="m-cards-content-text">
              <div className="m-card-heading">
                <h2>Hiking</h2>
              </div>
              <div className="m-card-inner-text">
                "I've created an accessible, responsive Hiking landing page
                utilizing HTML5, JS, and CSS to showcase my dynamic web
                development skills. For easy access, you can explore the website
                and examine the code by simply clicking on the icons provided
                above."{" "}
              </div>
              <div className="m-card-btn-container">
                <button>HTML5</button>
                <button>CSS3</button>
                <button>Javascript</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="m-cards"
          onMouseMove={cardTilt}
          onMouseLeave={cardTiltOut}
        >
          <div className="m-cards-contents">
            <div className="m-card-img-container">
              <img
                src={textTransform_img}
                alt="Text Transform"
                className="m-card-img"
              />
            </div>
            <div className="m-icon-container">
              <Link
                to="https://priteshbalujawale.github.io/Text_Transform_BookMarklate/"
                target="_blank"
              >
                <i className="bi bi-browser-chrome"></i>
              </Link>
              <Link
                to="https://github.com/priteshbalujawale/Text_Transform_BookMarklate"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </Link>
            </div>
            <div className="m-cards-content-text">
              <div className="m-card-heading">
                <h2>Text TransForm BookMarklete</h2>
              </div>
              <div className="m-card-inner-text">
                "Developed an innovative text transformation bookmarklet using
                JavaScript. changing text cases without the need for repetitive
                copying and pasting. Significantly improved workflow efficiency
                and minimized the risk of data alteration. Recognized for
                enhancing productivity and user experience through automation"
              </div>
              <div className="m-card-btn-container">
                <button>Javascript</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="m-cards"
          onMouseMove={cardTilt}
          onMouseLeave={cardTiltOut}
        >
          <div className="m-cards-contents">
            <div className="m-card-img-container">
              <img
                src={newsOwl_img}
                alt="Text Transform"
                className="m-card-img"
              />
            </div>
            <div className="m-icon-container">
              <Link
                to="https://github.com/priteshbalujawale/newsowl"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </Link>
            </div>
            <div className="m-cards-content-text">
              <div className="m-card-heading">
                <h2>NewsOwl</h2>
              </div>
              <div className="m-card-inner-text">
                "I created a dynamic responsive React app integrated with a News API,
                delivering up-to-date news content to users. This app seamlessly
                fetches and displays news articles using the API key, providing
                an engaging and user-friendly interface. Users can easily
                navigate through different categories, stay informed about
                current events, and experience a modern, interactive way of
                consuming news"
              </div>
              <div className="m-card-btn-container">
                <button>React Js</button>
                <button>Bootstrap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
