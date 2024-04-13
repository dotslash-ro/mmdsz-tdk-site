import { useEffect, useState } from "react";

import umfstLogo from "../assets/umfst-logo.webp";
import otdkLogo from "../assets/otdk.png";
import mtaLogo from "../assets/mta.jpeg";
import { type Sponsor } from "../types/sponsors.types";
import { fetchSponsors } from "../api/sponsors.api";

const Sponsors = () => {
  const [allSponsors, setAllSponsors] = useState<Sponsor[]>([]);

  const partners = allSponsors.filter((sponsor) => sponsor.type == "Partner").sort((a, b) => a.order - b.order);
  const sponsors = allSponsors.filter((sponsor) => sponsor.type == "Támogató").sort((a, b) => a.order - b.order);
  const specialSponsors = allSponsors
    .filter((sponsor) => sponsor.type == "Kiemelt támogató")
    .sort((a, b) => a.order - b.order);
  const patrons = allSponsors.filter((sponsor) => sponsor.type == "Védnök").sort((a, b) => a.order - b.order);
  const mainSponsors = allSponsors.filter((sponsor) => sponsor.type == "Főtámogató").sort((a, b) => a.order - b.order);

  console.log(specialSponsors);

  useEffect(() => {
    fetchSponsors().then((data) => {
      setAllSponsors(data);
    });
  }, []);

  return (
    <div className="space-y-10">
      <div className="bg-tdk-primary pt-20">
        <h2 className="pb-20 text-center text-5xl font-bold text-white">Védnökeink</h2>
        <div className="flex flex-wrap justify-center gap-5 space-y-2 px-20 pb-20">
          <img
            src={umfstLogo}
            className="h-32 w-64 object-scale-down brightness-0 grayscale invert transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
          />
          <img
            src={mtaLogo}
            className="h-32 w-64 object-scale-down mix-blend-lighten invert transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
          />
          <img
            src={otdkLogo}
            className="h-32 w-64 object-scale-down brightness-0 grayscale invert transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
          />
        </div>
      </div>
      <div>
        {partners.length > 0 && (
          <>
            <h2 className="pb-20 text-center text-5xl font-bold">Partnereink</h2>
            <div className="flex flex-wrap justify-center gap-5 space-y-2 px-20 pb-20">
              {partners.map((partner, index) => (
                <a href={partner.sponsorLink} target="_blank" key={index}>
                  <img
                    src={partner.sponsorLogo}
                    className="h-32 w-64 object-scale-down mix-blend-multiply transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
                  />
                </a>
              ))}
            </div>
          </>
        )}
        {mainSponsors.length > 0 && (
          <>
            <h2 className="pb-20 text-center text-5xl font-bold">Főtámogatóink</h2>
            <div className="flex flex-wrap justify-center gap-5 space-y-2 px-20 pb-20">
              {mainSponsors.map((partner, index) => (
                <a href={partner.sponsorLink} target="_blank" key={index}>
                  <img
                    src={partner.sponsorLogo}
                    className="h-32 w-64 object-scale-down mix-blend-multiply transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
                  />
                </a>
              ))}
            </div>
          </>
        )}
        {specialSponsors.length > 0 && (
          <>
            <h2 className="text-center text-5xl font-bold">Kiemelt Támogatóink</h2>
            <div className="flex flex-wrap justify-center gap-5 space-y-2 px-20 pb-20">
              {specialSponsors.map((sponsor, index) => (
                <a href={sponsor.sponsorLink} target="_blank" key={index}>
                  <img
                    src={sponsor.sponsorLogo}
                    className="h-32 w-64 object-scale-down mix-blend-multiply transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
                  />
                </a>
              ))}
            </div>
          </>
        )}
        {sponsors.length > 0 && (
          <>
            <h2 className="text-center text-5xl font-bold">Támogatóink</h2>
            <div className="flex flex-wrap justify-center gap-5 space-y-2 px-20 pb-20">
              {sponsors.map((sponsor, index) => (
                <a href={sponsor.sponsorLink} target="_blank" key={index}>
                  <img
                    src={sponsor.sponsorLogo}
                    className="h-32 w-64 object-scale-down mix-blend-multiply transition-transform duration-150 ease-linear hover:scale-105 md:h-48 lg:w-96"
                  />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sponsors;
