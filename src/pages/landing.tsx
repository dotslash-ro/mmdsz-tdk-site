import { Helmet } from "react-helmet";

import LandingHero from "../components/landing-hero";
import Sponsors from "../components/sponsors";
import { withLayout } from "../layout/withLayout";
import tdkPicture1 from "../assets/tdk_2025_1.png";
import tdkPicture2 from "../assets/tdk_2025_2.png";
import tdkPicture3 from "../assets/tdk_2025_3.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>34. TDK - MMDSZ</title>
      </Helmet>
      {/* <div className="bg-tdk-accent px-5 py-3 text-center text-sm font-semibold text-white underline shadow-md">
        <Link to="/hmaa">Jelentkezz az 57. HMAA Konferenciára!</Link>
      </div> */}
      <LandingHero />
      <div className="flex flex-col items-center gap-8 bg-white py-20">
        <div className="flex flex-col items-center justify-center gap-10 sm:mx-auto sm:w-2/3 xl:flex-row">
          <p className="px-5 font-light sm:px-0 md:text-xl xl:w-1/3">
            A Marosvásárhelyi Tudományos Diákköri Konferencia 33. kiadása 2026. május 6-9. között zajlott. Ez az esemény
            egyedülállónak számít, ugyanis az egyetemek magyar hallgatói, anyanyelvükön mutathatják be tudományos
            dolgozataikat.
          </p>
          <img
            src={tdkPicture1}
            alt="TDK"
            className="w-full shadow-tdk-primary drop-shadow-lg sm:rounded-lg xl:w-2/3"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 sm:mx-auto sm:w-2/3 sm:px-0 xl:flex-row-reverse">
          <p className="px-5 font-light sm:px-0 md:text-xl xl:w-1/3">
            A 33. TDK-n egy hazai és 11 külföldi meghívott előadó aktuális kutatásairól hallhattak az érdeklődők,
            mindemellett 2 panel beszélgetésre is sor került.
          </p>
          <img
            src={tdkPicture2}
            alt="TDK"
            className="w-full shadow-tdk-primary drop-shadow-lg sm:rounded-lg xl:w-2/3"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10  sm:mx-auto sm:w-2/3 xl:flex-row">
          <p className="px-5 font-light sm:px-0 md:text-xl xl:w-1/3 ">
            A konferencia alkalmával 216 dolgozat került bemutatásra, melyből 155 hazai, illetve 61 külföldi hallgatók
            által készített. Mindemellett 48 hazai illetve külföldi szakemberek által vezetett műhelymunkába is
            becsatlakozhattak az egyetem hallgatói.
          </p>
          <img
            src={tdkPicture3}
            alt="TDK"
            className="w-full shadow-tdk-primary drop-shadow-lg sm:rounded-lg xl:w-2/3"
          />
        </div>
        <div className="flex flex-col gap-10 px-5 py-20 md:flex-row">
          <Link
            to="/szervezoi-jelentkezes"
            className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          >
            Jelentkezz Szervezőnek! →
          </Link>
        </div>
      </div>
      <Sponsors />
    </>
  );
};

export default withLayout(Landing);
