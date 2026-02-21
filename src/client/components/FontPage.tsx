import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { HiSearch, HiX } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";

const fonts = [
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat",
  "Poppins", "Raleway", "Nunito", "Source Sans 3", "PT Sans",
  "Outfit", "Work Sans", "DM Sans", "Rubik", "Manrope",
  "Karla", "Fira Sans", "Mulish", "Josefin Sans", "Quicksand",
  "Cabin", "Barlow", "Space Grotesk", "Sora", "Plus Jakarta Sans",
  "Lexend", "Geist", "Noto Sans", "Ubuntu", "Urbanist",
  "Nunito Sans", "Exo 2", "Overpass", "Questrial", "Comfortaa",
  "Signika", "Catamaran", "Hind", "Asap", "Sarabun",
  "Playfair Display", "Merriweather", "Libre Baskerville", "Crimson Text",
  "EB Garamond", "Cormorant Garamond", "Bitter", "Arvo",
  "Lora", "Noto Serif", "Vollkorn", "Spectral", "Cardo",
  "Libre Caslon Text", "Domine", "Literata",
  "Inconsolata", "Source Code Pro", "JetBrains Mono", "Fira Code", "Space Mono",
  "IBM Plex Mono", "Roboto Mono", "Ubuntu Mono", "Anonymous Pro", "Courier Prime",
  "Oswald", "Anton", "Bebas Neue", "Righteous", "Archivo Black",
  "Alfa Slab One", "Passion One", "Bungee", "Permanent Marker", "Lobster",
  "Pacifico", "Dancing Script", "Caveat", "Satisfy", "Great Vibes",
  "Sacramento", "Kalam", "Indie Flower", "Patrick Hand", "Shadows Into Light",
];

const tags: Record<string, string> = {
  "Inter": "sans", "Roboto": "sans", "Open Sans": "sans", "Lato": "sans",
  "Montserrat": "sans", "Poppins": "sans", "Raleway": "sans", "Nunito": "sans",
  "Source Sans 3": "sans", "PT Sans": "sans", "Outfit": "sans", "Work Sans": "sans",
  "DM Sans": "sans", "Rubik": "sans", "Manrope": "sans", "Karla": "sans",
  "Fira Sans": "sans", "Mulish": "sans", "Josefin Sans": "sans", "Quicksand": "sans",
  "Cabin": "sans", "Barlow": "sans", "Space Grotesk": "sans", "Sora": "sans",
  "Plus Jakarta Sans": "sans", "Lexend": "sans", "Geist": "sans",
  "Noto Sans": "sans", "Ubuntu": "sans", "Urbanist": "sans",
  "Nunito Sans": "sans", "Exo 2": "sans", "Overpass": "sans", "Questrial": "sans",
  "Comfortaa": "sans", "Signika": "sans", "Catamaran": "sans", "Hind": "sans",
  "Asap": "sans", "Sarabun": "sans",
  "Playfair Display": "serif", "Merriweather": "serif", "Libre Baskerville": "serif",
  "Crimson Text": "serif", "EB Garamond": "serif", "Cormorant Garamond": "serif",
  "Bitter": "serif", "Arvo": "serif", "Lora": "serif", "Noto Serif": "serif",
  "Vollkorn": "serif", "Spectral": "serif", "Cardo": "serif",
  "Libre Caslon Text": "serif", "Domine": "serif", "Literata": "serif",
  "Inconsolata": "mono", "Source Code Pro": "mono", "JetBrains Mono": "mono",
  "Fira Code": "mono", "Space Mono": "mono", "IBM Plex Mono": "mono",
  "Roboto Mono": "mono", "Ubuntu Mono": "mono", "Anonymous Pro": "mono",
  "Courier Prime": "mono",
  "Oswald": "display", "Anton": "display", "Bebas Neue": "display",
  "Righteous": "display", "Archivo Black": "display", "Alfa Slab One": "display",
  "Passion One": "display", "Bungee": "display", "Permanent Marker": "display",
  "Lobster": "display",
  "Pacifico": "hand", "Dancing Script": "hand", "Caveat": "hand",
  "Satisfy": "hand", "Great Vibes": "hand", "Sacramento": "hand",
  "Kalam": "hand", "Indie Flower": "hand", "Patrick Hand": "hand",
  "Shadows Into Light": "hand",
};

