import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar4 = () => {
  const [open, setOpen] = useState(false);

  const links = ["Work", "Studio", "Journal", "About"];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <span className="text-lg font-light text-gray-900 tracking-[0.3em] uppercase">
              Mono
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-sm tracking-wide transition-colors duration-200 relative pb-1 ${
                  i === 0
                    ? "text-gray-900 border-b border-gray-900"
                    : "text-gray-400 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
              Search
            </button>
            <span className="text-gray-200">|</span>
            <button className="text-sm text-gray-900 font-medium cursor-pointer hover:opacity-70 transition-opacity">
              Menu
            </button>
          </div>

          <button
            className="md:hidden text-gray-900 text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 flex flex-col gap-0 bg-white border-t border-gray-100">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`px-2 py-3 text-sm tracking-wide border-b border-gray-100 transition-colors ${
                i === 0
                  ? "text-gray-900 font-medium"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              {link}
            </a>
          ))}
          <div className="flex gap-4 mt-4 px-2">
            <button className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar4;