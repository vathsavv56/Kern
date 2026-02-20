import { FiPlus, FiDownload, FiTrash2, FiSend } from "react-icons/fi";

const Button2 = () => {
    return (
        <div className="w-full p-6 flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <FiPlus className="text-sm" /> Create
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <FiDownload className="text-sm" /> Download
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                <FiTrash2 className="text-sm" /> Delete
            </button>
            <button className="size-9 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <FiSend className="text-sm" />
            </button>
        </div>
    );
};

export default Button2;
