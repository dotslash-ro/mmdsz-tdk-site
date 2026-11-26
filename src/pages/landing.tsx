import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import LandingHero from "../components/landing-hero";
import PhotoCarousel from "../components/photo-carousel";
import Sponsors from "../components/sponsors";
import { withLayout } from "../layout/withLayout";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>34. TDK - MMDSZ</title>
      </Helmet>
      {/* <div className="bg-tdk-accent px-5 py-3 text-center text-sm font-semibold text-white underline shadow-md">
        <Link to="/hmaa">Jelentkezz az 57. HMAA Konferenciára!</Link>
      </div> */}
      <LandingHero>
        <Link
          to="/szervezok"
          className="inline-block whitespace-nowrap rounded-full bg-tdk-accent px-4 py-2.5 font-sans text-[13px] font-semibold uppercase text-white drop-shadow-md transition hover:underline sm:px-8 sm:py-3 sm:text-base xl:text-lg"
        >
          Jelentkezz szervezőnek! →
        </Link>
      </LandingHero>
      <PhotoCarousel />
      <section className="mx-auto max-w-3xl space-y-6 px-5 pb-20 text-gray-700 sm:px-10 md:text-lg md:leading-relaxed">
        <p>
          A Marosvásárhelyi Tudományos Diákköri Konferencia 33. kiadása 2026. május 6-9. között zajlott. Ez az esemény
          egyedülállónak számít, ugyanis az egyetemek magyar hallgatói, anyanyelvükön mutathatják be tudományos
          dolgozataikat.
        </p>
        <p>
          A 33. TDK-n egy hazai és 11 külföldi meghívott előadó aktuális kutatásairól hallhattak az érdeklődők,
          mindemellett 2 panel beszélgetésre is sor került.
        </p>
        <p>
          A konferencia alkalmával 216 dolgozat került bemutatásra, melyből 155 hazai, illetve 61 külföldi hallgatók
          által készített. Mindemellett 48 hazai illetve külföldi szakemberek által vezetett műhelymunkába is
          becsatlakozhattak az egyetem hallgatói.
        </p>
      </section>
      <Sponsors />
    </>
  );
};

export default withLayout(Landing);
