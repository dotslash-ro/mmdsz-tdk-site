import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
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
import GDPR from "./pages/gdpr";

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
    path: "/gdpr",
    element: <GDPR />,
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
      {
        path: ":year",
        element: <Journal />,
        errorElement: (
          <div className="flex flex-grow items-center justify-center font-light text-gray-500">
            {" "}
            Sajnos nem sikerült betölteni az összefoglaló kötetet. A Safari
            böngésző iOS-en nem támogatja PDF fájlok megjelenetísét.
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
