import { useState } from "react";
import { type SignupStep } from ".";
import { Link } from "react-router-dom";

const PreSignup = ({ setCurrentStep }: { setCurrentStep: (next: SignupStep) => void }) => {
  const [acceptedRules, setAcceptedRules] = useState(false);
  return (
    <div>
      A szervezői válogatást a következő kritériumok szerint valósítjuk meg:
      <ul className="ml-6 list-disc">
        <li>a szervezőket a motivációs kérdésekre adott válaszaik alapján válogatjuk be a szervezői csapatunkba </li>
        <li>
          túljelentkezés esetén a szervezőket az{" "}
          <a
            className="text-tdk-accent hover:underline"
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
        <li>az elsőéves hallgatók külön elbírálásban részesülnek (30 hely: 10 pontrendszer, 20 motivációs kérdések)</li>
        <li>
          külön helyet biztosítunk a Sapientia EMTE, a BBTE - Pedagógia szak és a Marosvásárhelyi Művészeti Egyetemről
          jelentkező hallgatók részére (15 hely - motivációs kérdések) -159 szervezőt áll módunkban felvenni{" "}
        </li>
      </ul>
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
          <Link to="/szervezoknek" target="_blank" className="text-tdk-accent underline">
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
    </div>
  );
};

export default PreSignup;
