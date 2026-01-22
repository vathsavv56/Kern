import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="min-h-screen w-full bg-[#F7F7F7] text-black font-jetMono scroll-smooth">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div className="max-w-5xl mx-auto h-10 bg-gray-400 rounded-xl mt-5 p-4">
        <footer>
          this is footer
        </footer>
      </div>
    </div>
  );
};

export default Main;
