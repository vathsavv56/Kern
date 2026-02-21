import { useState } from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import LogoDark from '../assets/logo-dark.svg';
import LogoLight from '../assets/logo.svg';

type ThemeKey = 'flow' | 'blaze' | 'toxic' | 'noir';

interface Theme {
  id: string;
  from: string;
  to: string;
  label: string;
  blob1: string;
  blob2: string;
  selection: string;
}

type Themes = Record<ThemeKey, Theme>;

const brandColors = [
  { name: "Primary Black", hex: "#000000", text: "text-white", bg: "bg-black" },
  { name: "Dark Gray", hex: "#1a1a1a", text: "text-white", bg: "bg-[#1a1a1a]" },
  { name: "Surface", hex: "#F7F7F7", text: "text-gray-900", bg: "bg-[#F7F7F7]" },
  { name: "White", hex: "#FFFFFF", text: "text-gray-900", bg: "bg-white" },
  { name: "Flow Blue", hex: "#2563eb", text: "text-white", bg: "bg-[#2563eb]" },
  { name: "Flow Violet", hex: "#7c3aed", text: "text-white", bg: "bg-[#7c3aed]" },
  { name: "Blaze Amber", hex: "#f59e0b", text: "text-white", bg: "bg-[#f59e0b]" },
  { name: "Blaze Rose", hex: "#e11d48", text: "text-white", bg: "bg-[#e11d48]" },
  { name: "Accent Orange", hex: "#F97316", text: "text-white", bg: "bg-[#F97316]" },
  { name: "Toxic Lime", hex: "#84cc16", text: "text-white", bg: "bg-[#84cc16]" },
];

