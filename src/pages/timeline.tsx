import { useRef } from "react";
import { Helmet } from "react-helmet";
import { withLayout } from "../layout/withLayout";
// import SignupWrapper from "../components/signup-wrapper";

const Timeline = () => {
  const initialSignupContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex justify-center py-20 px-6">
      <Helmet>
        <title>32. TDK - Információ</title>
      </Helmet>
      <ol className="relative space-y-20 border-l border-gray-300 lg:w-1/2">
        <li className="mb-4 ml-10 font-light text-gray-500 sm:hidden">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          Görgess lefele, hogy többet megtudj a TDK-n való részvételhez szükséges lépésekről.
        </li>
        <li className="ml-10">
          <div
            className="absolute -left-1.5 mt-1.5 h-3 w-3 scroll-mt-32 rounded-full border-2 border-white bg-gray-500"
            ref={initialSignupContainerRef}
          ></div>
          <time className="mb-10 font-light leading-none text-gray-500">2025. március 3. - 2025 március 7.</time>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">Jelentkezés és absztraktok feltöltése</h3>
          {/* <SignupWrapper scrollToRef={initialSignupContainerRef} signupEnabled={true} />
           */}
          <button
            disabled
            className="pointer-events-none mt-12 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white opacity-50 drop-shadow-md grayscale hover:underline xl:text-xl"
          >
            Jelentkezés →
          </button>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <time className="mb-10 font-light leading-none text-gray-500">2025. március 10-15.</time>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">Absztraktok ellenőrzése</h3>
          <div className="m-6">
            <p className="text-gray-500">
              Miután a tanárok ellenőrzik az absztraktokat, az el nem fogadott absztraktokat van lehetőség kijavítani és
              újra feltölteni.{" "}
            </p>
            <p className="text-gray-500">Az absztraktok elbírálásáról email-ben értesítenek majd a szervezők.</p>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div className="">
            <time className="mb-10 font-light leading-none text-gray-500">2024. március 15-18.</time>
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">Javított absztraktok feltöltése</h3>
            {/* <div className="m-6"><SecondUploadForm /></div>  */}
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
            <time className="mb-10 font-light leading-none text-gray-500">2024. március 21-30.</time>
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">Regisztrációs díj befizetése</h3>
            <ul className="ml-8 list-disc pt-10">
              <li>Belföldi hallgatók számára: 140 RON- 1. dolgozat, 110 RON- 2. dolgozat*</li>
              <li>Poszter szekció: 120 RON- 1. dolgozat. dolgozat</li>
              <li className="pt-2">Külföldi hallgatók számára: 11000 HUF- 1. dolgozat 9000 HUF- 2. dolgozat*</li>
              <li>Poszter szekció: 10000 Ft- 1. dolgozat</li>
              {/* <li className="pt-2 font-semibold">
                Az MMDSZ kártyát felmutató diákok 10 RON kedvezményben részesülnek.
              </li> */}
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
              <h5 className="pb-2 pt-4 text-lg font-light">Banki átutalással</h5>{" "}
              <ul className="ml-6 list-disc">
                <li>
                  <b>Név: </b>ASOCIATIA STUDENTILOR MAGHIARI TARGU MURES
                </li>{" "}
                {/* <li>
                  <b>Sediu:</b> Str. Gh. Marinescu, nr. 38., jud. Mureș
                </li>{" "} */}
                <li>
                  <b>Swift kód:</b> BTRLRO22
                </li>{" "}
                <li>
                  <b>Cont bancar (RON):</b> RO76BTRLRONCRT0674086403
                </li>
                <li>
                  <b>Bankszámlaszám (HUF):</b> RO93BTRLHUFCRT0674086401
                </li>
              </ul>
            </div>{" "}
            <p className="pt-4 italic">
              Kérjük az átutalás megjegyzésében feltüntetni: “Registration Fee 32.TDK - Teljes Név”, például:
              “Registration Fee 32.TDK - Kis János”.
            </p>{" "}
            <p className="pt-6 text-sm font-light text-gray-600">
              * A befizetett díj tartalmazza a konferencián való részvételt, beleértve a gálát, valamint a promóciós
              anyagokból való részesedést (mindezt az első szerző számára).
            </p>
          </div>
        </li>
        {/* <li className="mb-10 ml-10">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <div className="">
            <h3 className="pb-4 text-2xl font-semibold text-gray-900">Prezentációk feltöltése</h3>
            <time className="mb-10 font-light leading-none text-gray-500">2024. április 8-12.</time>
            <div className="m-6">
              <PresentationUploadForm />
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm font-light text-gray-500">
              A feltöltési határidő lejárt.
              {localStorage.getItem("presentationUpload24") == "uploaded" && (
                <div>A feltöltésed megkaptuk. Találkozzunk a TDK-n!</div>
              )}
            </div>
          </div>
        </li> */}
      </ol>
    </div>
  );
};

export default withLayout(Timeline);
