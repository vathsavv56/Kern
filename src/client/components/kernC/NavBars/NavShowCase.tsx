import { MdCopyAll } from "react-icons/md";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Toast from "../Toast";


interface NavShowCaseProps {
  Component: React.ReactNode;
  para: string;
  heading: string;
  code: string;
  requirements: string;
}


const NavShowCase = ({Component , para="This is para test" , heading="This is test heading" , code="THis is test code" , requirements="These are test requirements"}:NavShowCaseProps) => {

  const [copy, setCopy] = useState(false);

  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className="h-fit min-w-5xl mx-auto p-10 flex flex-col gap-5 text-white  bg-gray-800 rounded-xl relative">
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
            <MdCopyAll className="absolute right-7  text-2xl p-1 hover:bg-gray-50 hover:text-black hover:rounded-full cursor-pointer" onClick={handleCopy} />
            {code}
          </code>
        </pre>
      </div>
      <div id="alert" className="absolute top-10 left-10">
        {copy && <Toast status={true} message="Copied succesfully" />}
      </div>
    </div>
  );
};

export default NavShowCase

