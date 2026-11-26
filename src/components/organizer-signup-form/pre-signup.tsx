import { useState } from "react";
import { Link } from "react-router-dom";

import { formatRomanianDateTime } from "../../utils/datetime.util";
import {
  organizerSignupEndMs as signupEndMs,
  organizerSignupCtaLabel,
  organizerSignupStartMs as signupStartMs,
  useOrganizerSignupPhase,
} from "../../utils/organizer-signup.util";

const PreSignup = ({ onStart }: { onStart: () => void }) => {
  const [acceptedRules, setAcceptedRules] = useState(false);
  const phase = useOrganizerSignupPhase();
  const isOpen = phase === "open";

  const buttonLabel = organizerSignupCtaLabel(phase, "Jelentkezés");

  return (
    <div className="space-y-8">
      <div className="rounded-lg border-l-4 border-tdk-accent bg-tdk-accent/5 px-5 py-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-tdk-accent">Jelentkezési időszak</p>
        <p className="mt-1 text-lg font-semibold text-gray-900">
          {formatRomanianDateTime(signupStartMs)} – {formatRomanianDateTime(signupEndMs)}
        </p>
      </div>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Válogatási szempontok</h2>
        <ul className="ml-5 list-disc space-y-3 leading-relaxed text-gray-700 marker:text-tdk-accent">
          <li>
            A szervezőket a <span className="font-semibold">kifejtős kérdésekre</span> adott válaszaik alapján
            válogatjuk be a szervezői csapatunkba.
          </li>
          <li>
            Túljelentkezés esetén a szervezőket az{" "}
            <a
              className="text-tdk-accent transition-opacity hover:text-tdk-accent/75 hover:underline"
              href="https://docs.google.com/spreadsheets/d/1DTMlc9kZvpVGmCKLQQJDZs4T9PgqcWPWfQjfjcqJs6U/edit#gid=1404488936"
              target="_blank"
              rel="noreferrer"
            >
              MMDSZ belső működési szabályzatában található Pontrendszer
            </a>{" "}
            alapján válogatjuk. Pontegyenlőségek esetén a kifejtős kérdésekre adott válaszok alapján fogunk rangsort
            felállítani (a rendezvényeken való szervezési pontokat a megújult BMSZ kritériumai alapján bíráljuk el).
          </li>
          <li>
            Azoknak a diákoknak, akik ebben az időintervallumban részképzésen vettek részt, elfogadjuk a kihagyott
            félév(ek)nek megfelelő előző évi félév(ek) tevékenységét, tehát az utolsó két aktív félévet.
          </li>
          <li>Az elsőéves hallgatók külön elbírálásban részesülnek (30 hely: 10 pontrendszer, 20 kifejtős kérdés).</li>
          <li>
            Külön helyet biztosítunk a Sapientia EMTE, a BBTE – Pedagógia szak és a Marosvásárhelyi Művészeti Egyetemről
            jelentkező hallgatók részére (15 hely – kifejtős kérdések).
          </li>
          <li>
            A szervezői jelentkezés során megjelölt munkacsoport csak irányadó a főszervezők számára; a főszervezők
            fenntartják a jogot arra, hogy a jelentkezőt ettől eltérően más munkacsoportba sorolják be.
          </li>
        </ul>
      </section>

      <div className="space-y-6 border-t border-gray-200 pt-8">
        {isOpen && (
          <label htmlFor="terms" className="flex cursor-pointer items-start gap-3 text-sm text-neutral-600">
            <input
              id="terms"
              type="checkbox"
              checked={acceptedRules}
              onChange={() => setAcceptedRules(!acceptedRules)}
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-tdk-accent"
            />
            <span>
              Elolvastam és tisztában vagyok a{" "}
              <Link to="/szabalyzat" target="_blank" className="text-tdk-accent underline">
                weboldalon található szabályzattal
              </Link>{" "}
              és a{" "}
              <Link to="/szervezok" target="_blank" className="text-tdk-accent underline">
                munkacsoportok feladatköreivel
              </Link>
              .
            </span>
          </label>
        )}
        <div className="flex justify-center sm:justify-end">
          <button
            className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md transition hover:underline disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:no-underline xl:text-lg"
            onClick={onStart}
            disabled={!isOpen || !acceptedRules}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreSignup;
