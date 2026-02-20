import Pfp from "../../assets/kaiser-git.jpg";
import { FiHeart, FiShare2, FiMoreHorizontal } from "react-icons/fi";

const Card = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 flex flex-col gap-8">
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Basic Card
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200" />
          <div className="p-5">
            <h4 className="text-sm font-semibold text-gray-900">
              Getting Started
            </h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              A simple card layout for displaying grouped content with a header
              image area.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Profile Card
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden p-5 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
          <div className="size-12 rounded-full overflow-hidden ring-2 ring-gray-100 shrink-0">
            <img src={Pfp} alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900">John Doe</h4>
            <p className="text-xs text-gray-400">Product Designer</p>
          </div>
          <button className="text-xs font-medium bg-gray-900 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer shrink-0">
            Follow
          </button>
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Interactive Card
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-36 bg-gradient-to-br from-violet-100 to-blue-100 relative">
            <button className="absolute top-3 right-3 size-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 cursor-pointer transition-colors">
              <FiHeart className="text-sm" />
            </button>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-medium bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full">
                Design
              </span>
              <span className="text-[10px] text-gray-300">• 5 min read</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900">
              Modern UI Patterns
            </h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Explore the latest trends in interface design and component
              architecture.
            </p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full overflow-hidden">
                  <img src={Pfp} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] text-gray-500">John D.</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <button className="hover:text-gray-600 cursor-pointer transition-colors">
                  <FiShare2 className="text-sm" />
                </button>
                <button className="hover:text-gray-600 cursor-pointer transition-colors">
                  <FiMoreHorizontal className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;