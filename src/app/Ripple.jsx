import React from 'react';
import { motion } from 'framer-motion';

const Ripple = ({ word }) => {
  return (
    <span>
      {word.split("").map((letter, index) => {
        return (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: 0, x:0 }}
            animate={{ y: [0, 5, 0], x: [0, 1, 0]}}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.2 // Adjust the delay factor as needed
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </span>
  );
}

export default Ripple;
