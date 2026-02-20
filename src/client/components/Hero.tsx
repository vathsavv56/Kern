import { useMemo } from "react";
import { FaAt } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
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

/** Animated mock dashboard that showcases Kern's fonts & components */
const HeroShowcase = () => {
  return (
    <div className="mt-12 sm:mt-16 w-full max-w-5xl relative">
      {/* ── ambient glow background ── */}
      <div className="absolute inset-0 -inset-x-12 -inset-y-8 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-br from-violet-400/20 via-blue-400/10 to-cyan-400/15 blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl animate-glow-pulse" style={{ animationDelay: "0.8s" }} />
      </div>

      {/* ── floating cards grid ── */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 px-2">

        {/* ─── Buttons Card ─── */}
        <div className="animate-float-slow rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/40 p-5 flex flex-col gap-3 hover:shadow-2xl hover:shadow-violet-200/30 transition-shadow duration-500 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Buttons</span>
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-glow-pulse" />
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-xs font-bold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow cursor-default">
              Primary Action
            </button>
            <button className="w-full px-4 py-2 rounded-xl bg-gray-900 text-xs font-bold text-white hover:bg-gray-800 transition-colors cursor-default">
              Dark Button
            </button>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-[10px] font-semibold text-gray-500 bg-white hover:border-gray-300 transition-colors cursor-default">
                Ghost
              </button>
              <button className="flex-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-[10px] font-bold text-white cursor-default">
                Info
              </button>
            </div>
          </div>
        </div>

        {/* ─── Typography Card ─── */}
        <div className="animate-float-slow-reverse rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/40 p-5 flex flex-col gap-3 hover:shadow-2xl hover:shadow-blue-200/30 transition-shadow duration-500 hover:-translate-y-1" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Typography</span>
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-glow-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="flex flex-col gap-2.5 mt-1">
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-bold text-gray-900 font-poppins leading-tight">Poppins</span>
              <span className="text-[9px] text-gray-300 font-medium">Sans</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-base text-gray-700 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                <i>Playfair Display</i>
              </span>
              <span className="text-[9px] text-gray-300 font-medium">Serif</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-gray-500 font-jetMono leading-tight">JetBrains Mono</span>
              <span className="text-[9px] text-gray-300 font-medium">Mono</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <p className="text-[10px] text-gray-400 leading-relaxed">
              80+ curated typefaces, lazy loaded
            </p>
          </div>
        </div>

        {/* ─── Component Card ─── */}
        <div className="col-span-2 md:col-span-1 animate-float-gentle rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/40 p-5 flex flex-col gap-3 hover:shadow-2xl hover:shadow-emerald-200/30 transition-shadow duration-500 hover:-translate-y-1" style={{ animationDelay: "1s" }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Components</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          {/* mini card preview */}
          <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 p-3 mt-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md shadow-amber-300/30 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-gray-800 truncate">User Profile Card</span>
                <span className="text-[10px] text-gray-400">@kern/components</span>
              </div>
            </div>
          </div>
          {/* mini navbar preview */}
          <div className="rounded-xl bg-gray-900 p-2.5 flex items-center justify-between">
            <span className="text-[10px] font-bold text-white/90 tracking-tight">NavBar</span>
            <div className="flex gap-1.5">
              <span className="w-4 h-0.5 rounded bg-white/30" />
              <span className="w-4 h-0.5 rounded bg-white/30" />
              <span className="w-4 h-0.5 rounded bg-white/50" />
            </div>
          </div>
          {/* mini avatar row */}
          <div className="flex items-center -space-x-2">
            {["from-pink-400 to-rose-500", "from-sky-400 to-blue-500", "from-lime-400 to-emerald-500", "from-violet-400 to-purple-500"].map((g, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-white shadow-sm`}
              />
            ))}
            <span className="pl-4 text-[10px] text-gray-400 font-medium">+4 more</span>
          </div>
        </div>

        {/* ─── Code Snippet (full width bottom) ─── */}
        <div className="col-span-2 md:col-span-3 animate-float-gentle rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-gray-900/20 p-5 hover:shadow-2xl transition-shadow duration-500" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <span className="ml-2 text-[10px] text-white/25 tracking-wide font-medium">App.tsx</span>
          </div>
          <div className="font-jetMono text-[11px] sm:text-xs leading-relaxed">
            <p className="mb-1">
              <span className="text-purple-400">import</span>
              <span className="text-white/50">{" { "}</span>
              <span className="text-cyan-300">Button</span>
              <span className="text-white/40">{", "}</span>
              <span className="text-cyan-300">Card</span>
              <span className="text-white/40">{", "}</span>
              <span className="text-cyan-300">NavBar</span>
              <span className="text-white/50">{" } "}</span>
              <span className="text-purple-400">from</span>
              <span className="text-amber-300">{" 'kern'"}</span>
              <span className="text-white/25">;</span>
            </p>
            <p className="mb-1">
              <span className="text-purple-400">import</span>
              <span className="text-white/50">{" { "}</span>
              <span className="text-cyan-300">useFont</span>
              <span className="text-white/50">{" } "}</span>
              <span className="text-purple-400">from</span>
              <span className="text-amber-300">{" 'kern/fonts'"}</span>
              <span className="text-white/25">;</span>
            </p>
            <p className="mt-2">
              <span className="text-blue-400">const</span>
              <span className="text-emerald-300">{" App "}</span>
              <span className="text-white/40">= () {"=> ("}</span>
              <span className="text-white/25 animate-typing-cursor ml-0.5">|</span>
            </p>
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

