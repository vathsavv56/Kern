import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar3 = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Features", "Pricing", "About", "Contact"];

  return (
    <div className="w-full px-2 sm:px-4 pt-4">
      <nav className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg shadow-black/5">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white tracking-tight">
                ✦ <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Aura</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-violet-500/25">
                Sign Up
              </button>
            </div>

            <button
              className="md:hidden text-white text-2xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"
            }`}
        >
          <div className="px-4 pt-2 flex flex-col gap-1 border-t border-white/10">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
              >
                {link}
              </a>
            ))}
            <button className="mt-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar3;