import React from "react";
import ballons from "../Assets/air-balloon-with-clouds.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-contianer">
        <div className="home-bannerImage-container-right">
          <img src={ballons} alt="air-ballon-with-cloud-right"></img>
        </div>
        <div className="home-bannerImage-container-left">
          <img src={ballons} alt="air-ballon-with-cloud-left"></img>
        </div>
        <div className="home-text-section">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="primary-heading"
          >
            I have a question to ask you
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, delay: 0.25 }}
            className="primary-text"
          >
            A VERY SERIOUS ONE!
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.3, delay: 0.5 }}
            class="button-container"
          >
            <button
              className="secondary-button-1"
              onClick={() => {
                window.scrollTo({ top: 900, behavior: "smooth" });
              }}
            >
              {" "}
              Sure Ask!
            </button>
            <button
              className="secondary-button-2"
              onClick={() => {
                alert("I Saw That");
              }}
            >
              No, Shut Up
            </button>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
