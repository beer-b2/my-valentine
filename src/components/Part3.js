import React from "react";
import wingHeart from "../Assets/heart-with-wings.png";
import { motion } from "framer-motion";

const Part3 = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="part-three-container"
    >
      <div className="part-three-text">
        <h1>Valentine</h1>
      </div>
      <div className="part-three-image">
        <img src={wingHeart} alt="heart-with-wings"></img>
      </div>
      <div class="button-container-2">
        <button
          className="secondary-button-3"
          onClick={() => {
            alert("I Love You <3");
          }}
        >
          {" "}
          YESSSS!!!!!
        </button>
        <button
          className="secondary-button-4"
          onClick={() => {
            alert("Excuse meee!!!! Your Loss ");
          }}
        >
          No, Thank's
        </button>
      </div>
    </motion.div>
  );
};

export default Part3;
