import { Helmet } from "react-helmet";

import Sponsors from "../components/sponsors";
import { withLayout } from "../layout/withLayout";
import tdkPicture1 from "../assets/tdk-pic-4.jpg";
import tdkPicture2 from "../assets/tdk-pic-5.jpg";
import tdkPicture3 from "../assets/tdk-pic-6.jpg";
import heroDecor1 from "../assets/tdk-hero-decor1-2025.png";
import heroDecor2 from "../assets/tdk-hero-decor2-2025.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>32. TDK - MMDSZ</title>
      </Helmet>
      <div className="flex w-full flex-col justify-center bg-banner bg-cover py-16 drop-shadow-md md:flex-row">
        <div className="hidden w-1/3 flex-col justify-end px-5 md:flex">
          <img src={heroDecor1} className="object-contain" />
        </div>
        <div className="px-5">
          <h2 className="text-left font-hero text-6xl uppercase tracking-tight text-white md:text-5xl lg:text-right lg:text-8xl xl:text-left">
            <div>
              {" "}
              <span className="text-tdk-accent">32.</span> Tudományos
            </div>{" "}
            <div className="text-tdk-accent">Diákköri</div> Konferencia
          </h2>
          <div className="py-8 text-left font-medium uppercase text-white md:text-lg lg:text-right lg:text-2xl xl:text-left">
            <span className="font-bold">Marosvásárhely 2025.</span> Május 7-10.
          </div>
        </div>
        <div className="md:w-1/3">
          <img src={heroDecor2} className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 bg-white py-20">
        <div className="flex flex-col items-center justify-center gap-10 sm:mx-auto sm:w-2/3 xl:flex-row">
          <p className="px-5 font-light sm:px-0 md:text-xl xl:w-1/3">
            A Marosvásárhelyi Tudományos Diákköri Konferencia 31. kiadása 2024. április 24-27. között zajlott. Ez az
            esemény egyedülállónak számít, ugyanis az egyetemek magyar hallgatói anyanyelvükön mutathatják be tudományos
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
            A 31. TDK-n egy hazai és 12 külföldi meghívott előadó aktuális kutatásairól hallhattak az érdeklődők,
            mindemellett 3 panelbeszélgetésre is sor került, amelyek során 2 külföldi, illetve 5 hazai szakember
            beszélgetésébe csatlakozhattak be a résztvevők.
          </p>
          <img
            src={tdkPicture2}
            alt="TDK"
            className="w-full shadow-tdk-primary drop-shadow-lg sm:rounded-lg xl:w-2/3"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10  sm:mx-auto sm:w-2/3 xl:flex-row">
          <p className="px-5 font-light sm:px-0 md:text-xl xl:w-1/3 ">
            A konferencia alkalmával 270 dolgozat került bemutatásra, melyből 190 hazai, illetve 80 külföldi hallgatók
            által készített. Mindemellett 70 hazai illetve külföldi szakemberek által vezetett műhelymunkába is
            becsatlakozhattak az egyeteme hallgatói.
          </p>
          <img
            src={tdkPicture3}
            alt="TDK"
            className="w-full shadow-tdk-primary drop-shadow-lg sm:rounded-lg xl:w-2/3"
          />
        </div>
        <div className="flex flex-col gap-10 px-5 py-20 md:flex-row">
          {/* <Link
            to="/osszefoglalo"
            className="rounded-full border border-gray-300 px-10 py-4 font-semibold uppercase drop-shadow-md hover:underline xl:text-xl"
          >
            Összefoglaló 2024 →
          </Link> */}
          {/* <Link
            to="/idovonal"
            className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          >
            Információk →
          </Link> */}
        </div>
      </div>
      <Sponsors />
    </>
  );
};

export default withLayout(Landing);
