import { useState, useEffect, useRef } from "react";
import { HiSearch } from "react-icons/hi";

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

function FontCard({ name, text, size }: { name: string; text: string; size: number }) {
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

  return (
    <div ref={ref} className="py-6 border-b border-gray-100 last:border-0">
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-[11px] font-medium text-gray-900">{name}</p>
        <span className="text-[10px] text-gray-300 capitalize">{tags[name]}</span>
      </div>
      <p
        className="text-gray-800 leading-relaxed transition-opacity duration-500 truncate"
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

  const visible = fonts.filter((f) => {
    if (filter !== "all" && tags[f] !== filter) return false;
    if (search && !f.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        Fonts
      </h1>
      <p className="text-gray-400 text-sm mt-1 mb-8">
        {fonts.length} typefaces · lazy loaded
      </p>

      <div className="sticky top-0 z-20 pt-2 pb-4">
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 border border-gray-100">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type to preview..."
            rows={2}
            className="w-full px-0 py-0 text-lg sm:text-xl text-gray-900 bg-transparent border-none outline-none resize-none placeholder:text-gray-300 leading-relaxed"
          />

          <div className="flex items-center justify-between gap-3 flex-wrap border-t border-gray-200 pt-3">
            <div className="flex gap-1 flex-wrap">
              {Object.entries(filterLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${filter === key
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <HiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 text-[10px]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="pl-6 pr-2 py-1 text-[11px] text-gray-700 bg-white border border-gray-200 rounded-md outline-none focus:border-gray-400 transition-all placeholder:text-gray-300 w-24"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-gray-400">Aa</span>
                <input
                  type="range"
                  min={16}
                  max={48}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-14 accent-gray-900"
                />
                <span className="text-[10px] text-gray-400 w-7 tabular-nums">
                  {size}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-300 mb-1">
        {visible.length} result{visible.length !== 1 ? "s" : ""}
      </p>

      <div className="flex flex-col">
        {visible.map((name) => (
          <FontCard key={name} name={name} text={text || "The quick brown fox"} size={size} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-gray-300 text-sm py-20">
          No fonts found.
        </p>
      )}
    </div>
  );
};

export default FontPage;