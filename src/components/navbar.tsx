import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex h-fit items-center justify-evenly bg-tdk-primary py-3 drop-shadow-lg md:py-0">
      <div>
        <NavLink to="/" className="">
          <img
            src="./dist/assets/tdk-logo.jpg"
            alt="logo"
            className="h-24 w-24"
          />
        </NavLink>
      </div>
      <div className="flex flex-col md:flex-row">
        <NavLink
          to="/szabalyzat"
          className={({ isActive }) =>
            isActive
              ? "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white underline md:py-0 md:font-bold"
              : "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white hover:underline md:py-0 md:font-bold"
          }
        >
          Szabályzat
        </NavLink>
        <NavLink
          to="/rolunk"
          className={({ isActive }) =>
            isActive
              ? "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white underline md:py-0 md:font-bold"
              : "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white hover:underline md:py-0 md:font-bold"
          }
        >
          Rólunk
        </NavLink>
        <NavLink
          to="/kapcsolat"
          className={({ isActive }) =>
            isActive
              ? "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white underline md:py-0 md:font-bold"
              : "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white hover:underline md:py-0 md:font-bold"
          }
        >
          Kapcsolat
        </NavLink>
        <NavLink
          to="/osszefoglalok"
          className={({ isActive }) =>
            isActive
              ? "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white underline md:py-0 md:font-bold"
              : "md:font-base flex items-center justify-center px-5 text-sm uppercase text-white hover:underline md:py-0 md:font-bold"
          }
        >
          Összefoglaló kötetek
        </NavLink>
        <NavLink
          to="/jelentkezes"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : "flex items-center justify-center px-5 py-2 text-sm uppercase text-white hover:underline md:rounded-full md:bg-tdk-accent md:text-base md:font-bold"
          }
        >
          Jelentkezés
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
