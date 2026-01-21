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
  {pattern : "FOUND" , secondary_text : "-"}
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
    <div className="font-jetMono min-h-screen w-full bg-black text-white relative flex flex-col items-center justify-center">
      <div className="absolute top-20 left-20  flex items-center gap-2 text-xl">
        {dot ? <GoDot /> : <GoDotFill />}
        <span className="flex items-center gap-3"><TbError404 className="text-4xl"/> Page not found <GoNorthStar className="animate-pulse"/> </span>
      </div>

      
      <div className="scale-250 p-4 flex flex-col items-center">
         <MatrixDisplay texts={texts} duration={900} /> 
      </div>

      <div className="absolute bottom-10 text-sm text-white">
        {now.toLocaleDateString()}
      </div>

      <div id="home" className="absolute bottom-25 border bg-white text-black px-4 py-2  rounded-sm hover:rounded-2xl duration-300 transition-all">
        <Link
        to={"/"}
        className="flex items-center"
        >
          <IoMdArrowDropleft className="text-2xl"/>
        Goto Home
        </Link>
      </div>
      <div
        id="credit"
        className="absolute bottom-10  left-10 "
      >
        <div className="border-white rounded-full px-4 py-1 text-white hover:bg-white hover:text-black duration-300
        transition-all
        ">
          <p className="flex items-center gap-5"> <FaClover className="animate-spin"/>Component By 
          <a href="https://github.com/PPraneesh/dot-matrix-display" target="_blank"  className="flex items-center gap-1 hover:underline hover:underline-offset-4"> <FaAt/> PPraneesh</a>
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default ErrorPage404;
