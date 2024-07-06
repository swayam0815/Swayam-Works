"use client";
import Shiny from "./Shiny";
import CBTN from "./CBTN";
import { useState, useEffect } from "react";

const variants = [
  "Wow",
  "Impress",
  "Stand Out",
  "Rock",
  "Inspire",
  "Engage",
  "Captivate",
  "Shine",
  "Win Customers",
  "Delight",
  "Elevate",
  "Enchant",
  "Dazzle",
  "Amaze",
  "Fascinate",
  "Mesmerize",
  "Conquer",
  "Exceed Expectations",
];


const Hero = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);
      setTimeout(() => {
        setCurrentVariant((prev) => (prev + 1) % variants.length);
        setAnimateOut(false);
      }, 500); // Wait for 500ms before switching to next variant
    }, 2000); // Change variant every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col h-screen w-full items-center justify-center p-2 md:items-center"
    >
      <div
        id="section"
        className="relative flex w-full  flex-col items-center justify-start px-2 py-0 text-center md:w-full md:px-32 mb-6"
      >
        <h1 className="text-5xl leading-relaxed md:text-8xl text-center">
          We make websites that
          <div className="overflow-hidden w-max h-max  inline-block">
            <span
              className={`inline-block z-40 ${
                animateOut ? "slide-out" : "slide-in"
              }`}
            >
              <Shiny> {variants[currentVariant]}.</Shiny>
            </span>
          </div>
        </h1>

        <p className="text-2xl leading-relaxed md:mt-8">
          Tailored Web Solutions to Amplify Your Market Reach.
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
