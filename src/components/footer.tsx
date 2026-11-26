import { NavLink } from "react-router-dom";

import { navLinks } from "../constants";
import mmdszLogo from "../assets/mmdsz-logo.png";
import KulturpalotaOutline from "./kulturpalota-outline";

type FooterLink = { label: string; href: string };

const universities: FooterLink[] = [
  { label: "MOGYTTE", href: "https://umfst.ro" },
  { label: "Sapientia", href: "https://sapientia.ro" },
  { label: "Művészeti Egyetem", href: "https://uat.ro" },
  { label: "BBTE Marosvásárhely", href: "https://felvi.ro/faculty.php?id=521" },
];

const partnerOrgs: FooterLink[] = [
  { label: "Országos Magyar Diákszövetség", href: "https://omdsz.ro" },
  { label: "Studium-Prospero", href: "https://studium.ro" },
  { label: "Erdélyi Múzeum Egyesület", href: "https://eme.ro" },
  { label: "Szent Balázs Alapítvány", href: "https://szantbalazs.ro" },
  { label: "Rákóczi Szövetség", href: "https://rakocziszovetseg.org" },
  { label: "Kolozsvári Egyetemi Magyar Intézet", href: "https://kmei.ro" },
  { label: "HÖOK", href: "https://hook.hu" },
  { label: "ANOSR", href: "https://anosr.ro" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/TDK-Marosv%C3%A1s%C3%A1rhely-1059174340910672",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tdk_mmdsz?igshid=YmMyMTA2M2Y=",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const linkClass = "transition hover:text-white hover:underline";
const headingClass = "mb-5 font-condensed text-lg font-semibold uppercase tracking-wider text-tdk-accent";

const LinkList = ({ links }: { links: FooterLink[] }) => (
  <ul className="space-y-3 text-sm text-tdk-beige/75">
    {links.map(({ label, href }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-tdk-beige/10 bg-tdk-secondary text-tdk-beige">
      {/* the Kultúrpalota, home of the conference, faded into the background */}
      <KulturpalotaOutline className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-[max(100%,1080px)] max-w-[1600px] -translate-x-1/2 text-tdk-beige/[0.11] [mask-image:linear-gradient(to_top,black_50%,transparent)]" />

      <div className="mx-auto max-w-6xl px-5 pt-16 pb-40 sm:px-10 md:pt-20 md:pb-64 lg:pb-80">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.6fr_0.8fr] lg:gap-10">
          <div>
            <a href="https://mmdsz.ro/" target="_blank" rel="noreferrer" className="inline-block">
              <img
                src={mmdszLogo}
                alt="MMDSZ"
                className="-ml-4 -mt-4 h-32 w-32 opacity-90 brightness-150 sepia-[.35] transition hover:opacity-100"
              />
            </a>
            <p className="mt-2 max-w-xs font-condensed text-xl font-medium uppercase leading-tight">
              Marosvásárhelyi Tudományos Diákköri Konferencia
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white text-tdk-beige/60 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d={path} />
                  </svg>
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Egyetemek weboldalai">
            <h2 className={headingClass}>Egyetemek</h2>
            <LinkList links={universities} />
          </nav>

          <nav aria-label="Partner szervezetek">
            <h2 className={headingClass}>Partner szervezetek</h2>
            <LinkList links={partnerOrgs} />
          </nav>

          <nav aria-label="Szabályzatok és oldaltérkép">
            <h2 className={headingClass}>Szabályzatok</h2>
            <ul className="space-y-3 text-sm text-tdk-beige/75">
              <li>
                <NavLink to="/gdpr" className={linkClass}>
                  GDPR
                </NavLink>
              </li>
            </ul>

            <h2 className={`${headingClass} mt-10`}>Oldaltérkép</h2>
            <ul className="space-y-3 text-sm text-tdk-beige/75">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className={linkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-tdk-beige/10 bg-tdk-secondary/70 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-tdk-beige/50 sm:flex-row sm:justify-between sm:px-10">
          <p>
            <a href="https://mmdsz.ro/" target="_blank" rel="noreferrer" className={linkClass}>
              MMDSZ
            </a>{" "}
            © 2026. All Rights Reserved.
          </p>
          <p>
            Made by{" "}
            <a href="https://dotslash.ro" target="_blank" rel="noreferrer" className={linkClass}>
              DotSlash Romania
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
