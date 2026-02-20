import { useState } from "react";
import { FiCheck, FiLoader } from "react-icons/fi";

const Button5 = () => {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setDone(false);
        setTimeout(() => {
            setLoading(false);
            setDone(true);
            setTimeout(() => setDone(false), 2000);
        }, 1500);
    };

    return (
        <div className="w-full p-6 flex flex-wrap items-center gap-3">
            <button
                onClick={handleClick}
                disabled={loading}
                className={`flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${done
                        ? "bg-emerald-500 text-white"
                        : loading
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}
            >
                {done ? (
                    <>
                        <FiCheck className="text-sm" /> Done
                    </>
                ) : loading ? (
                    <>
                        <FiLoader className="text-sm animate-spin" /> Loading...
                    </>
                ) : (
                    "Submit"
                )}
            </button>

            <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                Scale Effect
            </button>

            <button className="relative px-5 py-2 text-sm font-medium text-gray-900 overflow-hidden group cursor-pointer">
                <span className="relative z-10">Hover Fill</span>
                <span className="absolute inset-0 bg-gray-900 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hover Fill
                </span>
            </button>
        </div>
    );
};

export default Button5;
