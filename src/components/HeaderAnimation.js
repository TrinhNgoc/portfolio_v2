import React from 'react';
import Sparkles from 'react-sparkle';
import { motion } from "framer-motion";

const HeaderAnimation = ({text}) => {
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }
  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <span className="relative">
      <motion.h1 
        className="b f6-s db mb3 mb4-ns ph3 ph5-ns shiny"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          )
        })}
        <Sparkles
          color="#ffdf00"
          count={10}
          minSize={5}
          maxSize={15}
          overflowPx={15}
          fadeOutSpeed={10}
          newSparkleOnFadeOut={true}
          flicker={true}
        />
      </motion.h1>
    </span>
  )
}

export default HeaderAnimation;
