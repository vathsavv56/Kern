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
import NavBars from "./client/components/kernC/NavBars";
import NavBarsCode from "./client/components/kernC/NavBars.tsx?raw"
import Card from "./client/components/kernC/Card";
import CardCode from "./client/components/kernC/Card.tsx?raw"
import ItemShowCase from "./client/components/kernC/ItemShowCase";


/**
 * Describes the nested routing for the `/components` path.
 *
 * @remarks
 * Under the main route (`/`), the `components` path renders `<ComponentPage />`.
 * Its children (`textarea`, `buttons`, `searchbar`, `avatar`, `spinner`, `navbars`, `card`)
 * render wherever `<ComponentPage />` exposes an `<Outlet />`, displaying each specific component.
 *
 * @see Router configuration for the complete route hierarchy and base path `/Kern`.
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
            Component={<TextArea/>} 
            para="This is a text area component that can be used for displaying text this is responsive and has good typography. This can be used for articles and any other places where u need text" 
            heading="Text Area Component :" 
            requirements="Fonts needed are JetBrains Mono (By jetbrains ),tailwind Css for styling "
            code={TextAreaCode.trim()}
          />,
        },
        {
          path: "components/buttons",
          element: <ItemShowCase 
            Component={<Buttons/>} 
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
          element: <ItemShowCase 
            Component={<NavBars />}
            para="Responsive navigation bar examples that adapt to mobile and desktop views."
            heading="Navigation Bar"
            requirements="Tailwind CSS for styling"
            code={NavBarsCode.trim()}
          />,
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
    basename: "/Kern",
  },
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;