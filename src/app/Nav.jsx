import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0 flex items-center justify-center w-full p-4 h-[9%] ">
      <div
        id="navb"
        className="m-6 text-2xl flex items-center justify-center w-min gap-5 p-2 rounded-full px-4 border-2 border-yellow-300"
      >
        <Link href="/#hero">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
      </div>
    </div>
  );
};

export default Nav;
