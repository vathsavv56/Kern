import { NavLink, Outlet, useNavigate } from "react-router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const navLinks = [
  { to: "navbar1", name: "Navtype1" },
  { to: "navbar2", name: "Navtype2" },
  { to: "navbar3", name: "Navtype3" },
  { to: "navbar4", name: "Navtype4" },
  { to: "navbar5", name: "Navtype5" },
];

const NavMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-6 sm:gap-10 flex-col w-full px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col justify-center gap-5 text-white bg-gray-800 rounded-xl">
        <button
          className="bg-white text-black rounded-xl cursor-pointer px-3 py-1.5 flex items-center gap-1 hover:scale-105 transition-transform w-fit text-sm"
          onClick={() => navigate("/components")}
        >
          <IoIosArrowBack /> Go back
        </button>
        <h3 className="hover:underline hover:underline-offset-4 cursor-pointer text-xl">
          NavBars menu:
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 w-fit hover:rounded-2xl text-sm ${isActive ? "bg-blue-700" : "bg-blue-500"
                }`
              }
            >
              <p className="flex items-center gap-2">
                {item.name} <IoIosArrowForward />
              </p>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default NavMenu;