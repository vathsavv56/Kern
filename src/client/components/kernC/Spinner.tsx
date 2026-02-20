const spinners = [
  {
    label: "Ring",
    element: (
      <div className="size-8 rounded-full border-2 border-gray-200 border-t-gray-900 animate-spin" />
    ),
  },
  {
    label: "Dot",
    element: (
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="size-2 rounded-full bg-gray-900 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    ),
  },
  {
    label: "Pulse",
    element: (
      <div className="size-8 rounded-full bg-gray-900 animate-pulse" />
    ),
  },
  {
    label: "Dual Ring",
    element: (
      <div className="size-8 rounded-full border-2 border-gray-300 border-t-gray-900 border-b-gray-900 animate-spin" />
    ),
  },
];

const sizes = [
  { label: "SM", cls: "size-5 border-[1.5px]" },
  { label: "MD", cls: "size-8 border-2" },
  { label: "LG", cls: "size-12 border-[3px]" },
];

const Spinner = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 flex flex-col gap-8">
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-5">
          Variants
        </p>
        <div className="flex items-center gap-8 flex-wrap">
          {spinners.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div className="h-10 flex items-center justify-center">
                {s.element}
              </div>
              <span className="text-[10px] text-gray-300 font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-5">
          Sizes
        </p>
        <div className="flex items-end gap-6 flex-wrap">
          {sizes.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div
                className={`${s.cls} rounded-full border-gray-200 border-t-gray-900 animate-spin`}
              />
              <span className="text-[10px] text-gray-300 font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-5">
          Colors
        </p>
        <div className="flex items-center gap-6 flex-wrap">
          {[
            { color: "border-t-blue-500", label: "Blue" },
            { color: "border-t-emerald-500", label: "Green" },
            { color: "border-t-amber-500", label: "Amber" },
            { color: "border-t-red-500", label: "Red" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-2">
              <div
                className={`size-8 rounded-full border-2 border-gray-200 ${c.color} animate-spin`}
              />
              <span className="text-[10px] text-gray-300 font-medium">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spinner;