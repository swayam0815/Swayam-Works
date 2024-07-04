import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Work = () => {
  const whyUs = [
    {
      headline: "Professional Website Design & Development",
      tagline:
        "We specialize in creating responsive, user-friendly websites tailored to your business needs.",
    },
    {
      headline: "Comprehensive Website Maintenance",
      tagline:
        "Keep your website up-to-date with our reliable maintenance services.",
    },
    {
      headline: "Creative Promotional Services",
      tagline:
        "Boost your brand with eye-catching flyers and engaging social media posts.",
    },
  ];

  const colors = [
    "border-purple-400 text-purple-400 bg-purple-400",
    "border-blue-400 text-blue-400 bg-blue-400",
    "border-emerald-400 text-emerald-400 bg-emerald-400",
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8" id="services">
      <h1 className="relative text-6xl md:text-8xl">Services</h1>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 md:justify-center w-3/4">
        {whyUs.map((item, index) => (
          <Card
            key={index}
            heading={item.headline}
            text={item.tagline}
            color={colors[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
