import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaIcons } from "react-icons/fa";

const Docs = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Hero header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-gray-900" />
          <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase font-jetMono">
            Documentation
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight mb-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
          Get Started
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto font-medium">
          Everything you need to start using Kern components in your project.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Getting Started — CLI */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase font-jetMono">
              Quick Start
            </span>
            <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-jetMono text-gray-500">
              Recommended
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900 tracking-tight mb-2">
            CLI Installation
          </h2>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">
            We provide a custom Shadcn registry. Install any component directly using a single command:
          </p>

          <CodeBlock
            code="npx shadcn@latest add https://kern-sigma.vercel.app/r/[component-name].json"
            copyKey="cli"
            copiedKey={copiedKey}
            onCopy={copyToClipboard}
          />

          <p className="text-xs text-gray-400 mt-3">
            Each component page has its exact CLI command ready to copy.
          </p>
        </div>

        {/* Manual Install */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
          <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block">
            Alternative
          </span>

          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900 tracking-tight mb-6">
            Manual Installation
          </h2>

          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 mb-2">Install dependencies</p>
                <CodeBlock
                  code="npm install tailwindcss react-icons lucide-react"
                  copyKey="deps"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 mb-1">Copy the component</p>
                <p className="text-sm text-gray-500">
                  Browse any component page, click the copy button on the code block, and paste it into your project.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 mb-2">Import and use</p>
                <CodeBlock
                  code={`import TextArea from "./components/TextArea";

function App() {
  return <TextArea />;
}`}
                  copyKey="usage"
                  copiedKey={copiedKey}
                  onCopy={copyToClipboard}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Two-column: Project Structure + Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Structure */}
          <div className="bg-gray-950 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />
            </div>
            <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase font-jetMono mb-4 block">
              Project Structure
            </span>
            <pre className="text-gray-400 text-xs sm:text-sm font-jetMono leading-relaxed overflow-x-auto">
              <code>{`src/
├── components/
│   ├── kernC/
│   │   ├── Buttons/
│   │   │   ├── Button1.tsx
│   │   │   ├── Button2.tsx
│   │   │   └── ...
│   │   ├── NavBars/
│   │   │   ├── NavBar1.tsx
│   │   │   ├── NavBar2.tsx
│   │   │   └── ...
│   │   ├── TextArea.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Avatar.tsx
│   │   ├── Spinner.tsx
│   │   └── Card.tsx`}</code>
            </pre>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block">
              Requirements
            </span>
            <div className="flex flex-col gap-3">
              {[
                { name: "React", version: "19+", desc: "UI framework", icon: FaReact, color: "text-blue-500" },
                { name: "Tailwind CSS", version: "4+", desc: "Utility-first CSS", icon: RiTailwindCssFill, color: "text-teal-500" },
                { name: "react-icons", version: "5+", desc: "Icon library", icon: FaIcons, color: "text-purple-500" },
                { name: "TypeScript", version: "5+", desc: "Type safety", icon: SiTypescript, color: "text-blue-600" },
              ].map((dep) => (
                <div
                  key={dep.name}
                  className="group flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <dep.icon className={`text-lg ${dep.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {dep.name}{" "}
                      <span className="text-xs text-gray-400 font-normal font-jetMono">
                        v{dep.version}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">{dep.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
          <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase font-jetMono mb-6 block">
            Tips
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900 tracking-tight mb-6">
            Good to Know
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Self-contained", desc: "Each component is a single file — copy and it works." },
              { title: "Tailwind CSS", desc: "All styling uses utility classes with no custom CSS needed." },
              { title: "Responsive", desc: "Components adapt to all screen sizes out of the box." },
              { title: "Pure CSS animations", desc: "Hover effects and transitions use CSS only — zero JS overhead." },
              { title: "Swappable icons", desc: "Icons come from react-icons — swap with any icon set you prefer." },
              { title: "TypeScript ready", desc: "All components ship with full type definitions." },
            ].map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-6 h-6 shrink-0 rounded-lg bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{tip.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Reusable code block with copy button */
function CodeBlock({
  code, copyKey, copiedKey, onCopy,
}: {
  code: string; copyKey: string; copiedKey: string | null; onCopy: (key: string, text: string) => void;
}) {
  const isCopied = copiedKey === copyKey;
  return (
    <div className="relative group">
      <pre className="bg-gray-950 text-gray-300 text-xs sm:text-sm p-4 rounded-2xl overflow-x-auto font-jetMono leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => onCopy(copyKey, code)}
        className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${isCopied
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : "bg-gray-800 text-gray-500 border border-gray-700 opacity-0 group-hover:opacity-100 hover:text-gray-300"
          }`}
      >
        {isCopied ? (
          <>
            <MdCheck className="text-xs" /> Copied!
          </>
        ) : (
          <>
            <MdContentCopy className="text-xs" /> Copy
          </>
        )}
      </button>
    </div>
  );
}

export default Docs;