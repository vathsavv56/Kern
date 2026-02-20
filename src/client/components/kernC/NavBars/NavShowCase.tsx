import { MdCopyAll } from "react-icons/md";
import { useState } from "react";
import Toast from "../Toast";

interface NavShowCaseProps {
  Component: React.ReactNode;
  para: string;
  heading: string;
  code: string;
  requirements: string;
  cliCommand?: string;
}

const NavShowCase = ({
  Component,
  para = "This is para test",
  heading = "This is test heading",
  code = "This is test code",
  requirements = "These are test requirements",
  cliCommand
}: NavShowCaseProps) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <div className="h-fit w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col gap-4 sm:gap-5 text-white bg-gray-800 rounded-xl relative overflow-hidden">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tighter hover:underline hover:underline-offset-4 duration-300 cursor-pointer">
          {heading}
        </h3>
        <p className="mb-2 sm:mb-3 tracking-tighter text-sm sm:text-base">{para}</p>
        <div className="mb-3">
          <h3 className="hover:underline hover:underline-offset-4 w-fit cursor-pointer text-sm sm:text-base">
            Requirements :
          </h3>
          <p className="text-sm sm:text-base">{requirements}</p>
        </div>
        <div className="overflow-x-auto rounded-lg">
          {Component}
        </div>

        {cliCommand && (
          <div className="mt-5 mb-2">
            <h3 className="hover:underline hover:underline-offset-4 w-fit cursor-pointer mb-2 text-sm sm:text-base">CLI Installation : </h3>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-lg w-full relative overflow-x-auto text-xs sm:text-sm border border-gray-700">
              <code>
                <MdCopyAll
                  className="absolute right-3 top-3 text-2xl p-1 hover:bg-gray-700 hover:text-white hover:rounded-full cursor-pointer transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(cliCommand);
                    setCopy(true);
                    setTimeout(() => setCopy(false), 3000);
                  }}
                />
                {cliCommand}
              </code>
            </pre>
          </div>
        )}

        <h3 className="hover:underline hover:underline-offset-4 w-fit cursor-pointer mt-4 mb-2 text-sm sm:text-base">Component Code : </h3>
        <pre className="bg-pink-200 text-black p-3 rounded-lg w-full relative overflow-x-auto text-xs sm:text-sm">
          <code>
            <MdCopyAll
              className="absolute right-3 top-3 text-2xl p-1 hover:bg-gray-50 hover:text-black hover:rounded-full cursor-pointer"
              onClick={handleCopy}
            />
            {code}
          </code>
        </pre>
      </div>
      <div className="fixed bottom-4 left-4 z-50">
        {copy && <Toast status={true} message="Copied succesfully" />}
      </div>
    </div>
  );
};

export default NavShowCase;
