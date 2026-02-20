import { useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";

const suggestions = ["Dashboard", "Settings", "Profile", "Analytics", "Notifications", "Billing"];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filtered = query.length > 0
    ? suggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
        Search Input
      </p>
      <div className="relative">
        <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search..."
          className="w-full pl-10 pr-10 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-200 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 placeholder:text-gray-300"
        />
        {query.length > 0 && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
          >
            <HiX className="text-sm" />
          </button>
        )}

        {focused && filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
            {filtered.map((item) => (
              <button
                key={item}
                onMouseDown={() => {
                  setQuery(item);
                  setFocused(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-2"
              >
                <HiSearch className="text-xs text-gray-300" />
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {query.length === 0 && (
        <p className="text-xs text-gray-300 mt-2 px-1">
          Try typing "dash" or "set"
        </p>
      )}
    </div>
  );
};

export default SearchBar;