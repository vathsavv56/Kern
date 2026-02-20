import Pfp from "../../assets/kaiser-git.jpg";

const sizes = [
  { label: "SM", size: "size-8", text: "text-xs" },
  { label: "MD", size: "size-11", text: "text-sm" },
  { label: "LG", size: "size-14", text: "text-base" },
  { label: "XL", size: "size-20", text: "text-lg" },
];

const Avatar = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 flex flex-col gap-8">
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          With Image
        </p>
        <div className="flex items-end gap-4 flex-wrap">
          {sizes.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <div
                className={`${s.size} rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-gray-400 transition-all duration-200 cursor-pointer`}
              >
                <img
                  src={Pfp}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] text-gray-300 font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          With Initials
        </p>
        <div className="flex items-end gap-4 flex-wrap">
          {sizes.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <div
                className={`${s.size} rounded-full bg-gray-900 flex items-center justify-center ring-2 ring-gray-200 hover:ring-gray-400 transition-all duration-200 cursor-pointer`}
              >
                <span className={`${s.text} font-semibold text-white`}>
                  JD
                </span>
              </div>
              <span className="text-[10px] text-gray-300 font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          With Status
        </p>
        <div className="flex items-end gap-4 flex-wrap">
          {[
            { color: "bg-emerald-400", status: "Online" },
            { color: "bg-amber-400", status: "Away" },
            { color: "bg-gray-300", status: "Offline" },
            { color: "bg-red-400", status: "Busy" },
          ].map((s) => (
            <div
              key={s.status}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="relative">
                <div className="size-11 rounded-full overflow-hidden ring-2 ring-gray-200 cursor-pointer">
                  <img
                    src={Pfp}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className={`absolute bottom-0 right-0 size-3 ${s.color} rounded-full ring-2 ring-white`}
                />
              </div>
              <span className="text-[10px] text-gray-300 font-medium">
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatar;