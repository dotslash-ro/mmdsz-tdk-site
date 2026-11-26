import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import tdkLogo from "../assets/hero/tdk-logo.png";

const menuTransitionMs = 300;

/** Pages whose first section is a full-bleed hero that the navbar can sit on top of. */
const overlayRoutes = ["/"];

const useScrolled = (threshold = 8) => {
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > threshold);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // true while the mobile menu slides open/closed, so the bar stays solid until it's fully closed
  const [menuAnimating, setMenuAnimating] = useState(false);
  const { pathname } = useLocation();
  const scrolled = useScrolled();
  // transparent with dark text while at the top of a page with a hero; solid otherwise
  const solid = !overlayRoutes.includes(pathname) || scrolled || showMenu || menuAnimating;

  const toggleMenu = (open: boolean) => {
    setShowMenu(open);
    setMenuAnimating(true);
  };

  useEffect(() => {
    if (!menuAnimating) return;
    const timer = setTimeout(() => setMenuAnimating(false), menuTransitionMs);
    return () => clearTimeout(timer);
  }, [menuAnimating, showMenu]);

  // close the menu when navigating
  useEffect(() => setShowMenu(false), [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `lg:font-base flex items-center justify-center py-3 text-sm font-bold uppercase transition-colors duration-300 lg:py-0 ${
      solid ? "text-white" : "text-white lg:text-tdk-brown"
    } ${isActive ? "underline" : "hover:underline"}`;

  return (
    <header
      className={`sticky top-0 z-20 transition-[filter] duration-300 ${solid ? "drop-shadow-md" : "drop-shadow-none"}`}
    >
      <nav
        className={`h-20 w-full transition-colors duration-300 ${
          solid ? "bg-tdk-primary text-neutral-100" : "bg-transparent text-tdk-brown"
        }`}
      >
        <div className="flex w-full flex-wrap items-center justify-between lg:px-5 xl:px-8">
          <NavLink to="/" className="ml-4 flex h-20 items-center bg-[#f7f1e6] px-3">
            <img src={tdkLogo} alt="TDK Marosvásárhely" className="h-14 w-auto" />
          </NavLink>
          <div className="flex gap-2 lg:order-2">
            <button
              type="button"
              aria-expanded={showMenu}
              aria-controls="main-menu"
              aria-label={showMenu ? "Menü bezárása" : "Menü megnyitása"}
              className="relative z-10 mr-4 block rounded-md border bg-neutral-50 p-2 text-tdk-primary drop-shadow-md transition hover:bg-neutral-200 lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu(!showMenu);
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
              onClick={() => toggleMenu(false)}
            />
          )}
          <div
            id="main-menu"
            style={{ transitionDuration: `${menuTransitionMs}ms` }}
            className={`relative z-10 grid w-full transition-[grid-template-rows] ease-out motion-reduce:transition-none lg:block lg:w-auto ${
              showMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            } ${!showMenu && !menuAnimating ? "max-lg:invisible" : ""}`}
          >
            <div className="min-h-0 overflow-hidden bg-tdk-primary lg:overflow-visible lg:bg-transparent">
              <ul className="flex flex-col items-center justify-evenly gap-2 py-4 font-medium lg:flex-row lg:space-x-2 lg:border-0 lg:p-0 lg:py-4 xl:space-x-4">
                {/* <li>
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
              </li> */}
                {/* <li>
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
              </li> */}
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
                  <NavLink to="/szabalyzat" className={linkClass}>
                    Szabályzat
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/szervezok" className={linkClass}>
                    Szervezőknek
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kapcsolat" className={linkClass}>
                    Kapcsolat
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/osszefoglalok" className={linkClass}>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
