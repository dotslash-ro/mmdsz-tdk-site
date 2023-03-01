import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Landing from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import Timeline from "./pages/timeline";
import Rules from "./pages/rules";
import PastJournals from "./pages/journals";
import Journal from "./components/journal";
import Organizers from "./pages/organizers";
import FAQ from "./pages/faq";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/rolunk",
    element: <About />,
  },
  {
    path: "/kapcsolat",
    element: <Contact />,
  },
  {
    path: "/jelentkezes",
    element: <Timeline />,
  },
  {
    path: "/szabalyzat",
    element: <Rules />,
  },
  {
    path: "/szervezok",
    element: <Organizers />,
  },
  {
    path: "/tdkerdezz",
    element: <FAQ />,
  },
  {
    path: "/osszefoglalok",
    element: <PastJournals />,
    children: [
      {
        index: true,
        element: (
          <div className="flex flex-grow items-center justify-center font-light text-gray-500">
            Válassz egy összefoglaló kötetet!
          </div>
        ),
      },
      { path: ":year", element: <Journal /> },
    ],
  },
  
], {basename: "/mmdsz-tdk"});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
