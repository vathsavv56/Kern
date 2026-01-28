import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Kern from "../assets/logo-dark.svg";
import { cn } from "../cn";
import { FiArrowUpRight, FiFeather, FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface NavLinkItem {
  to: string;
  name: string;
}

const navItems: NavLinkItem[] = [
  { to: "/fonts", name: "Fonts" },
  { to: "/components", name: "Components" },
  { to: "/docs", name: "Docs" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full p-2 mb-10">
      {/* Top Info Bar */}
      <div className="h-auto rounded-xl bg-linear-to-r from-gray-800 to-gray-900 px-4 py-2 text-center text-white items-center justify-center flex mb-2">
        <div className="mx-auto max-w-5xl w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 font-poppins text-sm">
          <p className="text-gray-300 flex items-center gap-2 text-center">
            <FiFeather className="text-orange-400 shrink-0" />
            <span>
              An API based font library —{" "}
              <span className="text-white font-medium">Open Source</span>
            </span>
            <Link
              to="/docs"
              className="ml-3 text-orange-400 hover:text-orange-300 transition-colors hidden sm:inline"
            >
              Learn More →
            </Link>
          </p>
          <a
            href="https://github.com/vathsavv56/kern"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub />
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="relative flex items-center justify-between max-w-5xl mx-auto p-4 sm:p-5 shadow-sm rounded-3xl bg-white z-50 mt-2">
        {/* Logo */}
        <NavLink to="/" onClick={handleLinkClick}>
          <img src={Kern} alt="Kern Logo" className="rounded-2xl h-10 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              to={item.to}
              key={item.to}
              className={({ isActive }) =>
                cn(
                  "text-black hover:text-orange-400 transition-colors",
                  isActive &&
                    "text-orange-500 font-medium underline underline-offset-4 decoration-orange-500",
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => navigate("/login")}
            className={cn(
              "relative flex items-center ml-5 px-5 py-2 rounded-full",
              "bg-orange-500/80 text-white text-sm group",
              "cursor-pointer transition-transform duration-200 hover:scale-105",
              "before:content-['Optional'] before:absolute before:top-full before:mt-2 before:left-1/2 before:-translate-x-1/2",
              "before:px-3 before:py-1 before:rounded-lg before:bg-black before:text-white before:text-xs",
              "before:opacity-0 before:scale-95 before:transition-all before:duration-200 before:pointer-events-none",
              "hover:before:opacity-100 hover:before:scale-100",
            )}
          >
            Login{" "}
            <FiArrowUpRight className="ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-full md:hidden bg-white shadow-lg rounded-xl p-5 border border-gray-100">
            <div className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <NavLink
                  to={item.to}
                  key={item.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    cn(
                      "text-black hover:text-gray-400 w-full text-center py-2 rounded-md transition-colors",
                      isActive && "bg-gray-100 text-red-500 font-medium",
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  navigate("/fonts");
                  handleLinkClick();
                }}
                className="w-full mt-2 px-5 py-2 bg-orange-500/80 text-white rounded-full text-sm flex items-center justify-center group"
              >
                Login <FiArrowUpRight className="ml-1" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
