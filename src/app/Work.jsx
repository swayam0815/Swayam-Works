"use client";
import { motion } from "framer-motion";
import Card from "./Card";

const Work = () => {
  const whyUs = [
    {
      headline: "Website Design & Development",
      tagline:
        "We design and develop beautiful websites that are responsive and mobile-friendly.",
    },
    {
      headline: "Website Maintenance",
      tagline:
        "We offer website maintenance services to keep your website up-to-date.",
    },
    {
      headline: "Brand Identity & Logo Design",
      tagline:
        "We create unique and memorable brand identities that set you apart from the competition.",
    },
    // another section about flyer and social media post design
    {
      headline: "Promotional Services",
      tagline:
        "We design flyers and social media posts to promote your business.",
    },
  ];

  // Array of colors to assign dynamically to each div
  const colors = [
    "border-purple-400 text-purple-400 bg-purple-400",
    "border-blue-400 text-blue-400 bg-blue-400",
    "border-emerald-400 text-emerald-400 bg-emerald-400",
    "border-yellow-400 text-yellow-400 bg-yellow-400",
  ];

  return (
    <section
      className="flex flex-col md:gap-10 p-2 md:p-8 flex-wrap"
      id="services"
    >
      <h1 className="relative  text-7xl md:text-8xl my-7">Services</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-center w-3/4">
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
