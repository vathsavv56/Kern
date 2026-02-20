import { FiGithub, FiMail } from "react-icons/fi";
import { FaGoogle, FaApple } from "react-icons/fa";

const Button3 = () => {
    return (
        <div className="w-full p-6 flex flex-col gap-3 max-w-xs">
            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#24292e] text-white text-sm font-medium rounded-lg hover:bg-[#1a1e22] transition-colors cursor-pointer">
                <FiGithub className="text-base" /> Continue with GitHub
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <FaGoogle className="text-base text-[#4285F4]" /> Continue with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors cursor-pointer">
                <FaApple className="text-base" /> Continue with Apple
            </button>
            <div className="flex items-center gap-3 my-1">
                <span className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <span className="flex-1 h-px bg-gray-200" />
            </div>
            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <FiMail className="text-base" /> Sign up with Email
            </button>
        </div>
    );
};

export default Button3;
