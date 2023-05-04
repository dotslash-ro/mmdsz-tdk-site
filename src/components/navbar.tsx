import { NavLink } from "react-router-dom";
import tdkLogo from "../assets/tdk-logo.jpg";

const Navbar = () => {
  return (
    <header className="top-0 z-10 flex h-fit flex-col items-center justify-evenly bg-tdk-primary py-3 px-5 drop-shadow-lg lg:sticky lg:flex-row lg:py-0">
      <div className="hidden lg:block">
        <NavLink to="/" className="">
          <img src={tdkLogo} alt="logo" className="h-24 w-24" />
        </NavLink>
      </div>
      <div className="lg:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
              : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
          }
        >
          Főoldal
        </NavLink>
      </div>
      <NavLink
        to="/tdkerdezz"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        TDKérdezz
      </NavLink>
      <NavLink
        to="/szabalyzat"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Szabályzat
      </NavLink>
      <NavLink
        to="/workshop-jelentkezes"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Műhelymunkák
      </NavLink>
      <NavLink
        to="/akkreditacio"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Akkreditáció
      </NavLink>
      <NavLink
        to="/rolunk"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Rólunk
      </NavLink>
      {/* <NavLink
        to="/szervezok"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Szervezőknek
      </NavLink> */}
      <NavLink
        to="/kapcsolat"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Kapcsolat
      </NavLink>
      <NavLink
        to="/osszefoglalok"
        className={({ isActive }) =>
          isActive
            ? "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white underline lg:py-0"
            : "lg:font-base flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-white hover:underline lg:py-0"
        }
      >
        Összefoglaló kötetek
      </NavLink>
      <NavLink
        to="/jelentkezes"
        className={({ isActive }) =>
          isActive
            ? "hidden"
            : "flex items-center justify-center px-5 py-3 text-sm font-bold uppercase text-tdk-accent drop-shadow-lg hover:underline lg:rounded-full lg:bg-tdk-accent lg:text-base lg:font-bold lg:text-white"
        }
      >
        Információk
      </NavLink>
    </header>
  );
};

export default Navbar;
