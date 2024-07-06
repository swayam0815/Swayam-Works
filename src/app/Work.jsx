import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const services = [
    {
      h1: "Website Design and Development",
      p: "Original and Unique websites tailored to reflect your ideas. We keep you involved every step of the way to ensure full satisfaction and transparency.",
    },

    {
      h1: "Consulting and Strategy",
      p: "Whether you're starting from scratch or looking to revamp your existing website, we provide expert advice and guidance to help you achieve your goals."
    },
    {
      h1: "Maintenance and Support",
      p: "We offer ongoing support and maintenance services to keep your website running smoothly and efficiently."},
  ];

  const colors = [
    "border-purple-400 text-purple-400 bg-purple-400",
    "border-blue-400 text-blue-400 bg-blue-400",
    "border-emerald-400 text-emerald-400 bg-emerald-400",
  ];

  return (
    <section
      className="flex flex-col h-full w-full justify-center items-center gap-8 box-border p-2 md:p-6"
      id="services"
    >
      <h1 className="text-6xl md:text-8xl mb-10">Services</h1>
      <div className="flex items-center justify-center w-full h-3/5 flex-col md:flex-row box-border rounded-lg p-2 md:p-4 gap-2">
        <div className="border-4  h-full w-full md:w-1/3 flex items-center rounded-lg justify-center flex-col text-center gap-4 bg-opacity-30 border-purple-400 bg-purple-400 p-3">
          <h1 className="text-xl md:text-4xl text-purple-700">{services[0].h1}</h1>
          <p className=" text-base md:text-xl">{services[0].p}</p>
        </div>
        <div className="border-4  h-full w-full md:w-1/3 flex items-center rounded-lg justify-center gap-4 flex-col text-center  bg-opacity-30 border-blue-400 bg-blue-400 p-3">
          <h1 className="text-xl md:text-4xl text-blue-700">{services[1].h1}</h1>
          <p className=" text-base md:text-xl">{services[1].p}</p>
        </div>
        <div className="border-4  h-full w-full md:w-1/3 flex flex-col items-center rounded-lg justify-center  text-center gap-4 bg-opacity-30 border-orange-400 bg-orange-400 p-3">
          <h1 className="text-xl md:text-4xl text-orange-700">{services[2].h1}</h1>
          <p className=" text-base md:text-xl">{services[2].p}</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
