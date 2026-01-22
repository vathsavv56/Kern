import { GoDot, GoDotFill } from "react-icons/go";
import { useState, useEffect } from "react";
import MatrixDisplay from "dot-matrix-display";
import { FaClover } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import { Link } from "react-router";
import { IoMdArrowDropleft } from "react-icons/io";
import { TbError404 } from "react-icons/tb";

const texts = [
  { pattern: "PAGE", secondary_text: "-" },
  { pattern: "NOT", secondary_text: "-" },
  { pattern: "FOUND", secondary_text: "-" },
];

const ErrorPage404 = () => {
  const [dot, setDot] = useState<boolean>(true);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => !prev);
      setNow(new Date());
    }, 500);

    return () => clearInterval(interval);
  }, [dot, now]);

  return (
    <div className="font-jetMono min-h-screen w-full bg-black text-white relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8">
     
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12 lg:top-20 lg:left-20 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-xl z-10">
        {dot ? (
          <GoDot className="text-sm sm:text-base md:text-lg lg:text-xl" />
        ) : (
          <GoDotFill className="text-sm sm:text-base md:text-lg lg:text-xl" />
        )}
        <span className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap">
          <TbError404 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <span className="whitespace-nowrap">Page not found</span>
          <GoNorthStar className="animate-pulse text-sm sm:text-base md:text-lg lg:text-xl" />
        </span>
      </div>

    
      <div className="scale-110 sm:scale-125 md:scale-150 lg:scale-[1.75] xl:scale-[2] 2xl:scale-[2.5] p-2 sm:p-4 flex flex-col items-center my-8 sm:my-12 md:my-16">
        <MatrixDisplay texts={texts} duration={900} />
      </div>

     
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 text-xs sm:text-sm md:text-base text-white">
        {now.toLocaleDateString()}
      </div>

     
      <div
        id="home"
        className="absolute bottom-12 sm:bottom-14 md:bottom-16 lg:bottom-20 border bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-sm hover:rounded-2xl duration-300 transition-all"
      >
        <Link
          to={"/"}
          className="flex items-center text-xs sm:text-sm md:text-base"
        >
          <IoMdArrowDropleft className="text-lg sm:text-xl md:text-2xl" />
          <span className="whitespace-nowrap">Goto Home</span>
        </Link>
      </div>

   
      <div
        id="credit"
        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 lg:bottom-10 lg:left-10 max-w-[calc(100vw-1rem)] sm:max-w-none"
      >
        <div className="border border-white rounded-full px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1 text-white hover:bg-white hover:text-black duration-300 transition-all text-xs sm:text-sm md:text-base">
          <p className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
            <FaClover className="animate-spin shrink-0" />
            <span className="whitespace-nowrap">Component By</span>
            <a
              href="https://github.com/PPraneesh/dot-matrix-display"
              target="_blank"
              className="flex items-center gap-1 hover:underline hover:underline-offset-4 whitespace-nowrap"
            >
              <FaAt className="shrink-0" />
              PPraneesh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage404;
