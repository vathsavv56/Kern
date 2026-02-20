import { createBrowserRouter, RouterProvider } from "react-router";
import TextArea from "../../components/kernC/TextArea"
import Buttons from "../../components/kernC/Buttons"
import SearchBar from "../../components/kernC/SearchBar"
import Avatar from "../../components/kernC/Avatar"
import Spinner from "../../components/kernC/Spinner"
import NavBars from "../../components/kernC/NavBars"
import Card from "../../components/kernC/Card"

const router = createBrowserRouter([
    {
        path: "/components",
        children: [
            {
                path: "textarea",
                element: <TextArea />
            },
            {
                path: "buttons",
                element: <Buttons />
            },
            {
                path: "searchbar",
                element: <SearchBar />
            },
            {
                path: "avatar",
                element: <Avatar />
            },
            {
                path: "spinner",
                element: <Spinner />
            },
            {
                path: "navbars",
                element: <NavBars />
            },
            {
                path: "card",
                element: <Card />
            }


        ]
    }
])

const MenuRouter = () => {
    return (
        <div>
            <RouterProvider router={router} />

        </div>
    )
}

export default MenuRouter