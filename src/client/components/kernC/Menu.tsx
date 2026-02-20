import { Link } from "react-router";
import {
  IoIosArrowForward,
  IoMdText,
  IoMdRadioButtonOn,
  IoMdSearch,
  IoMdPerson,
  IoMdSync,
  IoMdMenu,
  IoMdCard,
} from "react-icons/io";

const links = [
  {
    name: "TextArea",
    to: "textarea",
    description: "Multi-line text input",
    icon: IoMdText,
  },
  {
    name: "Buttons",
    to: "buttons",
    description: "Action & CTA buttons",
    icon: IoMdRadioButtonOn,
  },
  {
    name: "SearchBar",
    to: "searchbar",
    description: "Search input fields",
    icon: IoMdSearch,
  },
  {
    name: "Avatar",
    to: "avatar",
    description: "User profile images",
    icon: IoMdPerson,
  },
  {
    name: "Spinner",
    to: "spinner",
    description: "Loading indicators",
    icon: IoMdSync,
  },
  {
    name: "NavBars",
    to: "navbars",
    description: "Navigation headers",
    icon: IoMdMenu,
  },
  {
    name: "Card",
    to: "card",
    description: "Content containers",
    icon: IoMdCard,
  },
];

const Menu = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Components
      </h3>
      <p className="text-gray-400 text-sm mb-6 sm:mb-8">
        Pick a component to preview.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-900 transition-all duration-200"
            >
              <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-white text-gray-500 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                <Icon className="text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-white transition-colors">
                  {link.name}
                </h4>
                <p className="text-xs text-gray-400 group-hover:text-gray-400 truncate">
                  {link.description}
                </p>
              </div>
              <IoIosArrowForward className="text-gray-300 text-sm shrink-0 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all duration-200" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
