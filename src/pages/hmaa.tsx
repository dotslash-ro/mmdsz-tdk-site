import { withLayout } from "../layout/withLayout";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import hmaaBg from "../assets/hmaa-bg.jpeg";

const hmaaSignupUrl = "https://forms.gle/aK8akVhhC47B7Yz89";
const hmaaSignupOpenAt = new Date("2026-05-11T20:00:00+03:00").getTime();

const HMAA = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const updateSignupState = () => setIsSignupOpen(Date.now() >= hmaaSignupOpenAt);

    updateSignupState();

    if (Date.now() >= hmaaSignupOpenAt) {
      return;
    }

    const timeout = window.setTimeout(updateSignupState, hmaaSignupOpenAt - Date.now());

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="mx-auto">
      <Helmet>
        <title>33. TDK - HMAA</title>
      </Helmet>
      <div className="w-full">
        <div className="mx-auto max-w-prose sm:px-10">
          <div className="overflow-hidden sm:h-[50vh] sm:max-h-[50vh]">
            <img src={hmaaBg} className="h-auto w-full object-contain object-top sm:h-full sm:object-cover" />
          </div>
        </div>
        <div className="prose mx-auto px-10 py-16 prose-a:text-tdk-accent prose-a:hover:underline md:py-20">
          <p>Kedves TDK-zó diákok!</p>
          <p>
            Az Amerikai Magyar Orvosszövetség Erdélyi Tagozata (HMAA Transylvanian Chapter) pályázati lehetőséget hirdet
            az évente megrendezett találkozóján való részvételre, Sarasotába, október 25. és 30. között.
          </p>
          <p>
            A kiválasztott erdélyi hallgatók Florida méltán híres tengerpartján mutathatják be dolgozatukat, valamint
            lehetőségük nyílik tapasztalatcserére más résztvevőkkel.
          </p>
          <p>
            A kiválasztási folyamat két szakaszból áll: egy előzetes (preszelekciós) körből, valamint az ezt követő
            személyes interjúból.
          </p>
          <p>A preszelekcióhoz az alábbi dokumentumok benyújtása szükséges:</p>
          <ol>
            <li>Igazolás arról, hogy a jelentkező részt vett a 33. Tudományos Diákköri Konferencián.</li>
            <li>Angol nyelvű absztrakt (a TDK-n bemutatott előadásé).</li>
            <li>Korábbi intézményi vagy országos TDK-részvételt igazoló okirat (ha van).</li>
          </ol>
          <p>Jelentkezni május 18., 20:00 óráig lehet az alábbi linken:</p>
          <div className="not-prose">
            {isSignupOpen ? (
              <a
                href={hmaaSignupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
              >
                Jelentkezés
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md disabled:cursor-not-allowed xl:text-lg"
              >
                Jelentkezés 20:00-tól
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(HMAA);
