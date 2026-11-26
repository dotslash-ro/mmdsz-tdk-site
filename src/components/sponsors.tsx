import { useEffect, useState } from "react";

import umfstLogo from "../assets/umfst-logo.webp";
import otdkLogo from "../assets/otdk.png";
import mtaLogo from "../assets/mta.jpeg";
import { type Sponsor, type SponsorType } from "../types/sponsors.types";
import { fetchSponsors } from "../api/sponsors.api";

type Tier = { type: SponsorType; title: string; logoClass: string };

/** Sponsor tiers in order of importance; logos shrink as the tier gets less prominent. */
const tiers: Tier[] = [
  { type: "Főtámogató", title: "Főtámogatóink", logoClass: "h-24 w-56 md:h-36 md:w-80" },
  { type: "Kiemelt támogató", title: "Kiemelt támogatóink", logoClass: "h-20 w-48 md:h-28 md:w-72" },
  { type: "Állandó Támogató", title: "Állandó támogatóink", logoClass: "h-20 w-48 md:h-24 md:w-64" },
  { type: "Támogató", title: "Támogatóink", logoClass: "h-16 w-40 md:h-20 md:w-56" },
  { type: "Partner", title: "Partnereink", logoClass: "h-16 w-40 md:h-20 md:w-56" },
];

const patrons = [
  { src: umfstLogo, alt: "MOGYTTE", className: "brightness-0 invert" },
  { src: mtaLogo, alt: "Magyar Tudományos Akadémia", className: "mix-blend-lighten invert" },
  { src: otdkLogo, alt: "OTDK", className: "brightness-0 invert" },
];

const logoHover = "transition-transform duration-150 ease-linear hover:scale-105";

const Sponsors = () => {
  const [allSponsors, setAllSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetchSponsors().then(setAllSponsors);
  }, []);

  const groups = tiers
    .map((tier) => ({
      ...tier,
      sponsors: allSponsors.filter((s) => s.type === tier.type).sort((a, b) => a.order - b.order),
    }))
    .filter((group) => group.sponsors.length > 0);

  return (
    <>
      <section aria-labelledby="patrons-title" className="bg-tdk-primary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 md:py-20">
          <h2 id="patrons-title" className="text-3xl font-bold text-tdk-beige md:text-5xl">
            Védnökeink
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-8 md:mt-14 md:gap-x-16">
            {patrons.map(({ src, alt, className }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className={`h-20 w-48 object-contain md:h-28 md:w-64 ${className} ${logoHover}`}
              />
            ))}
          </div>
        </div>
      </section>

      {groups.length > 0 && (
        <section
          aria-label="Támogatók"
          className="mx-auto max-w-6xl space-y-14 px-5 py-16 sm:px-10 md:space-y-16 md:py-20"
        >
          {groups.map(({ type, title, logoClass, sponsors }) => (
            <div key={type}>
              <h3 className="border-b border-tdk-brown/10 pb-3 font-condensed text-2xl font-semibold uppercase tracking-wide text-tdk-accent md:text-4xl">
                {title}
              </h3>
              <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-10 md:gap-x-14">
                {sponsors.map((sponsor, index) => (
                  <a href={sponsor.sponsorLink} target="_blank" rel="noreferrer" key={index}>
                    <img
                      src={sponsor.sponsorLogo}
                      alt="Támogató weboldala"
                      loading="lazy"
                      className={`object-contain mix-blend-multiply ${logoClass} ${logoHover}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Sponsors;
