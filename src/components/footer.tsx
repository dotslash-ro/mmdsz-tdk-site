import { NavLink } from "react-router-dom";
import mmdszLogo from "../assets/mmdsz-logo.png";

const Footer = () => {
  return (
    <footer className="bg-tdk-secondary py-8">
      <div className="flex flex-col justify-evenly gap-8 py-8 px-6 md:flex-row">
        <div className="flex flex-col items-center">
          <img src={mmdszLogo} alt="mmdsz-logo" className="h-64 w-64" />
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Egyetemek weboldalai
          </h2>
          <ul className="text-sm text-neutral-500">
            <li className="mb-4">
              <a
                href="https://umfst.ro"
                target="_blank"
                className="hover:underline"
              >
                MOGYTTE
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://sapientia.ro"
                target="_blank"
                className="hover:underline"
              >
                Sapientia
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://uat.ro"
                target="_blank"
                className="hover:underline"
              >
                Művészeti Egyetem
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://felvi.ro/faculty.php?id=521"
                target="_blank"
                className="hover:underline"
              >
                BBTE Marosvásárhely
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Partner Szervezetek
          </h2>
          <ul className="text-sm text-neutral-500">
            <li className="mb-4">
              <a
                href="https://omdsz.ro"
                target="_blank"
                className="hover:underline"
              >
                Országos Magyar Diákszövetség
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://studium.ro"
                target="_blank"
                className="hover:underline"
              >
                Studium-Prospero
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://eme.ro"
                target="_blank"
                className="hover:underline"
              >
                Erdélyi Múzeum Egyesület
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://szantbalazs.ro"
                target="_blank"
                className="hover:underline"
              >
                Szent Balázs Alapítvány
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://rakocziszovetseg.org"
                target="_blank"
                className="hover:underline"
              >
                Rákóczi Szövetség
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://kmei.ro"
                target="_blank"
                className="hover:underline"
              >
                Kolozsvári Egyetemi Magyar Intézet
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://hook.hu"
                target="_blank"
                className="hover:underline"
              >
                HÖOK
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://anosr.ro"
                target="_blank"
                className="hover:underline"
              >
                ANOSR
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Szabáyzatok
          </h2>
          <ul className="text-sm text-neutral-500">
            <li className="mb-4">
              <NavLink to="/gdpr" className="hover:underline">
                GDPR
              </NavLink>
            </li>
            <li className="mb-4"></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-tdk-secondary py-6 px-4 md:flex-row">
        <div className="text-center text-sm text-neutral-500">
          <a
            href="https://mmdsz.ro/"
            className="hover:underline"
            target="_blank"
          >
            MMDSZ
          </a>{" "}
          © 2023. All Rights Reserved.
        </div>
        <div className="px-2 text-center text-sm text-neutral-500">
          {""}
          Made by <a className="hover:underline">DotSlash Romania</a>
        </div>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/TDK-Marosv%C3%A1s%C3%A1rhely-1059174340910672"
          className="text-gray-400 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-neutral-400"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a
          href="https://instagram.com/tdk_mmdsz?igshid=YmMyMTA2M2Y="
          className="text-gray-400 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-neutral-400"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="sr-only">Instagram page</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
