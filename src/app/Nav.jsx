'use client'
import Link from "next/link";
import {motion} from "framer-motion";

const Nav = () => {
  return (
    <motion.div className="fixed top-0 flex items-center justify-center w-full p-4 h-[9%] z-50"
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{duration: 1,
    ease: "easeInOut"
    }}
    >
      <div
        className="m-6 text-2xl flex items-center justify-center w-min  bg-white gap-5 p-2 rounded-full px-4 border-2 border-yellow-500"
      >
        <Link href="/#hero">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
      </div>
    </motion.div>
  );
};

export default Nav;
