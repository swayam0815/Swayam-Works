import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Work = () => {
  const services = [
    {
      h1: "Website Design and Development",
      p: "Unique websites tailored to reflect your brand. Mobile-friendly, modern designs with intuitive navigation.",
    },

    {
      h1: "Consulting and Strategy",
      p: "Expert guidance on digital strategies and user experience. Tailored solutions based on industry best practices.",
    },
    {
      h1: "Maintenance and Support",
      p: "Ongoing support to keep your website secure and up-to-date. Prompt technical assistance and regular enhancements.",
    },
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
      <h1 className="text-4xl md:text-8xl mt-6 mb-10">Services</h1>
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
