import type { IconType } from "react-icons";

interface FeatureProps {
  heading: string;
  text: string;
  icon: IconType;
}

const Feature = ({ heading, text, icon: Icon }: FeatureProps) => {
  return (
    <div
      className="group relative h-full w-full rounded-2xl 
  bg-white border border-gray-100
  p-8 shadow-sm transition-all duration-300 
  hover:-translate-y-1 hover:shadow-md cursor-pointer"
    >
      <div className="flex flex-col gap-5">
        <div
          className="flex h-14 w-14 items-center justify-center 
      rounded-2xl bg-gray-900 text-white 
      transition-transform duration-300 group-hover:scale-105"
        >
          <Icon className="text-2xl" />
        </div>

        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {heading}
        </h5>

        <p className="text-base leading-relaxed text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
