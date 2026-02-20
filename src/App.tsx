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
import TextAreaCode from "./client/components/kernC/TextArea.tsx?raw";
import ButtonMenu from "./client/components/kernC/Buttons/ButtonMenu";

import Button1 from "./client/components/kernC/Buttons/Button1";
import Button2 from "./client/components/kernC/Buttons/Button2";
import Button3 from "./client/components/kernC/Buttons/Button3";
import Button4 from "./client/components/kernC/Buttons/Button4";
import Button5 from "./client/components/kernC/Buttons/Button5";

import Button1Code from "./client/components/kernC/Buttons/Button1.tsx?raw";
import Button2Code from "./client/components/kernC/Buttons/Button2.tsx?raw";
import Button3Code from "./client/components/kernC/Buttons/Button3.tsx?raw";
import Button4Code from "./client/components/kernC/Buttons/Button4.tsx?raw";
import Button5Code from "./client/components/kernC/Buttons/Button5.tsx?raw";
import SearchBar from "./client/components/kernC/SearchBar";
import SearchBarCode from "./client/components/kernC/SearchBar.tsx?raw";
import Avatar from "./client/components/kernC/Avatar";
import AvatarCode from "./client/components/kernC/Avatar.tsx?raw";
import Spinner from "./client/components/kernC/Spinner";
import SpinnerCode from "./client/components/kernC/Spinner.tsx?raw";
// import NavBars from "./client/components/kernC/NavBars";
// import NavBarsCode from "./client/components/kernC/NavBars.tsx?raw"
import Card from "./client/components/kernC/Card";
import CardCode from "./client/components/kernC/Card.tsx?raw";
import ItemShowCase from "./client/components/kernC/ItemShowCase";
import NavShowCase from "./client/components/kernC/NavBars/NavShowCase";
import ButtonShowCase from "./client/components/kernC/Buttons/ButtonShowCase";
import NavMenu from "./client/components/kernC/NavBars/NavMenu";

import NavBar1 from "./client/components/kernC/NavBars/NavBar1";
import NavBar2 from "./client/components/kernC/NavBars/NavBar2";
import NavBar3 from "./client/components/kernC/NavBars/NavBar3";
import NavBar4 from "./client/components/kernC/NavBars/NavBar4";
import NavBar5 from "./client/components/kernC/NavBars/NavBar5";

import NavBar1Code from "./client/components/kernC/NavBars/NavBar1.tsx?raw";
import NavBar2Code from "./client/components/kernC/NavBars/NavBar2.tsx?raw";
import NavBar3Code from "./client/components/kernC/NavBars/NavBar3.tsx?raw";
import NavBar4Code from "./client/components/kernC/NavBars/NavBar4.tsx?raw";
import NavBar5Code from "./client/components/kernC/NavBars/NavBar5.tsx?raw";


