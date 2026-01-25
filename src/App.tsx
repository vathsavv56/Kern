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
import TextArea from "./client/components/kernC/TextArea";
import TextAreaCode from "./client/components/kernC/TextArea.tsx?raw"
import Buttons from "./client/components/kernC/Buttons";
import ButtonCode from "./client/components/kernC/Buttons.tsx?raw"
import SearchBar from "./client/components/kernC/SearchBar";
import SearchBarCode from "./client/components/kernC/SearchBar.tsx?raw"
import Avatar from "./client/components/kernC/Avatar";
import AvatarCode from "./client/components/kernC/Avatar.tsx?raw"
import Spinner from "./client/components/kernC/Spinner";
import SpinnerCode from "./client/components/kernC/Spinner.tsx?raw"
// import NavBars from "./client/components/kernC/NavBars";
// import NavBarsCode from "./client/components/kernC/NavBars.tsx?raw"
import Card from "./client/components/kernC/Card";
import CardCode from "./client/components/kernC/Card.tsx?raw"
import ItemShowCase from "./client/components/kernC/ItemShowCase";
import NavShowCase from "./client/components/kernC/NavBars/NavShowCase";
import ButtonShowCase from "./client/components/kernC/Buttons/ButtonShowCase";
import NavMenu from "./client/components/kernC/NavBars/NavMenu";

// Navbar Components
import NavBar1 from "./client/components/kernC/NavBars/NavBar1";
import NavBar2 from "./client/components/kernC/NavBars/NavBar2";
import NavBar3 from "./client/components/kernC/NavBars/NavBar3";
import NavBar4 from "./client/components/kernC/NavBars/NavBar4";
import NavBar5 from "./client/components/kernC/NavBars/NavBar5";

// Navbar Code Imports (Added to support the showcase)
import NavBar1Code from "./client/components/kernC/NavBars/NavBar1.tsx?raw";
import NavBar2Code from "./client/components/kernC/NavBars/NavBar2.tsx?raw";
import NavBar3Code from "./client/components/kernC/NavBars/NavBar3.tsx?raw";
import NavBar4Code from "./client/components/kernC/NavBars/NavBar4.tsx?raw";
import NavBar5Code from "./client/components/kernC/NavBars/NavBar5.tsx?raw";

/**
 * Describes the nested routing for the `/components` path.
 */
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
          path: "components/textarea",
          element: <ItemShowCase
            Component={<TextArea />}
            para="This is a text area component that can be used for displaying text this is responsive and has good typography. This can be used for articles and any other places where u need text"
            heading="Text Area Component :"
            requirements="Fonts needed are JetBrains Mono (By jetbrains ),tailwind Css for styling "
            code={TextAreaCode.trim()}
          />,
        },
        {
          path: "components/buttons",
          element: <ButtonShowCase
            Component={<Buttons />}
            para="These are buttons that can be used for various actions and call-to-actions within the application."
            heading="React Buttons"
            requirements="Tailwindcss for styles"
            code={ButtonCode.trim()}
          />
        },
        {
          path: "components/searchbar",
          element: <ItemShowCase
            Component={<SearchBar />}
            para="A responsive search bar input field perfect for filtering lists or global site search functionality."
            heading="Search Bar Component"
            requirements="Tailwind CSS for styling"
            code={SearchBarCode.trim()}
          />,
        },
        {
          path: "components/avatar",
          element: <ItemShowCase
            Component={<Avatar />}
            para="A circular avatar component used to display user profile pictures or initials."
            heading="Avatar Component"
            requirements="Tailwind CSS for styling"
            code={AvatarCode.trim()}
          />,
        },
        {
          path: "components/spinner",
          element: <ItemShowCase
            Component={<Spinner />}
            para="A visual indicator for loading states, useful for asynchronous data fetching or processing."
            heading="Loading Spinner"
            requirements="Tailwind CSS for styling"
            code={SpinnerCode.trim()}
          />,
        },
        {
          path: "components/navbars",
          element: <NavMenu />,
          children: [
            {
              path: "navbar1",
              element: <NavShowCase 
                Component={<NavBar1 />} 
                code={NavBar1Code.trim()} 
                heading="Navigation Bar 1" 
                requirements="Tailwind CSS" 
                para="A standard responsive navigation bar with logo and menu items."
              />
            },
            {
              path: "navbar2",
              element: <NavShowCase 
                Component={<NavBar2 />} 
                code={NavBar2Code.trim()} 
                heading="Navigation Bar 2" 
                requirements="Tailwind CSS" 
                para="Alternative navigation layout suitable for dashboards or specific app sections."
              />
            },
            {
              path: "navbar3",
              element: <NavShowCase 
                Component={<NavBar3 />} 
                code={NavBar3Code.trim()} 
                heading="Navigation Bar 3" 
                requirements="Tailwind CSS" 
                para="Minimalist navigation bar focusing on key actions."
              />
            },
            {
              path: "navbar4",
              element: <NavShowCase 
                Component={<NavBar4 />} 
                code={NavBar4Code.trim()} 
                heading="Navigation Bar 4" 
                requirements="Tailwind CSS" 
                para="Centered navigation layout with emphasized branding."
              />
            },
            {
              path: "navbar5",
              element: <NavShowCase 
                Component={<NavBar5 />} 
                code={NavBar5Code.trim()} 
                heading="Navigation Bar 5" 
                requirements="Tailwind CSS" 
                para="Feature-rich navigation bar with additional utility links or search."
              />
            },
          ]
        },
        {
          path: "components/card",
          element: <ItemShowCase
            Component={<Card />}
            para="A card container meant for grouping related information like blog posts, product details, or profiles."
            heading="Card Component"
            requirements="Tailwind CSS for styling"
            code={CardCode.trim()}
          />,
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
    basename: import.meta.env.BASE_URL,
  },
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;