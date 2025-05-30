import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
import JournalError from "./components/journal-error";
// import Workshops from "./pages/workshops";
import Programme from "./pages/program";
// import Accreditation from "./pages/accreditation";
import { oauthClientId } from "./constants";
import Summary from "./pages/summary";
import NotFound from "./pages/not-found";
import OrganizerSignup from "./pages/organizer-signup";
// import Signup from "./pages/signup";
import Presenters from "./pages/presenters";
// import Workshops from "./pages/workshops";
// import WorkshopSignup from "./pages/workshop-signup";
// import WorkshopSignup from "./pages/workshop-signup";

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
    path: "/idovonal",
    element: <Timeline />,
  },
  {
    path: "/eloadok",
    element: <Presenters />,
  },
  // {
  //   path: "/jelentkezes",
  //   element: <Signup />,
  // },
  // {
  //   path: "/jelentkezes-teszt",s
  //   element: <Signup />,
  // },
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
  // {
  //   path: "/workshop",
  //   element: <WorkshopSignup />,
  // },
  // {
  //   path: "/workshop-jelentkezes",
  //   element: <WorkshopSignup />,
  // },
  // {
  //   path: "/akkreditacio",
  //   element: <Accreditation />,
  // },
  {
    path: "/program",
    element: <Programme />,
  },
  {
    path: "/osszefoglalo",
    element: <Summary />,
  },
  {
    path: "/szervezoi-jelentkezes",
    element: <OrganizerSignup enabled={true} />,
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
        errorElement: <JournalError />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={oauthClientId}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