import Login from "./client/components/Login";
import LoginCode from "./client/components/Login.tsx?raw";
import GithubHeatMap from "./client/components/kernC/github/GithubHeatMap";
import GithubHeatMapCode from "./client/components/kernC/github/GithubHeatMap.tsx?raw";

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
          element: (
            <ItemShowCase
              Component={<TextArea />}
              para="A controlled textarea input with live character counter (500 max), placeholder text, and a clear button that activates when content is present. Features smooth focus transitions from gray to white background with a subtle ring effect."
              heading="Text Area"
              requirements="React (useState), Tailwind CSS"
              code={TextAreaCode.trim()}
              cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/textarea.json"
            />
          ),
        },
        {
          path: "components/buttons",
          element: <ButtonMenu />,
          children: [
            {
              path: "basic",
              element: (
                <ButtonShowCase
                  Component={<Button1 />}
                  code={Button1Code.trim()}
                  heading="Basic Buttons"
                  requirements="Tailwind CSS"
                  para="Primary, secondary, ghost, danger, and disabled button variants."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/button1.json"
                />
              ),
            },
            {
              path: "icon",
              element: (
                <ButtonShowCase
                  Component={<Button2 />}
                  code={Button2Code.trim()}
                  heading="Icon Buttons"
                  requirements="Tailwind CSS, react-icons"
                  para="Buttons with leading icons and icon-only action buttons."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/button2.json"
                />
              ),
            },
            {
              path: "social",
              element: (
                <ButtonShowCase
                  Component={<Button3 />}
                  code={Button3Code.trim()}
                  heading="Social / Auth Buttons"
                  requirements="Tailwind CSS, react-icons"
                  para="OAuth and email sign-up buttons with brand colors and dividers."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/button3.json"
                />
              ),
            },
            {
              path: "sizes",
              element: (
                <ButtonShowCase
                  Component={<Button4 />}
                  code={Button4Code.trim()}
                  heading="Button Sizes"
                  requirements="Tailwind CSS"
                  para="Small, medium, large, and full-width button sizing options."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/button4.json"
                />
              ),
            },
            {
              path: "animated",
              element: (
                <ButtonShowCase
                  Component={<Button5 />}
                  code={Button5Code.trim()}
                  heading="Animated Buttons"
                  requirements="Tailwind CSS, react-icons"
                  para="Interactive buttons with loading states, scale effects, and hover-fill animations."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/button5.json"
                />
              ),
            },
          ],
        },
        {
          path: "components/searchbar",
          element: (
            <ItemShowCase
              Component={<SearchBar />}
              para="An interactive search input with a leading search icon, clear button on input, and a live-filtering dropdown that matches against a suggestion list. Includes hint text and smooth focus transitions. Try typing 'dash' or 'set' to see the dropdown."
              heading="Search Bar"
              requirements="React (useState), Tailwind CSS, react-icons (HiSearch, HiX)"
              code={SearchBarCode.trim()}
              cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/searchbar.json"
            />
          ),
        },
        {
          path: "components/avatar",
          element: (
            <ItemShowCase
              Component={<Avatar />}
              para="A showcase of avatar variants across three categories: image-based avatars in four sizes (SM, MD, LG, XL), initial-based avatars with dark backgrounds, and status indicators (online, away, offline, busy) with colored dots. All feature ring borders with hover effects."
              heading="Avatar"
              requirements="Tailwind CSS, an image asset for the profile picture"
              code={AvatarCode.trim()}
              cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/avatar.json"
            />
          ),
        },
        {
          path: "components/spinner",
          element: (
            <ItemShowCase
              Component={<Spinner />}
              para="A collection of loading spinners in three showcase groups: four animation variants (ring spin, bouncing dots, pulse, dual ring), three sizes (SM, MD, LG), and four color options (blue, green, amber, red). All animations use pure CSS via Tailwind utilities — no JavaScript required."
              heading="Loading Spinners"
              requirements="Tailwind CSS (animate-spin, animate-bounce, animate-pulse)"
              code={SpinnerCode.trim()}
              cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/spinner.json"
            />
          ),
        },
        {
          path: "components/navbars",
          element: <NavMenu />,
          children: [
            {
              path: "navbar1",
              element: (
                <NavShowCase
                  Component={<NavBar1 />}
                  code={NavBar1Code.trim()}
                  heading="Classic Horizontal"
                  requirements="React (useState), Tailwind CSS, react-icons (HiMenu, HiX)"
                  para="A clean white navbar with logo on the left, nav links in the center, and a CTA button on the right. Links feature animated underline on hover. Responsive hamburger menu slides links down on mobile."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/navbar1.json"
                />
              ),
            },
            {
              path: "navbar2",
              element: (
                <NavShowCase
                  Component={<NavBar2 />}
                  code={NavBar2Code.trim()}
                  heading="Centered Logo"
                  requirements="React (useState), Tailwind CSS, react-icons (HiMenu, HiX)"
                  para="A dark-themed navbar with the logo centered and nav links split evenly on the left and right sides. Features an amber accent border on the bottom. Links collapse into a stacked list on mobile."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/navbar2.json"
                />
              ),
            },
            {
              path: "navbar3",
              element: (
                <NavShowCase
                  Component={<NavBar3 />}
                  code={NavBar3Code.trim()}
                  heading="Glassmorphism"
                  requirements="React (useState), Tailwind CSS (backdrop-blur), react-icons (HiMenu, HiX)"
                  para="A floating navbar with a semi-transparent background and backdrop blur effect. Rounded pill shape with gradient CTA button and violet-to-cyan accents. Links use pill-shaped hover backgrounds. Collapses into a dropdown on mobile."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/navbar3.json"
                />
              ),
            },
            {
              path: "navbar4",
              element: (
                <NavShowCase
                  Component={<NavBar4 />}
                  code={NavBar4Code.trim()}
                  heading="Minimal Monochrome"
                  requirements="React (useState), Tailwind CSS, react-icons (HiMenu, HiX)"
                  para="An ultra-clean white navbar with wide-tracked uppercase logo, underline-style active link indicator, and search/menu text actions separated by a divider. Uses a monochrome black and white color scheme throughout."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/navbar4.json"
                />
              ),
            },
            {
              path: "navbar5",
              element: (
                <NavShowCase
                  Component={<NavBar5 />}
                  code={NavBar5Code.trim()}
                  heading="Dashboard Nav"
                  requirements="React (useState), Tailwind CSS, react-icons (HiMenu, HiX, FiUser, FiBell)"
                  para="A dark dashboard-style navbar with a gradient logo icon, segmented pill navigation (active tab highlighted), notification bell with green indicator dot, and a profile button with a violet avatar icon. Full mobile menu includes all actions."
                  cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/navbar5.json"
                />
              ),
            },
          ],
        },
        {
          path: "components/card",
          element: (
            <ItemShowCase
              Component={<Card />}
              para="Three card variants: a basic card with gradient header area, a horizontal profile card with avatar and follow button, and a rich interactive card with a heart/save overlay, category tag, read time, author row, and share/more action buttons. All feature hover shadow transitions."
              heading="Cards"
              requirements="Tailwind CSS, react-icons (FiHeart, FiShare2, FiMoreHorizontal), an image asset"
              code={CardCode.trim()}
              cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/card.json"
            />
          ),
        },
        {
          path: "components/login",
          element: (
            <ItemShowCase
              Component={<Login />}
              para="A beautiful, interactive authentication form with a split-pane design, input validation features, and smooth transition animations between 'Log in' and 'Sign up' states."
              heading="Authentication Form"
              requirements="React (useState), Tailwind CSS, lucide-react"
              code={LoginCode.trim()}
            />
          ),
        },
        {
          path: "components/github",
          element: (
            <ItemShowCase
              Component={<GithubHeatMap username="vathsavv56" />}
              para="An interactive Github contribution heatmap component built without external graph libraries. Fetches live contribution data, features color-scaled intensity blocks, responsive tooltips, and a loading skeleton."
              heading="Github Heatmap"
              requirements="React (useState, useEffect), Tailwind CSS, lucide-react"
              code={GithubHeatMapCode.trim()}
              cliCommand="npx shadcn@latest add https://kern-sigma.vercel.app/r/githubheatmap.json"
            />
          ),
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
