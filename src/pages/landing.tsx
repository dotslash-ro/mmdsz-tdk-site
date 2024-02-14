import Sponsors from "../components/sponsors";
import { withLayout } from "../layout/withLayout";
import { Link } from "react-router-dom";
import tdkPicture1 from "../assets/tdk-pic1.png";
import tdkPicture2 from "../assets/tdk-pic2.png";
import tdkPicture3 from "../assets/tdk-pic3.png";

const Landing = () => {
  return (
    <>
      <div className="bg-tdk-primary py-20">
        <div className="z-20 flex flex-grow flex-col items-center bg-contain bg-left bg-no-repeat px-10 md:bg-dns lg:items-end xl:items-center">
          <div className="">
            <h2 className="text-left font-hero text-6xl uppercase tracking-tighter text-white md:text-5xl lg:text-right lg:text-8xl xl:text-left">
              <div>
                {" "}
                <span className="text-tdk-accent">31.</span> Tudományos
              </div>{" "}
              <div className="text-tdk-accent">Diákköri</div> Konferencia
            </h2>
          </div>
          <div className="py-8 text-left font-medium uppercase text-white md:text-lg lg:text-right lg:text-2xl xl:text-left">
            <span className="font-bold">Marosvásárhely 2024.</span> Április 24-27.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 bg-white py-20">
        <div className="flex flex-col items-center justify-center gap-10 px-5 sm:mx-auto sm:w-2/3 sm:px-0 xl:flex-row">
          <p className="font-light md:text-xl xl:w-1/3">
            Idén 30. alkalommal került megrendezésre május 10-13 között a Marosvásárhelyi Tudományos Diákköri
            Konferencia. A tudományos diákköri konferencia egyedülállónak számít, ugyanis az egyetemek magyar hallgatói
            anyanyelvükön mutathatják be tudományos dolgozataikat.
          </p>
          <img
            src={tdkPicture1}
            alt="TDK"
            className="w-full rounded-lg shadow-tdk-primary drop-shadow-lg xl:h-fit xl:w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-5 sm:mx-auto sm:w-2/3 sm:px-0 xl:flex-row-reverse">
          <p className="font-light md:text-xl xl:w-1/3">
            Az idei évben 15 külföldi meghívott előadó és 3 hazai előadó aktuális kutatásáról is hallhattak a
            érdeklődők, mindemellett 3 panel beszélgetésre is sor került amelyeken során 4 külföldi-, illetve 5 hazai
            szakember beszélgetésébe csatlakozhatott be a hallgatóság.
          </p>
          <img
            src={tdkPicture2}
            alt="TDK"
            className="w-full rounded-lg shadow-tdk-primary drop-shadow-lg xl:h-fit xl:w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-5 sm:mx-auto sm:w-2/3 sm:px-0 xl:flex-row">
          <p className="font-light md:text-xl xl:w-1/3">
            A konferencia alkalmával 209 dolgozat került bemutatásra, melyből 171 hazai illetve 38 külföldi hallgatók
            által készített.
          </p>
          <img
            src={tdkPicture3}
            alt="TDK"
            className="w-full rounded-lg shadow-tdk-primary drop-shadow-lg xl:h-fit xl:w-auto"
          />
        </div>
        <div className="flex flex-col gap-10 px-5 py-20 md:flex-row">
          <Link
            to="/osszefoglalo"
            className="rounded-full border border-gray-300 px-10 py-4 font-semibold uppercase drop-shadow-md hover:underline xl:text-xl"
          >
            Összefoglaló 2023 →
          </Link>
          <Link
            to="/jelentkezes"
            className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          >
            Információk →
          </Link>
        </div>
      </div>
      <Sponsors />
    </>
  );
};

export default withLayout(Landing);
