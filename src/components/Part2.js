import React from "react";
import cards from "../Assets/cards.png";
import { motion } from "framer-motion";

const Part2 = () => {
  return (
    <div className="part-two-container">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="part-two-image"
      >
        <img src={cards} alt="heart cards" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.25 }}
        className="part-two-text"
      >
        <p>Be My</p>
      </motion.div>
    </div>
  );
};

export default Part2;
