'use client';
import { motion } from "framer-motion";


function Card({heading, text, image, color }) {
    return (
      <>
        <motion.div
          className={`flex flex-col w-full h-full p-4   rounded-xl border-2 ${color} text-white text-center w-64 h-64 bg-gray-50 bg-opacity-10`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            
        >
          <h2 className="text-lg font-bold lg:text-2xl my-2">{heading}</h2>
          <p className="text-pretty text-base text-center">{text}</p>
        </motion.div>
      </>
    );
  }
  
  export default Card;