"use client";
import Shiny from "./Shiny";
import CBTN from "./CBTN";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  "Win Customers",
];
const Hero = () => {
  const [currentVariant, setCurrentVariant] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariant((prev) => (prev + 1) % variants.length);
    }, 2000); // Change variant every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="hero"
      className=" flex flex-col h-screen w-full items-center justify-center p-2 md:items-center"
    >
      <div
        id="section"
        className="relative flex w-full flex-col items-center justify-start px-2 py-0 text-center md:w-full md:px-32 mb-6"
      >
        <h1 className="text-5xl leading-relaxed md:text-8xl">
          We make websites that <Shiny> {variants[currentVariant]}</Shiny>.
        </h1>

        <p className="text-2xl leading-relaxed md:mt-8">
          Tailored Web Solutions to Amplify Your Market Reach.{" "}
        </p>
      </div>
      <div id="btns" className="flex items-center justify-center gap-4">
        <CBTN path="/#contact">
          <p className="text-3xl">Contact</p>
        </CBTN>
        <CBTN path="/#services">
          <p className="text-3xl">Services</p>
        </CBTN>
      </div>
    </section>
  );
};

export default Hero;
