import { createBrowserRouter , RouterProvider } from "react-router";
// import Menu from "./Menu";
import TextArea from "../../components/kernC/TextArea"
import Buttons from "../../components/kernC/Buttons"
import SearchBar from "../../components/kernC/SearchBar"
import Avatar from "../../components/kernC/Avatar"
import Spinner from "../../components/kernC/Spinner"
import NavBars from "../../components/kernC/NavBars"
import Card from "../../components/kernC/Card"
/**
 * Router configuration for component demonstration pages.
 * 
 * Defines routes under the `/components` path for showcasing individual UI components
 * including TextArea, Buttons, SearchBar, Avatar, Spinner, NavBars, and Card components.
 * 
 * @remarks
 * This router appears to be redundant as the same routes are already defined in App.tsx.
 * Consider removing MenuRouter.tsx and using the centralized router in App.tsx instead
 * to avoid duplicate route definitions and potential routing conflicts.
 * 
 * @see {@link App.tsx} for the main application router that already includes these routes
 */
const router = createBrowserRouter([
    {
        path:"/components",
        children:[
            {
                path:"textarea",
                element:<TextArea/>
            },
            {
                path:"buttons",
                element:<Buttons/>
            },
            {
                path:"searchbar",
                element:<SearchBar/>
            },
            {
                path:"avatar",
                element:<Avatar/>
            },
            {
                path:"spinner",
                element:<Spinner/>
            },
            {
                path:"navbars",
                element:<NavBars/>
            },
            {
                path:"card",
                element:<Card/>
            }


        ]
    }
])

const MenuRouter = () => {
  return (
    <div>
        <RouterProvider router={router}/>
            
    </div>
  )
}

export default MenuRouter