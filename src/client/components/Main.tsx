import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="min-h-screen w-full bg-[#F7F7F7] text-black font-jetMono scroll-smooth">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
