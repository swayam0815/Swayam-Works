"use client";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  PaintBrushIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function Card({ heading, text, icon, color }) {
  return (
    <>
      <motion.div
        className={`flex flex-col w-full h-52 p-2  rounded-xl border-2 ${color} text-black text-center w-64 h-64 bg-gray-50 bg-opacity-10`}
        whileHover={{ scale: 1.05 }}
      >
        {icon === 1 && <GlobeAltIcon className="w-12 h-12 mx-auto my-2" />}
        {icon === 2 && <PaintBrushIcon className="w-12 h-12 mx-auto my-2" />}
        {icon === 3 && <CodeBracketIcon className="w-12 h-12 mx-auto my-2" />}

        <h2 className="text-lg font-bold lg:text-xl my-1">{heading}</h2>
        <p className="text-pretty text-base  text-center">{text}</p>
      </motion.div>
    </>
  );
}

export default Card;
