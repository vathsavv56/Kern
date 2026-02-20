import { useState } from "react";

const TextArea = () => {
  const [value, setValue] = useState("");
  const maxLength = 500;

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        Message
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          rows={5}
          placeholder="Write something..."
          className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-xl resize-none outline-none transition-all duration-200 focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 placeholder:text-gray-300"
        />
      </div>
      <div className="flex items-center justify-between mt-2 px-1">
        <p className="text-xs text-gray-400">
          {value.length > 0 ? `${value.length} / ${maxLength}` : "No character limit concerns"}
        </p>
        <button
          className={`text-xs font-medium px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${value.length > 0
              ? "bg-gray-900 text-white hover:bg-gray-700"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          disabled={value.length === 0}
          onClick={() => setValue("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TextArea;
