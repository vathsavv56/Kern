const Button4 = () => {
    return (
        <div className="w-full p-6 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
                <button className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-md hover:bg-gray-700 transition-colors cursor-pointer">
                    Small
                </button>
                <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                    Medium
                </button>
                <button className="px-7 py-3 bg-gray-900 text-white text-base font-medium rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                    Large
                </button>
            </div>
            <button className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                Full Width
            </button>
        </div>
    );
};

export default Button4;
