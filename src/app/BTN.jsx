'use client';

import { motion } from "framer-motion";

function BTN({ text, onClick }) {
  return (
    <motion.button
      id="BTN"
      className="m-auto h-full w-full rounded-full border-2 border-solid border-yellow-500 bg-black p-2 px-2.5 py-1.5 text-xl text-red transition duration-300 ease-in-out hover:shadow-custom hover:bg-black hover:text-white "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
export default BTN;