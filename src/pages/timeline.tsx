import { useEffect, useRef } from "react";
import PresentationUpload from "../components/presentation-upload";
import SecondUploadForm from "../components/second-upload";
import SignupWrapper from "../components/signup-wrapper";
import { withLayout } from "../layout/withLayout";

const Timeline = () => {
  const initialSignupContainerRef = useRef<HTMLDivElement | null>(null);

  // TODO: Remove this when the signup starts
  useEffect(() => {
    localStorage.removeItem("signupStatus");
  }, []);


  return (
    <div className="flex justify-center py-20 px-6">
      <ol className="relative space-y-32 border-l border-gray-300 lg:w-1/2">
        <li className="mb-4 ml-10 font-light text-gray-500">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          Görgess lefele, hogy többet megtudj a TDK-n való részvételhez szükséges lépésekről.
        </li>
        <li className="mb-10 ml-10">
          <div
            className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"
            ref={initialSignupContainerRef}
          ></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">Jelentkezés és dolgozatok feltöltése</h3>
          <time className="mb-10 font-light leading-none text-gray-500">2024. február 26. - 2024 március 3.</time>
          <div>
            <SignupWrapper scrollToRef={initialSignupContainerRef} />
          </div>
        </li>
        {/* <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">Dolgozatok ellenőrzése</h3>
          <time className="mb-10 font-light leading-none text-gray-500">2023. március 13-20.</time>
          <div className="m-6">
            <p className="text-gray-500">
              Miután a tanárok ellenőrzik a dolgozatokat, az el nem fogadott dolgozatokat van lehetőség kijavítani és
              újra feltölteni.{" "}
            </p>
            <p className="text-gray-500">A dolgozatok elbírálásáról email-ben értesítenek majd a szervezők.</p>
          </div>
        </li> */}
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div className="pointer-events-none opacity-50 grayscale">
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">Javított dolgozatok feltöltése</h3>
            <time className="mb-10 font-light leading-none text-gray-500">2023. március 10-16.</time>
            <div className="m-6">
              <SecondUploadForm />
            </div>
          </div>
        </li>
        {/* <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div>
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">A dolgozatok végső elbírálása</h3>
            <time className="mb-10 font-light leading-none text-gray-500">2023. március 27-29.</time>
            <div className="m-6">
              <p className="text-gray-500">A kijavított dolgozatokat ismét ellenőrzik a szervezők és tanárok.</p>
              <p className="text-gray-500">
                A bemutatásra választott dolgozatokról a szervezők email-ben értesítik majd a jelentkezőket.
              </p>
            </div>
          </div>
        </li> */}
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div>
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">Regisztrációs díj befizetése</h3>
            <time className="mb-10 font-light leading-none text-gray-500">2024. március 20-29.</time>
            <ul className="ml-8 list-disc pt-10">
              <li>Belföldi hallgatók számára: 130 RON- 1. dolgozat, 110 RON- 2. dolgozat*</li>
              <li>Poszter szekció: 110 RON- 1. dolgozat. dolgozat</li>
              <li className="pt-2">Külföldi hallgatók számára: 10500 Ft- 1. dolgozat 9000, Ft- 2. dolgozat*</li>
              <li>Poszter szekció: 9000 Ft- 1. dolgozat dolgozat</li>
              <li className="pt-2 font-semibold">Az MMDSZ kártyát felmutató diákok 10% kedvezményben részesülnek.</li>
            </ul>{" "}
            <h4 className="pt-4 pb-2 font-bold">Fizetési lehetőségek:</h4>{" "}
            <div>
              <h5 className="pb-2 pt-4 text-lg font-light">Személyesen</h5>{" "}
              <p>
                A Marosvásárhelyi Magyar Diákszövetség székházában (Nicolae Grigorescu 15A/1), irodaprogramban. (Az
                irodaprogram megtalálható a kapcsolat menüpontban.)
              </p>
            </div>{" "}
            <div>
              <h5 className="pb-2 pt-4 text-lg font-light">
                Banki átutalással (kizárólagosan külföldön tanuló diákok számára):
              </h5>{" "}
              <ul className="ml-6 list-disc">
                <li>
                  <b>Asociația Studenților Maghiari din Târgu Mureș CIF:</b> 8434501
                </li>{" "}
                <li>
                  <b>Sediu:</b> Str. Gh. Marinescu, nr. 38., jud. Mureș
                </li>{" "}
                <li>
                  <b>Banca Transilvania Codul Swift:</b> BTRLRO22
                </li>{" "}
                <li>
                  <b>Cont bancar:</b> RO 06 BTRL RONCRT 0674086402
                </li>
              </ul>
            </div>{" "}
            <p className="pt-4 italic">
              Kérjük az átutalás megjegyzésében feltüntetni: “Registration Fee 31.TDK - Teljes Név”, például:
              “Registration Fee 31.TDK - Kis János”.
            </p>{" "}
            <p className="pt-6 text-sm font-light text-gray-600">
              * A befizetett díj tartalmazza a konferencián való részvételt, beleértve a gálát, valamint a promóciós
              anyagokból való részesedést (mindezt az első szerző számára).
            </p>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div className="pointer-events-none opacity-50 grayscale">
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">Prezentációk feltöltése</h3>
            <time className="mb-10 font-light leading-none text-gray-500">2023. április 1-5.</time>
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
