import { NavLink, Outlet, useNavigate } from "react-router"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";





const navLinks = [
  {
    to:"navbar1",
    name:"Navtype1"
  },
  {
    to:"navbar2",
    name:"Navtype2"
  },
  {
    to:"navbar3",
    name:"Navtype3"
  },
  {
    to:"navbar4",
    name:"Navtype4"
  },
  {
    to:"navbar5",
    name:"Navtype5"
  }
]


const NavMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-10 flex-col">
      <div className="h-60 max-w-5xl mx-auto p-10 flex flex-col justify-center gap-5 text-white  bg-gray-800 rounded-xl relative">
      <div id="text">
      <div id="go-back" className="mb-10">
          <button className="bg-white text-black rounded-xl cursor-pointer px-2 py-1 flex items-center hover:scale-110 absolute top-10 left-10 h-fit" onClick={() => navigate("/components")}> <IoIosArrowBack/> Go back</button> 
      </div>
        <h3 className="hover:underline hover:underline-offset-4 cursor-pointer text-xl">NavBars menu:</h3>
        <div id="links" className="flex flex-col gap-2 mt-2 justify-center  items-center sm:flex-row ">
          {navLinks.map((item,index)=>(
            <NavLink
            to={item.to}
            key={index}
            className="px-4 py-2 bg-blue-500 rounded-lg transition-all duration-300  w-fit hover:rounded-2xl "
            >
              <p className="flex items-center gap-2" >{item.name}  <IoIosArrowForward/></p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    <div id="preview">
      <Outlet/>
    </div>
    </div>
  )
}

export default NavMenu