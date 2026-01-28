import { useMemo } from "react";
import { FaAt } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
import Idle from "../assets/idle.webp";
import Feature from "./Feature";
import type { IconType } from "react-icons/lib";
import { WiLightning } from "react-icons/wi";
import { FaClock } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";


const Hero = () => {
  
  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col gap-16 text-center items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 ">
      <Cta />
      <Header />
      <Icons />
      <ImageSection />
      <Features />
    </div>
  );
};

const Cta = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full bg-gray-50 border border-gray-200 px-4 py-3 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
      <span className="flex items-center">
        Beautiful fonts & components for React{" "}
        <FaCaretRight className="text-gray-500 text-lg ml-1 hidden sm:inline-flex" />
      </span>
      <div className="flex items-center gap-1">
        <FaAt className="text-gray-500 text-lg" />
        <a
          href="https://github.com/vathsavv56"
          className="text-gray-900 hover:underline underline-offset-2"
        >
          Vathsav
        </a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight mb-4 sm:mb-6 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
        Craft Beautiful React Experiences
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
        Build stunning user interfaces with elegantly designed components and
        hand picked fonts
      </p>
    </div>
  );
};

const Icons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm cursor-pointer">
        <FaReact className="text-2xl text-blue-500 animate-spin" />
        <p className="text-sm font-medium text-gray-600">Build for React</p>
      </div>
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm cursor-pointer">
        <RiTailwindCssFill className="text-2xl text-teal-500" />
        <span className="text-sm font-medium text-gray-600">
          Styled with Tailwind CSS
        </span>
      </div>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="mt-12 sm:mt-16 relative rounded-2xl border border-gray-200 bg-white/50 p-2 shadow-2xl backdrop-blur-sm lg:rounded-3xl lg:p-3 w-full max-w-4xl">
      <img
        src={Idle}
        alt="Hero Dashboard Preview"
        width={1024}
        height={600}
        className="rounded-lg sm:rounded-xl shadow-sm border border-gray-100 w-full h-auto"
      />
    </div>
  );
};

const Features = () => {
  const featureArr: Array<{
    heading: string;
    text: string;
    icon: IconType;
  }> = useMemo(
    () => [
      {
        heading: "Fast Performance",
        text: "Optimized code that runs at lightning speed with minimal overhead Built with typescript",
        icon: WiLightning,
      },
      {
        heading: "Built with Modularity",
        text: "Designed to grow effortlessly as users and features increase.",
        icon: FaClock,
      },
      {
        heading: "Developer Friendly",
        text: "Clean structure, readable logic, and easy maintenance.",
        icon: FaPen,
      },
    ],
    [],
  );

  return (
    <div className="bg-gray-50/80 w-full max-w-5xl snap-center rounded-2xl sm:rounded-3xl mt-20 sm:mt-24 p-4 sm:p-8 border border-gray-100 shadow-lg">
      <div id="heading" className="mt-4 sm:mt-6 mb-8 sm:mb-12">
        <h3 className="text-3xl sm:text-4xl text-gray-900 font-poppins tracking-tight font-bold text-center flex items-center justify-center gap-3">
          Why use Kern
          <span
            key="question-icon"
            className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm"
          >
            <AiOutlineQuestion className="text-gray-500 text-base sm:text-lg" />
          </span>
        </h3>
        <p className="text-gray-600 text-base sm:text-lg font-medium mt-4 sm:mt-6 max-w-2xl mx-auto">
          Discover what makes Kern special for your projects
        </p>
      </div>
      <div id="main-content" className="mt-8 sm:mt-12">
        <div
          id="feature"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 sm:px-4"
        >
          {featureArr.map((item, index) => (
            <Feature
              heading={item.heading}
              text={item.text}
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
