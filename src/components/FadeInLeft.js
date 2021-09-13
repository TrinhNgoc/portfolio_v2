import React from 'react';
import { motion } from "framer-motion";

const FadeInLeft = (props) => {
  return (
    <motion.p 
      className={`${props.fontSize} lh-copy measure`}
      initial={{ opacity: 0, translateX: -20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: props.duration }}
    >
      {props.children}
    </motion.p>
  )
}

export default FadeInLeft;
