'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = [
  "Wow",
  "Impress",
  "Stand Out",
  "Rock",
  "Convert",
  "Inspire",
  "Engage",
  "Captivate",
  "Shine",
  "Win Customers"
];

const HeadingTransition = () => {
    const [currentVariant, setCurrentVariant] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentVariant((prev) => (prev + 1) % variants.length);
      }, 2000); // Change variant every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          We Make Websites That
        </h1>
        <div className="overflow-hidden h-20 md:h-28 flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              key={currentVariant}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold text-blue-500"
            >
              {variants[currentVariant]}
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 text-center">
          Helping Small Biz and Charities Shine Online
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
          <button className="px-6 py-2 bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Our Services
          </button>
        </div>
      </section>
    );
  };
  
  export default HeadingTransition;