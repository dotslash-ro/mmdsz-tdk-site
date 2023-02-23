import InitialSignupForm from "../components/initial-signup";
import PresentationUpload from "../components/presentation-upload";
import SecondUploadForm from "../components/second-upload";
import { withLayout } from "../layout/withLayout";

const Timeline = () => {
  return (
    <div className="flex justify-center py-20 px-6">
      <ol className="relative space-y-32 border-l border-gray-300 lg:w-1/2">
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Jelentkezés és dolgozatok feltöltése
          </h3>
          <time className="mb-10 text-lg font-normal leading-none text-gray-500">
            2023. március 3-10.
          </time>
          <div className="m-6">
            <InitialSignupForm />
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Dolgozatok ellenőrzése
          </h3>
          <time className="mb-10 text-lg font-normal leading-none text-gray-500">
            2023. március 13-20.
          </time>
          <div className="m-6">
            <p className="text-gray-500">
              Miután a tanárok ellenőrzik a dolgozatokat, az el nem fogadott
              dolgozatokat van lehetőség kijavítani és újra feltölteni.{" "}
            </p>
            <p className="text-gray-500">
              A dolgozatok elbírálásáról email-ben értesítenek majd a szervezők.
            </p>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div
            className={
              new Date() < new Date(2023, 3, 20) ||
              new Date() > new Date(2023, 3, 24)
                ? "pointer-events-none opacity-50 grayscale"
                : ""
            }
          >
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">
              Javított dolgozatok feltöltése
            </h3>
            <time className="mb-10 text-lg font-normal leading-none text-gray-500">
              2023. március 20-24.
            </time>
            <div className="m-6">
              <SecondUploadForm />
            </div>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div
            className={
              new Date() < new Date(2023, 3, 30)
                ? "pointer-events-none opacity-50 grayscale"
                : ""
            }
          >
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">
              A dolgozatok végső elbírálása
            </h3>
            <time className="mb-10 text-lg font-normal leading-none text-gray-500">
              2023. március 27-29.
            </time>
            <div className="m-6">
              <p className="text-gray-500">
                A kijavított dolgozatokat ismét ellenőrzik a szervezők és
                tanárok.
              </p>
              <p className="text-gray-500">
                A bemutatásra választott dolgozatokról a szervezők email-ben
                értesítik majd a jelentkezőket.
              </p>
            </div>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div
            className={
              new Date() < new Date(2023, 4, 24) ||
              new Date() > new Date(2023, 4, 28)
                ? "pointer-events-none opacity-50 grayscale"
                : ""
            }
          >
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">
              Regisztrációs díj befizetése
            </h3>
            <time className="mb-10 text-lg font-normal leading-none text-gray-500">
              2023. április 24-28.
            </time>
            <div className="m-6">
              <p className="text-gray-500">
                Belföldi hallgatók számára: 120 RON- 1. dolgozat, 100 RON- 2.
                dolgozat
              </p>
              <p className="py-2 text-gray-500">
                Külföldi hallgatók számára: 10000 Ft- 1. dolgozat 9000, Ft- 2.
                dolgozat
              </p>
              <p className="font-semibold text-gray-500">
                Az MMDSZ kártyát felmutató diákok 10% kedvezményben részesülnek.
              </p>
            </div>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div
            className={
              new Date() < new Date(2023, 4, 27) ||
              new Date() > new Date(2023, 4, 30)
                ? "pointer-events-none opacity-50 grayscale"
                : ""
            }
          >
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">
              Prezentációk feltöltése
            </h3>
            <time className="mb-10 text-lg font-normal leading-none text-gray-500">
              2023. április 27-30.
            </time>
            <div className="m-6">
              <PresentationUpload />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default withLayout(Timeline);