const filterLabels: Record<string, string> = {
  all: "All",
  sans: "Sans Serif",
  serif: "Serif",
  mono: "Mono",
  display: "Display",
  hand: "Script",
};

const loadedFonts = new Set<string>();

function loadFont(name: string) {
  if (loadedFonts.has(name)) return;
  loadedFonts.add(name);
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, "+")}&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function FontCard({
  name, text, size, onClick,
}: {
  name: string; text: string; size: number; onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(loadedFonts.has(name));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          loadFont(name);
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [name]);

  const tag = tags[name];

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
            {name}
          </h3>
          <span className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500 capitalize">
            {filterLabels[tag] || tag}
          </span>
        </div>
        <IoChevronForward className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all duration-300 text-sm" />
      </div>

      {/* Font preview */}
      <p
        className="text-gray-800 leading-relaxed truncate transition-opacity duration-500"
        style={{
          fontFamily: visible ? `'${name}', sans-serif` : "inherit",
          fontSize: `${size}px`,
          opacity: visible ? 1 : 0.15,
        }}
      >
        {text}
      </p>
    </div>
  );
}

const FontPage = () => {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog");
  const [size, setSize] = useState(28);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const visible = fonts.filter((f) => {
    if (filter !== "all" && tags[f] !== filter) return false;
    if (search && !f.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const categoryCounts = fonts.reduce((acc, f) => {
    const t = tags[f];
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-gray-900" />
          <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase font-jetMono">
            Typography
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight mb-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
          Explore Fonts
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto font-medium">
          {fonts.length} hand-picked typefaces, lazy-loaded and ready to preview
        </p>
      </div>

      {/* Controls card */}
      <div className="sticky top-0 z-20 pt-2 pb-5">
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-sm">
          {/* Preview text area */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type anything to preview…"
            rows={2}
            className="w-full px-0 py-0 text-lg sm:text-xl text-gray-900 bg-transparent border-none outline-none resize-none placeholder:text-gray-300 leading-relaxed font-poppins"
          />

          <div className="flex items-center justify-between gap-3 flex-wrap border-t border-gray-100 pt-4 mt-2">
            {/* Filter pills */}
            <div className="flex gap-1.5 flex-wrap">
              {Object.entries(filterLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200 cursor-pointer ${filter === key
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {label}
                  {key !== "all" && (
                    <span className={`ml-1 text-[9px] font-jetMono ${filter === key ? "text-gray-400" : "text-gray-300"}`}>
                      {categoryCounts[key] || 0}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search + size */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <HiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search…"
                  className="pl-7 pr-7 py-1.5 text-[11px] text-gray-700 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-gray-400 focus:bg-white transition-all placeholder:text-gray-300 w-32"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 cursor-pointer transition-colors"
                  >
                    <HiX className="text-xs" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 font-jetMono">Aa</span>
                <input
                  type="range"
                  min={16}
                  max={48}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-16 accent-gray-900 cursor-pointer"
                />
                <span className="text-[10px] text-gray-400 w-6 tabular-nums text-right font-jetMono">
                  {size}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="text-[11px] text-gray-400 font-jetMono">
          {visible.length} result{visible.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Font grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((name) => (
          <FontCard
            key={name}
            name={name}
            text={text || "The quick brown fox"}
            size={size}
            onClick={() => navigate(`/fonts/${encodeURIComponent(name)}`)}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg font-poppins mb-2">No fonts found</p>
          <p className="text-gray-300 text-sm">Try a different search or filter</p>
        </div>
      )}
    </div>
  );
};

export default FontPage;