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
    description: "Multi-line text input components",
    icon: IoMdText,
  },
  {
    name: "Buttons",
    to: "buttons",
    description: "Primary, secondary & icon buttons",
    icon: IoMdRadioButtonOn,
  },
  {
    name: "SearchBar",
    to: "searchbar",
    description: "Search inputs with suggestions",
    icon: IoMdSearch,
  },
  {
    name: "Avatar",
    to: "avatar",
    description: "User profile & image components",
    icon: IoMdPerson,
  },
  {
    name: "Spinner",
    to: "spinner",
    description: "Loading & progress indicators",
    icon: IoMdSync,
  },
  {
    name: "NavBars",
    to: "navbars",
    description: "Navigation menus & headers",
    icon: IoMdMenu,
  },
  {
    name: "Card",
    to: "card",
    description: "Content containers & layouts",
    icon: IoMdCard,
  },
];

const Menu = () => {
  return (
    <section className="relative flex min-h-scren w-full justify-center bg-linear-to-b from-gray-50 to-white px-4 py-16">
      <div className="w-full max-w-5xl">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <h3 className="mb-3 text-4xl font-extrabold tracking-tight text-gray-900">
            Component Library
          </h3>
          <p className="mx-auto max-w-xl text-gray-500">
            Browse and preview reusable UI components crafted for speed,
            consistency, and scalability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.to}
                to={link.to}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300
                           hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {/* Accent bar */}
                <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                      <Icon className="text-xl" />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {link.name}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <IoIosArrowForward className="mt-1 text-lg text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-600" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
