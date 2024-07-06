'use client';
import { motion } from "framer-motion";

export default function Shiny({ children }) {
  return (
    <motion.span
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
      }}
      id="linear-mask"
      className="text-yellow-400"
    >
      {children}
    </motion.span>
  );
}