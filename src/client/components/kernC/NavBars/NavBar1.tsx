import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar1 = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Brand<span className="text-blue-600">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"
          }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-2 bg-white border-t border-gray-100">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;