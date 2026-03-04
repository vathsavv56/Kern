import { useMemo } from "react";
import { FaAt } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import type { IconType } from "react-icons/lib";
import { WiLightning } from "react-icons/wi";
import { FaClock } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";


const Hero = () => {

  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col gap-16 text-center items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 ">
      <Cta />
      <Header />
      <PromoVideo />
      <Icons />
      <HeroShowcase />
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

const PromoVideo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
          src="/kern-video.mp4"
        />
      </div>
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

/** Minimalist Bento Box grid showcasing Kern's modularity */
const HeroShowcase = () => {
  return (
    <div className="mt-16 sm:mt-20 w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

        {/* Typography Card (Span 2) */}
        <div className="md:col-span-2 rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[16rem] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase">Typography</span>
            <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500">80+ Fonts</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-5xl sm:text-7xl font-poppins font-bold text-gray-900 tracking-tight leading-none">
              Aa
            </div>
            <div className="flex gap-4 sm:gap-8 items-baseline overflow-hidden">
              <span className="text-base sm:text-lg font-medium text-gray-800 font-poppins">Poppins</span>
              <span className="text-base sm:text-lg text-gray-500 italic" style={{ fontFamily: 'Georgia, serif' }}>Playfair</span>
              <span className="text-base sm:text-lg text-gray-400 font-jetMono truncate">JetBrains Mono</span>
            </div>
          </div>
        </div>

        {/* Components Card (Span 1) */}
        <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[16rem] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase">Components</span>
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <button className="w-full py-2.5 sm:py-3 rounded-xl bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm cursor-default">
              Primary Action
            </button>
            <button className="w-full py-2.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors cursor-default">
              Ghost Button
            </button>
          </div>
        </div>

        {/* Code Snippet Card (Span 1) */}
        <div className="rounded-3xl bg-gray-950 p-6 sm:p-8 flex flex-col min-h-[16rem] hover:shadow-lg transition-shadow">
          <div className="flex gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
          </div>
          <div className="font-jetMono text-[11px] sm:text-xs text-gray-300 flex-1 flex flex-col justify-center">
            <div className="flex bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-gray-800/50 leading-relaxed">
              <div className="text-gray-600 select-none text-right pr-4 mr-4 border-r border-gray-800">
                1<br />2<br />3<br />4
              </div>
              <div>
                <span>
                  <span className="text-gray-500">import</span> {"{ "}
                  <span className="text-white">Card</span>
                  {" } "} <span className="text-gray-500">from</span>
                  <span className="text-gray-400"> 'kern'</span>;
                </span>
                <br />
                <span className="mt-2 block">
                  <span className="text-gray-500">const</span> <span className="text-white">UI</span> = () =&gt; (
                </span>
                <span>
                  &nbsp;&nbsp;&lt;<span className="text-white">Card</span> /&gt;
                </span>
                <br />
                <span>);</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layout / Grid Card (Span 2) */}
        <div className="md:col-span-2 rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col min-h-[16rem] hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase">Modular Design</span>
            <span className="text-[10px] text-gray-400">Responsive Ready</span>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 sm:gap-3 flex-1">
            <div className="col-span-2 row-span-2 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
              <span className="text-[10px] font-jetMono text-gray-300">Hero</span>
            </div>
            <div className="col-span-2 rounded-2xl bg-gray-900 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-jetMono text-gray-500">Nav</span>
            </div>
            <div className="col-span-1 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
              <span className="text-[10px] font-jetMono text-gray-400">Card</span>
            </div>
            <div className="col-span-1 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50/50">
              <span className="text-[10px] font-jetMono text-gray-300">+</span>
            </div>
          </div>
        </div>

      </div>
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
    <div className="w-full max-w-5xl mt-24 sm:mt-32 mb-16 px-4 sm:px-0">
      <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">
        {/* Left: Sticky Header */}
        <div className="md:w-1/3 md:sticky md:top-32 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200">
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase">Why Kern</span>
          </div>
          <h3 className="text-4xl sm:text-5xl text-gray-900 font-poppins font-bold tracking-tight leading-[1.1]">
            Build better.<br />
            <span className="text-gray-400">Ship faster.</span>
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
            Everything you need to create stunning interfaces, carefully crafted and ready to drop into your project.
          </p>
        </div>

        {/* Right: Features Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {featureArr.map((item, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6 ${index === 2 ? 'sm:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 group-hover:scale-110 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                <item.icon className="text-2xl" />
              </div>
              <div className="space-y-3">
                <h5 className="text-xl font-bold text-gray-900 tracking-tight">
                  {item.heading}
                </h5>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