const Logo = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('flow');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const themes: Themes = {
    flow: {
      id: 'flow', from: '#2563eb', to: '#7c3aed', label: 'Flow State',
      blob1: 'bg-blue-200/50', blob2: 'bg-violet-200/50', selection: 'selection:bg-blue-600'
    },
    blaze: {
      id: 'blaze', from: '#f59e0b', to: '#e11d48', label: 'Solar Flare',
      blob1: 'bg-orange-200/50', blob2: 'bg-rose-200/50', selection: 'selection:bg-orange-600'
    },
    toxic: {
      id: 'toxic', from: '#84cc16', to: '#10b981', label: 'Acid Rain',
      blob1: 'bg-lime-200/50', blob2: 'bg-emerald-200/50', selection: 'selection:bg-lime-600'
    },
    noir: {
      id: 'noir', from: '#475569', to: '#0f172a', label: 'Obsidian',
      blob1: 'bg-gray-200/50', blob2: 'bg-slate-300/50', selection: 'selection:bg-slate-800'
    }
  };

  const current = themes[activeTheme];

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* ═══════════ Interactive Logo Section ═══════════ */}
      <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans ${current.selection} selection:text-white flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors duration-700 snap-center`}>

        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] ${current.blob1} blur-[120px] rounded-full mix-blend-multiply opacity-70 transition-all duration-1000`} />
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${current.blob2} blur-[120px] rounded-full mix-blend-multiply opacity-70 transition-all duration-1000`} />
        </div>

        {/* SVG Logo */}
        <div className="relative z-10 w-full max-w-5xl aspect-video flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
            <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl transition-all duration-700" style={{ filter: `drop-shadow(0 20px 30px ${current.from}20)` }}>
              <defs>
                <linearGradient id="dynamicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={current.from} className="transition-all duration-700" />
                  <stop offset="100%" stopColor={current.to} className="transition-all duration-700" />
                </linearGradient>
              </defs>
              <path d="M30 30 L30 70 L50 50 L60 70" stroke="url(#dynamicGrad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500" />
              <path d="M60 70 C 70 70, 70 50, 80 50 H 95 C 105 50, 105 70, 95 70 H 80" stroke="url(#dynamicGrad)" strokeWidth="8" fill="none" strokeLinecap="round" className="transition-all duration-500" />
              <path d="M115 70 V 50 C 115 40, 135 40, 135 50" stroke="url(#dynamicGrad)" strokeWidth="8" fill="none" strokeLinecap="round" className="transition-all duration-500" />
              <path d="M150 70 V 50 C 150 40, 170 40, 170 50 V 70" stroke="url(#dynamicGrad)" strokeWidth="8" fill="none" strokeLinecap="round" className="transition-all duration-500" />
              <circle cx="60" cy="70" r="1.5" fill="#000" opacity="0.2" />
              <circle cx="115" cy="50" r="1.5" fill="#000" opacity="0.2" />
              <line x1="25" y1="78" x2="175" y2="78" stroke="black" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />
              <line x1="25" y1="22" x2="175" y2="22" stroke="black" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Theme switcher */}
        <div className="absolute bottom-12 flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-lg z-20">
          {(Object.keys(themes) as ThemeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTheme(key)}
              className={`w-6 h-6 rounded-full transition-all duration-300 relative group ${activeTheme === key ? 'scale-125 ring-2 ring-offset-2 ring-slate-300' : 'hover:scale-110'} hover:cursor-pointer`}
              style={{ background: `linear-gradient(135deg, ${themes[key].from}, ${themes[key].to})` }}
              aria-label={themes[key].label}
            >
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono uppercase tracking-wider">
                {themes[key].label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════ Brand Guidelines ═══════════ */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase font-jetMono">
              Brand Kit
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-tight mb-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
            Brand Guidelines
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Assets, colors, and typography for consistent use of the Kern brand.
          </p>
        </div>

        {/* Logo Variants */}
        <section className="mb-12">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
            Logo Variants
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col items-center gap-5">
              <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500">
                Light Background
              </span>
              <img src={LogoDark} alt="Kern logo dark" className="h-16 w-auto" />
              <p className="text-xs text-gray-400 text-center">
                Primary mark — use on light or white backgrounds.
              </p>
            </div>
            <div className="bg-gray-950 rounded-3xl shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col items-center gap-5">
              <span className="px-2.5 py-1 rounded-md bg-gray-800 border border-gray-700 text-[10px] font-jetMono text-gray-400">
                Dark Background
              </span>
              <img src={LogoLight} alt="Kern logo light" className="h-16 w-auto" />
              <p className="text-xs text-gray-500 text-center">
                Inverted mark — use on dark or colored backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Logo Construction */}
        <section className="mb-12">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
            Construction
          </span>
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-lg font-bold text-gray-900">K</div>
                <p className="text-sm font-semibold text-gray-900">Wordmark</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Custom lettering with rounded strokes. The K features a unique diagonal arm connecting to E.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-jetMono text-gray-500">8px</div>
                <p className="text-sm font-semibold text-gray-900">Stroke Weight</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Consistent 8px stroke width with round line caps and joins throughout all characters.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <div className="w-5 h-3 rounded-sm" style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed)' }} />
                </div>
                <p className="text-sm font-semibold text-gray-900">Gradients</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The logo supports 4 gradient themes: Flow, Solar Flare, Acid Rain, and Obsidian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
            Color Palette
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {brandColors.map((color) => {
              const isCopied = copiedColor === color.hex;
              return (
                <button
                  key={color.hex + color.name}
                  onClick={() => copyHex(color.hex)}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer text-left"
                >
                  <div className={`h-16 ${color.bg} flex items-center justify-center border-b border-gray-100`}>
                    {isCopied && (
                      <span className={`text-[10px] font-semibold ${color.text} flex items-center gap-1`}>
                        <MdCheck className="text-xs" /> Copied!
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] font-semibold text-gray-900 truncate">{color.name}</p>
                    <p className="text-[10px] text-gray-400 font-jetMono">{color.hex}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
            Typography
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500 mb-4 inline-block">
                Headings
              </span>
              <p className="text-3xl font-bold font-poppins text-gray-900 mb-2">Poppins</p>
              <p className="text-xs text-gray-400">
                Bold, 600–700 weight. Used for all headings and the hero section.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500 mb-4 inline-block">
                Code & Labels
              </span>
              <p className="text-3xl font-bold font-jetMono text-gray-900 mb-2">JetBrains Mono</p>
              <p className="text-xs text-gray-400">
                Regular, 400 weight. Used for code blocks, badges, and small labels.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500 mb-4 inline-block">
                Display
              </span>
              <p className="text-3xl font-bold font-lime text-gray-900 mb-2">Limelight</p>
              <p className="text-xs text-gray-400">
                Decorative, used sparingly for artistic or display-level emphasis.
              </p>
            </div>
          </div>
        </section>

        {/* Usage Do's and Don'ts */}
        <section className="mb-12">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
            Usage Guidelines
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Do */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                <span className="text-sm font-semibold text-gray-900">Do</span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Use the logo on clean, uncluttered backgrounds",
                  "Maintain minimum clear space around the logo",
                  "Use approved gradient themes or solid black/white",
                  "Scale proportionally — never stretch or distort",
                  "Use the inverted logo on dark backgrounds",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                    <span className="text-green-500 mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Don't */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-500 text-sm font-bold">✕</div>
                <span className="text-sm font-semibold text-gray-900">Don't</span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Don't place the logo on busy or patterned backgrounds",
                  "Don't change the stroke weight or letter spacing",
                  "Don't use unapproved colors or random gradients",
                  "Don't rotate, skew, or apply effects to the logo",
                  "Don't add a drop shadow or outline to the mark",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                    <span className="text-red-400 mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Spacing & Safe Zone */}
        <section>
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block px-1">
            Clear Space
          </span>
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-10">
            <div className="flex items-center justify-center">
              <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-10 sm:p-16">
                <img src={LogoDark} alt="Kern logo with safe zone" className="h-12 sm:h-16 w-auto relative z-10" />
                {/* Corner marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-300 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-300 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-300 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-300 rounded-br-sm" />
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">
              Always maintain a minimum clear space equal to the height of the letter "e" in the wordmark on all sides.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Logo;