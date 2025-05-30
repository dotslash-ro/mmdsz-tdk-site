import { useState } from "react";
import { NavLink } from "react-router-dom";

import tdkLogo from "../assets/tdk-logo.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="sticky top-0 z-20 drop-shadow-md">
      <nav className="h-20 w-full bg-tdk-primary text-neutral-100">
        <div className="flex w-full flex-wrap items-center justify-between lg:px-5 xl:px-8">
          <NavLink to="/" className="pl-4">
            <img src={tdkLogo} alt="logo" className="h-20 w-auto" />
          </NavLink>
          <div className="flex gap-2 lg:order-2">
            <button
              type="button"
              className="mr-4 block rounded-md border bg-neutral-50 p-2 text-tdk-primary drop-shadow-md transition hover:bg-neutral-200 lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
            >
              {!showMenu ? (
                <svg
                  className="h-auto w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-auto w-6">
                  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                </svg>
              )}
            </button>
          </div>
          {showMenu && (
            <div
              className="absolute top-0 left-0 z-0 h-screen w-screen bg-transparent"
              onClick={() => setShowMenu(false)}
            />
          )}
          <div className="w-full bg-tdk-primary drop-shadow-md lg:block lg:w-auto" hidden={!showMenu}>
            <ul
              className="mt-4 flex flex-col items-center justify-evenly gap-2 font-medium lg:mt-0 lg:flex-row lg:space-x-2 lg:border-0 lg:p-0 lg:py-4 xl:space-x-4"
              hidden={!showMenu}
            >
              <li>
                <NavLink
                  to="/program"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Program
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/eloadok"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Előadók
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/workshop"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Műhelymunkák
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/idovonal"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Jelentkezés
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/szabalyzat"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Szabályzat
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/szervezok"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Szervezőknek
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kapcsolat"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Kapcsolat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/osszefoglalok"
                  className={({ isActive }) =>
                    isActive
                      ? "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white underline lg:py-0"
                      : "lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
                  }
                >
                  Összefoglaló kötetek
                </NavLink>
              </li>

              {/* <NavLink
                to="/akkreditacio"
                className={({ isActive }) =>
                  isActive
                    ? "hidden"
                    : "flex items-center justify-center px-5 py-2 text-sm font-bold uppercase text-tdk-accent drop-shadow-lg hover:underline lg:rounded-full lg:bg-tdk-accent lg:text-base lg:font-bold lg:text-white"
                }
              >
                Akkreditáció
              </NavLink> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
