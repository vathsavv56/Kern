import { Link } from "react-router"; // Assuming react-router v7 or v6
import { IoIosArrowForward } from "react-icons/io";

const links = [
  { name: "TextArea", to: "textarea" },
  { name: "Buttons", to: "buttons" },
  { name: "SearchBar", to: "searchbar" },
  { name: "Avatar", to: "avatar" },
  { name: "Spinner", to: "spinner" },
  { name: "NavBars", to: "navbars" },
  { name: "Card", to: "card" },
];

const Menu = () => {
  return (
    <section className="flex min-h-[60vh] w-full justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-4xl">
        
        <div className="mb-10 text-center">
          <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Component Menu
          </h3>
          <p className="text-gray-500">
            Explore the available UI elements.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100"
            >
              
              <span className="font-semibold text-gray-700 transition-colors group-hover:text-gray-600">
                {link.name}
              </span>

              
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                <IoIosArrowForward className="text-xl transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;