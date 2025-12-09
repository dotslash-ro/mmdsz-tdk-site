import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { type SignupStep } from ".";
import { organizerSignupEndUnix } from "../../constants";

const PreSignup = ({ setCurrentStep, enabled }: { setCurrentStep: (next: SignupStep) => void; enabled: boolean }) => {
  const [acceptedRules, setAcceptedRules] = useState(false);
  const [live, setLive] = useState(Date.now() / 1000 < organizerSignupEndUnix);

  useEffect(() => {
    const interval = setInterval(() => setLive(Date.now() / 1000 < organizerSignupEndUnix), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      A szervezői válogatást a következő kritériumok szerint valósítjuk meg:
      <ul className="ml-6 list-disc">
        <li>
          a szervezőket a <span className="font-semibold">kifejtős kérdésekre</span> adott válaszaik alapján válogatjuk
          be a szervezői csapatunkba{" "}
        </li>
        <li>
          túljelentkezés esetén a szervezőket az{" "}
          <a
            className="text-tdk-accent transition-opacity hover:text-tdk-accent/75 hover:underline"
            href="https://docs.google.com/spreadsheets/d/1DTMlc9kZvpVGmCKLQQJDZs4T9PgqcWPWfQjfjcqJs6U/edit#gid=1404488936"
            target="_blank"
          >
            MMDSZ belső működési szabályzatában található Pontrendszer
          </a>{" "}
          alapján válogatjuk. Pontegyenlőségek esetén a kifejtős kérdésekre adott válaszok alapján fogunk rangsort
          felállítani (a rendezvényeken való szervezési pontokat, a megújult BMSZ kritériumai alapján bíráljuk el){" "}
        </li>
        <li>
          azoknak a diákoknak, akik ebben az időintervallumban részképzésen vettek részt, elfogadjuk a kihagyott
          félév(ek)nek megfelelő előző évi félév(ek) tevékenységét, tehát az utolsó két aktív félévet
        </li>
        <li>az elsőéves hallgatók külön elbírálásban részesülnek (30 hely: 10 pontrendszer, 20 kifejtős kérdés)</li>
        <li>
          külön helyet biztosítunk a Sapientia EMTE, a BBTE - Pedagógia szak és a Marosvásárhelyi Művészeti Egyetemről
          jelentkező hallgatók részére (15 hely - kifejtős kérdések)
        </li>
        <li>
          a szervezői jelentkezés során megjelölt munkacsoport csak irányadó a főszervezők számára; a főszervezők
          fenntartják a jogot arra, hogy a jelentkezőt ettől eltérően más munkacsoportba sorolják be
        </li>
      </ul>
      <div className="pt-5 font-semibold">Jelentkezési határidő: 2025. december 12. 23:59</div>
      {enabled && live ? (
        <>
          <div className="mb-6 mt-10 flex items-start">
            <div className="ml-4 flex h-5 items-center">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedRules}
                onChange={() => setAcceptedRules(!acceptedRules)}
                className="focus:ring-3 h-5 w-5 cursor-pointer rounded border border-tdk-accent bg-gray-50 accent-tdk-accent focus:ring-tdk-accent"
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-neutral-600">
              Elolvastam és tisztában vagyok a{" "}
              <Link to="/szabalyzat" target="_blank" className="text-tdk-accent underline">
                weboldalon található szabályzattal
              </Link>{" "}
              és a{" "}
              <Link to="/szervezok" target="_blank" className="text-tdk-accent underline">
                munkacsoportok feladatköreivel.
              </Link>
            </label>
          </div>
          <button
            className="mt-6 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline disabled:opacity-50 disabled:hover:cursor-not-allowed xl:text-xl"
            onClick={() => setCurrentStep("organizerInfo")}
            disabled={!acceptedRules}
          >
            Jelentkezés
          </button>
        </>
      ) : (
        <div className="py-20 text-center text-sm font-medium text-gray-700">
          A szervezői jelentkezés 2024. december 20.-án lezárult.
        </div>
      )}
    </div>
  );
};

export default PreSignup;
