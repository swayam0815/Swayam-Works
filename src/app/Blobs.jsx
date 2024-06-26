"use client";

function Bkg({ num }) {
  return (
    <>
      <div className="fixed top-0 -z-10  h-full w-full items-center justify-center px-16 sm:flex overflow-hidden">
        <div className="relative h-full w-full">
          <div className="-left-50 absolute top-0 h-72 w-72 animate-blob rounded-full bg-orange-200 hidden md:block opacity-50 -mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-40 -mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-4000 absolute -bottom-5 left-20 h-72 w-72 animate-blob rounded-full bg-amber-400 opacity-35 -mix-blend-multiply blur-xl filter"></div>
        </div>
      </div>
    </>
  );
}

export default Bkg;
