import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar2 = () => {
  const [open, setOpen] = useState(false);

  const leftLinks = ["Home", "About", "Services"];
  const rightLinks = ["Blog", "Careers", "Contact"];

  return (
    <nav className="w-full bg-gray-900 border-b-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:justify-center md:gap-0">
          {/* Left Links (desktop) */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end pr-10">
            {leftLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white tracking-widest uppercase">
              Luxe
            </span>
          </div>

          {/* Right Links (desktop) */}
          <div className="hidden md:flex items-center gap-6 flex-1 pl-10">
            {rightLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1 bg-gray-900 border-t border-gray-800">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;