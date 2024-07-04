'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Blobs from './Blobs';
import Contact from './Contact';
import Nav from './Nav';
import Work from './Work';

export default function Home() {
  return (
    <>
      {/* <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 5 }} className='fixed h-full w-full box-border border-2 border-green-800 bg-black z-50 '>
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 5 }} className="box-border bg-yellow-300 z-[999] w-full h-screen flex justify-center overflow-hidden fixed top-0 left-0">
          <motion.div
            className="w-20 h-20 bg-black clip-circle absolute"
            initial={{ y: "-100vh" }}
            animate={{ y: "100vh" }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-full h-screen bg-black flex items-center justify-center flex-col gap-2 md:gap-4"
            initial={{ clipPath: "circle(1% at 50% 150%)" }}
            animate={{ y: 0, clipPath: "circle(100% at 50% 50%)" }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="text-yellow-300 text-5xl sm:text-6xl md:text-8xl text-pretty text-center"
            >
              Sway.Works
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="text-yellow-300 text-lg sm:text-2xl md:text-4xl text-center"
            >
              Where Ideas SWAY into Reality
            </motion.h1>
          </motion.div>
        </motion.div >

      </motion.div> */}

      <Nav/>
      <Blobs />
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}
