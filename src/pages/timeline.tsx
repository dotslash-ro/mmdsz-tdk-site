import { useEffect, useState } from "react";
import PresentationUpload from "../components/presentation-upload";
import SecondUploadForm from "../components/second-upload";
import { withLayout } from "../layout/withLayout";

const Timeline = () => {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    document
      .querySelector(`#slide-${current > 6 ? 1 : current}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [current]);

  return (
    <div className="flex justify-center py-20 px-8">
      <button onClick={() => setCurrent(current + 1 > 6 ? 1 : current + 1)}>
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed bottom-10 right-10 z-10 h-14 w-14 fill-tdk-accent drop-shadow-md md:left-1/2"
        >
          <path
            d="m2.005 12.002c0-5.517 4.48-9.997 9.997-9.997 5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998zm6.21 1.524s1.505 1.501 3.259 3.254c.147.147.338.22.53.22s.384-.073.531-.22c1.753-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.216-.526 0-.192-.074-.384-.22-.53-.293-.293-.766-.295-1.057-.004l-1.978 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.978-1.978c-.289-.289-.762-.287-1.055.006-.146.147-.22.339-.221.53s.071.38.215.525z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
      <ol className="relative space-y-32 border-l border-gray-300 lg:w-1/2">
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-1">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Jelentkezés és dolgozatok feltöltése
          </h3>
          <time className="mb-10 font-light leading-none text-gray-500">
            2023. március 3-10.
          </time>
          <div className="flex items-center justify-center py-20 font-light text-gray-500">
            A jelentkezés határideje lejárt. Görgess lentebb hogy többet megtudj
            a következő lépésekről!
          </div>
        </li>
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-2">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Dolgozatok ellenőrzése
          </h3>
          <time className="mb-10 font-light leading-none text-gray-500">
            2023. március 13-20.
          </time>
          <div className="m-6">
            <p className="text-gray-500">
              Miután az oktatók ellenőrzik a dolgozatokat, az el nem fogadott
              dolgozatokat van lehetőség kijavítani és újra feltölteni.{" "}
            </p>
            <p className="mt-4 text-gray-500">
              Az el nem fogadott dolgozatokról e-mailben értesítenek majd a
              szervezők.
            </p>
          </div>
        </li>
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-3">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Javított dolgozatok feltöltése
          </h3>
          <time className="mb-10 font-light leading-none text-gray-500">
            2023. március 20-24.
          </time>
          <div className="pointer-events-none opacity-50 grayscale">
            <div className="m-6">
              <SecondUploadForm />
            </div>
          </div>
        </li>
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            A dolgozatok végső elbírálása
          </h3>
          <time className="mb-10 font-light leading-none text-gray-500">
            2023. március 27-29.
          </time>
          <div className="pointer-events-none opacity-50 grayscale">
            <div className="m-6">
              <p className="text-gray-500">
                A kijavított dolgozatokat ismét ellenőrzik az oktatók.
              </p>
              <p className="mt-4 text-gray-500">
                Az el nem fogadott dolgozatokról e-mailben értesítenek majd a
                szervezők.
              </p>
            </div>
          </div>
        </li>
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-5">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Regisztrációs díj befizetése
          </h3>
          <div className="pointer-events-none opacity-50 grayscale">
            <time className="mb-10 font-light leading-none text-gray-500">
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
                Az MMDSZ kártyát felmutató diákok 10 RON kedvezményben
                részesülnek, az első dolgozat esetén.
              </p>
            </div>
          </div>
        </li>
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-6">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">
            Prezentációk feltöltése
          </h3>
          <time className="mb-10 font-light leading-none text-gray-500">
            2023. április 27-30.
          </time>
          <div className="pointer-events-none opacity-50 grayscale">
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
