import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiUser, FiBell } from "react-icons/fi";

const NavBar5 = () => {
  const [open, setOpen] = useState(false);

  const links = ["Dashboard", "Projects", "Analytics", "Settings"];

  return (
    <nav className="w-full bg-[#0f172a] border-b border-slate-800">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <span className="text-lg font-semibold text-white tracking-tight">
              Konnect
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-slate-800/50 rounded-xl p-1">
            {links.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  i === 0
                    ? "bg-slate-700 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer relative">
              <FiBell className="text-lg" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-400 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white pl-1.5 pr-3 py-1.5 rounded-xl transition-colors cursor-pointer">
              <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                <FiUser className="text-sm text-white" />
              </div>
              <span className="text-sm font-medium">Profile</span>
            </button>
          </div>

          <button
            className="md:hidden text-slate-300 text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-slate-800">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                i === 0
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3 px-4 py-2.5 border-t border-slate-800">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
              <FiUser className="text-sm text-white" />
            </div>
            <span className="text-sm font-medium text-white">Profile</span>
            <div className="ml-auto">
              <FiBell className="text-slate-400 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar5;