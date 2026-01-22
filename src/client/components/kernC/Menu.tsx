import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const links = [
  {
    name: "TextArea",
    to: "textarea",
  },
  {
    name: "Buttons",
    to: "buttons",
  },
  {
    name: "SearchBar",
    to: "searchbar",
  },
  {
    name: "Avatar",
    to: "avatar",
  },
  {
    name: "Spinner",
    to: "spinner",
  },
  {
    name: "NavBars",
    to: "navbars",
  },
  {
    name: "Card",
    to: "card",
  },
];

const Menu = () => {
  return (
    <div className="h-fit w-full snap-center p-5 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center  gap-5 bg-gray-200 rounded-xl  ">
    <h3 className="text-xl underline underline-offset-4 cursor-pointer p-5 m-5 text-center md:text-2xl">
      Menu of Components
    </h3>
      <div id="links">
        {links.map((link, index) => (
          <div key={link.name} className="m-2 p-2  text-center">
            <Link
              to={link.to}
              key={index}
              className="group flex w-fit items-center gap-2 px-5 py-3 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md hover:shadow-gray-200/50 transition-all duration-300 rounded-xl text-gray-700 hover:text-gray-900 font-medium"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                {link.name}
              </span>
              <IoIosArrowForward className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
