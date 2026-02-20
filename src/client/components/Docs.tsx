const Docs = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">
        Documentation
      </h1>
      <p className="text-gray-400 text-sm mb-10">
        Everything you need to get started with Kern components.
      </p>

      <div className="flex flex-col gap-10">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Getting Started
          </h2>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                1. Install the required dependencies in your React project:
              </p>
              <pre className="bg-gray-900 text-green-400 text-xs sm:text-sm p-3 rounded-lg overflow-x-auto">
                <code>npm install tailwindcss react-icons lucide-react</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                2. Copy the component code from any component page and paste it
                into your project.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                3. Import and use the component in your app:
              </p>
              <pre className="bg-gray-900 text-green-400 text-xs sm:text-sm p-3 rounded-lg overflow-x-auto">
                <code>{`import TextArea from "./components/TextArea";

function App() {
  return <TextArea />;
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Project Structure
          </h2>
          <pre className="bg-gray-50 text-gray-700 text-xs sm:text-sm p-4 sm:p-6 rounded-xl overflow-x-auto leading-relaxed">
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
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Requirements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "React", version: "19+", desc: "UI framework" },
              { name: "Tailwind CSS", version: "4+", desc: "Utility-first CSS" },
              { name: "react-icons", version: "5+", desc: "Icon library" },
              { name: "TypeScript", version: "5+", desc: "Type safety" },
            ].map((dep) => (
              <div
                key={dep.name}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
              >
                <div className="size-9 shrink-0 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                  {dep.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {dep.name}{" "}
                    <span className="text-xs text-gray-400 font-normal">
                      v{dep.version}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400">{dep.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Usage Tips
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Each component is self-contained — copy the file and it works.",
              "All components use Tailwind CSS utility classes for styling.",
              "Components are responsive by default and work on all screen sizes.",
              "Hover effects and animations use pure CSS transitions — no JS overhead.",
              "Icons come from react-icons — swap them with any icon set you prefer.",
            ].map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="text-gray-300 mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Docs;