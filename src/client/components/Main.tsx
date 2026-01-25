import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="min-h-screen w-full bg-[#F7F7F7] text-black font-jetMono scroll-smooth ">
      <Navbar />
      <div>
        <Outlet />
      </div>
        {/* <div className="fixed left-0 bottom-0 w-full bg-red-500 z-10">
          <footer>
            this is a footer
          </footer>
        </div> */}
    </div>
  );
};

export default Main;
