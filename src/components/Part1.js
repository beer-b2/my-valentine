import React, { useLayoutEffect, useRef, useState } from "react";
import Bg from "../Assets/hearts-bg.png";
import heart from "../Assets/heart-with-love.png";
import { motion } from "framer-motion";

export const Part1 = () => {
  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const botPos = (element) => element.getBoundingClientRect().bottom;
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos == null) {
        return;
      }
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(1);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(1.6);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div classNmae="about-section-container">
      <div ref={elemRef} className="about-background-image-container">
        <img
          sizes="100vw"
          src={Bg}
          alt="heart backgroung"
          style={{
            transition: "transform 1000ms ease-in-out",
            transform: `scale(${scale})`,
            transformStyle: "preserve-3d",
          }}
        />
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="about-section-image-container"
      >
        <img src={heart} atl="heart with love" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className="about-section-text-container"
      >
        <p className="p-text">Will You ...</p>
      </motion.div>
    </div>
  );
};
