import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./client/components/Main";
import DownloadPage from "./client/components/DownloadPage";
import ErrorPage404 from "./client/components/ErrorPage404";
import Preview from "./client/components/Preview";
import Docs from "./client/components/Docs";
import Hero from "./client/components/Hero";
import Logo from "./client/components/Logo";
import ComponentPage from "./client/components/ComponentPage";
import FontPage from "./client/components/FontPage";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: "download",
          element: <DownloadPage />,
        },
        {
          path: "preview",
          element: <Preview />,
        },
        {
          path: "docs",
          element: <Docs />,
        },
        {
          path: "logo",
          element: <Logo />,
        },
        {
          path: "components",
          element: <ComponentPage />,
        },
        {
          path: "fonts",
          element: <FontPage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage404 />,
    },
  ],
  {
    basename: "/Kern",
  },
);


const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
