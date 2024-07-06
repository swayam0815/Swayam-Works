"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function CBTN({ path, children }) {
  return (
    <motion.span
      id="BTN"
      className="m-auto h-full w-full rounded-full border-2 border-solid border-yellow-400 bg-white p-2 px-2.5 py-1.5 text-xl text-red transition duration-300 ease-in-out hover:shadow-custom hover:bg-white hover:text-black "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={path}>{children}</Link>
    </motion.span>
  );
}
export default CBTN;
