import { MdCopyAll } from "react-icons/md";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
interface ItemShowCaseProps {
  Component: React.ReactNode;
  para: string;
  heading: string;
  code: string;
  requirements: string;
}

const ItemShowCase = ({
  Component,
  para = "None",
  heading = "No heading",
  code = "No Code",
  requirements = "this is requirements",
}: ItemShowCaseProps) => {

    const navigate = useNavigate();

  return (
    <div className="h-fit max-w-5xl mx-auto p-10 flex flex-col gap-5 text-white  bg-gray-800 rounded-xl relative">
        <div id="back" >
            <button className="flex items-center gap-2 hover:bg-gray-50 w-fit cursor-pointer hover:text-black rounded-2xl p-2 transition-all duration-300 hover:scale-110"
            onClick={() => navigate("/components")}
            ><IoIosArrowBack/> Go Back</button>
        </div>
      <div id="aboutComponent" >
        <h3 className="text-2xl font-bold mb-3 tracking-tighter hover:underline hover:underline-offset-4 duration-300 cursor-pointer">
          {heading}
        </h3>
        <div className="w-full">
          <p className="mb-3 tracking-tighter ">{para}</p>
        </div>
        <div className="w-full">
            <h3 className="hover:underline hover:underline-offset-4 w-fit cursor-pointer">Requirements : </h3>
          <p>{requirements}</p>
        </div>
        <div id="showComponent" className="border border-orange-500 m-5">
          {Component}
        </div>

        <pre className="bg-pink-200 text-black p-3  rounded-lg w-full relative">
          <code>
            <MdCopyAll className="absolute right-7 hover:border text-2xl p-1 hover:border-red-500 hover:rounded-full cursor-pointer" />
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ItemShowCase;
