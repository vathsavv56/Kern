import { useState } from 'react';

type ThemeKey = 'flow' | 'blaze' | 'toxic' | 'noir';

interface Theme {
  id: string;
  from: string;
  to: string;
  label: string;
  accent: string;
  blob1: string;
  blob2: string;
  selection: string;
}

type Themes = Record<ThemeKey, Theme>;

const Logo = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('flow');

  const themes: Themes = {
    flow: { 
      id: 'flow',
      from: '#2563eb', 
      to: '#7c3aed', 
      label: 'Flow State',
      accent: 'text-blue-600',
      blob1: 'bg-blue-200/50',
      blob2: 'bg-violet-200/50',
      selection: 'selection:bg-blue-600'
    },
    blaze: { 
      id: 'blaze',
      from: '#f59e0b', 
      to: '#e11d48', 
      label: 'Solar Flare',
      accent: 'text-orange-600',
      blob1: 'bg-orange-200/50',
      blob2: 'bg-rose-200/50',
      selection: 'selection:bg-orange-600'
    },
    toxic: { 
      id: 'toxic',
      from: '#84cc16', 
      to: '#10b981', 
      label: 'Acid Rain',
      accent: 'text-lime-600',
      blob1: 'bg-lime-200/50',
      blob2: 'bg-emerald-200/50',
      selection: 'selection:bg-lime-600'
    },
    noir: { 
      id: 'noir',
      from: '#475569', 
      to: '#0f172a', 
      label: 'Obsidian',
      accent: 'text-slate-800',
      blob1: 'bg-gray-200/50',
      blob2: 'bg-slate-300/50',
      selection: 'selection:bg-slate-800'
    }
  };

  const current = themes[activeTheme];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans ${current.selection} selection:text-white flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors duration-700`}>
      
      {/* Dynamic Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] ${current.blob1} blur-[120px] rounded-full mix-blend-multiply opacity-70 transition-all duration-1000`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${current.blob2} blur-[120px] rounded-full mix-blend-multiply opacity-70 transition-all duration-1000`}></div>
      </div>



      {/* Main Stage */}
      <div className="relative z-10 w-full max-w-5xl aspect-video flex items-center justify-center">
        
        <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
            <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl transition-all duration-700" style={{ filter: `drop-shadow(0 20px 30px ${current.from}20)` }}>
              <defs>
                 <linearGradient id="dynamicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={current.from} className="transition-all duration-700" /> 
                  <stop offset="100%" stopColor={current.to} className="transition-all duration-700" />
                </linearGradient>
              </defs>
              
              {/* K */}
              <path 
                d="M30 30 L30 70 L50 50 L60 70" 
                stroke="url(#dynamicGrad)" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-all duration-500"
              />
              
              {/* E */}
              <path 
                d="M60 70 C 70 70, 70 50, 80 50 H 95 C 105 50, 105 70, 95 70 H 80"
                stroke="url(#dynamicGrad)" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round"
                className="transition-all duration-500"
              />

              {/* R */}
              <path 
                d="M115 70 V 50 C 115 40, 135 40, 135 50"
                stroke="url(#dynamicGrad)" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round"
                className="transition-all duration-500"
              />

              {/* N */}
              <path 
                d="M150 70 V 50 C 150 40, 170 40, 170 50 V 70" 
                stroke="url(#dynamicGrad)" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round"
                className="transition-all duration-500"
              />
              
              {/* Technical Guides */}
              <circle cx="60" cy="70" r="1.5" fill="#000" opacity="0.2" />
              <circle cx="115" cy="50" r="1.5" fill="#000" opacity="0.2" />
              
              <line x1="25" y1="78" x2="175" y2="78" stroke="black" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />
              <line x1="25" y1="22" x2="175" y2="22" stroke="black" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />

            </svg>
        </div>

      </div>

      {/* Palette Switcher */}
      <div className="absolute bottom-12 flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-lg z-20">
        {(Object.keys(themes) as ThemeKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTheme(key)}
            className={`w-6 h-6 rounded-full transition-all duration-300 relative group ${activeTheme === key ? 'scale-125 ring-2 ring-offset-2 ring-slate-300' : 'hover:scale-110'}`}
            style={{ background: `linear-gradient(135deg, ${themes[key].from}, ${themes[key].to})` }}
            aria-label={themes[key].label}
          >
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono uppercase tracking-wider">
              {themes[key].label}
            </span>
          </button>
        ))}
      </div>

      <footer className="absolute bottom-4 text-center text-slate-400 text-[10px] font-mono uppercase tracking-wider">
        <p>SYS_ID: KERN_FINAL // {current.label.replace(' ', '_').toUpperCase()}</p>
      </footer>
    </div>
  );
};

export default Logo;