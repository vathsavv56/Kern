const Button1 = () => {
    return (
        <div className="w-full p-6 flex flex-wrap items-center gap-3">
            <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                Primary
            </button>
            <button className="px-5 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                Secondary
            </button>
            <button className="px-5 py-2 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Ghost
            </button>
            <button className="px-5 py-2 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                Danger
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed" disabled>
                Disabled
            </button>
        </div>
    );
};

export default Button1;
