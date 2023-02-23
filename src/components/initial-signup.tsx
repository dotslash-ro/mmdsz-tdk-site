import { NavLink } from "react-router-dom";
import FileUpload from "../components/file-upload";
import { serverUrl, universityList, sectionList } from "../constants";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// @ts-ignore
import agreementDocUrl from "../assets/tdk-nyilatkozat.docx";

const signupStatuses = [
  "not-signedup",
  "in-progress",
  "signed-up",
  "error",
] as const;
type SignupStatus = (typeof signupStatuses)[number];

const InitialSignupForm = () => {
  const [applicantName, setApplicantName] = useState("");
  const [university, setUniversity] = useState("");
  const [hungarianTitle, setHungarianTitle] = useState("");
  const [romanianTitle, setRomanianTitle] = useState("");
  const [englishTitle, setEnglishTitle] = useState("");
  const [studyYear, setStudyYear] = useState(0);
  const [email, setEmail] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [mission, setMission] = useState("");
  const [methods, setMethods] = useState("");
  const [results, setResults] = useState("");
  const [conclusions, setConclusions] = useState("");
  const [section, setSection] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [agreementDoc, setAgreementDoc] = useState<File>();
  const [signupStatus, setSignupStatus] =
    useState<SignupStatus>("not-signedup");

  useEffect(() => {
    const _signupStatus = localStorage.getItem("signupStatus");
    if (!_signupStatus) {
      setSignupStatus("not-signedup");
    } else if (
      signupStatuses.find((validStatus) => validStatus === _signupStatus)
    ) {
      setSignupStatus(_signupStatus as SignupStatus);
    } else {
      setSignupStatus("not-signedup");
    }
    setAcceptedTerms(false);
  }, []);

  async function onSignup() {
    if (!agreementDoc) {
      return;
    }

    // by setting status to in-progress, the spinner will display
    setSignupStatus("in-progress");

    // send applicant data to backend
    const body = JSON.stringify({
      applicantName,
      university,
      studyYear,
      email,
      hungarianTitle,
      romanianTitle,
      englishTitle,
      section,
      introduction,
      mission,
      methods,
      results,
      conclusions,
    });
    try {
      const response = await fetch(`${serverUrl}/signup`, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status != 200) {
        setSignupStatus("error");
      }
    } catch (e) {
      console.log(e);
      setSignupStatus("error");
      return;
    }
    // prepare form data for file upload
    const data = new FormData();
    data.append("files", agreementDoc);
    data.append("section", section);
    data.append("university", university);
    data.append("applicantName", applicantName);
    // upload document to backend
    try {
      const response = await fetch(`${serverUrl}/upload`, {
        method: "POST",
        body: data,
      });
      if (response.status != 200) {
        setSignupStatus("error");
      } else {
        setSignupStatus("signed-up");
        localStorage.setItem("signupStatus", "signed-up");
      }
    } catch (e) {
      console.log(e);
      setSignupStatus("error");
    }
  }

  if (signupStatus === "in-progress") {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  } else if (signupStatus === "signed-up") {
    return (
      <div className="flex h-48 flex-col items-center justify-center text-lg text-gray-600">
        Jelentkezésed sikeresen regisztráltuk!
        <div
          className="py-3 text-sm text-sky-600 hover:cursor-pointer hover:underline"
          onClick={() => {
            localStorage.removeItem("signupStatus");
            setSignupStatus("not-signedup");
            setAcceptedTerms(false);
          }}
        >
          Új dolgozat feltöltése →
        </div>
      </div>
    );
  } else if (signupStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center">
        <div className="py-6 text-center text-xl font-semibold text-red-400">
          Sajnos a jelentkezés feldolgozása alatt egy hiba lépett fel!
        </div>
        <button
          className="rounded-full bg-tdk-accent py-3 px-5 text-lg font-bold text-white hover:underline"
          onClick={() => {
            setSignupStatus("not-signedup");
          }}
        >
          Újrapbróbálkozás →
        </button>
        <div className="pt-6 text-center font-light text-gray-600">
          Ha a hiba továbbra is fent áll, vedd fel a szervezőkkel a kapcsolatot:{" "}
          <span className="text-sky-400 hover:underline">
            <a href="mailto:tdk@mmdsz.ro">tdk@mmdsz.ro </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Teljes név
        </label>
        <input
          type="text"
          id="name"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) =>
            setApplicantName((e.target as HTMLInputElement).value)
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Dolgozat címe magyarul
        </label>
        <input
          type="text"
          id="title"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) =>
            setHungarianTitle((e.target as HTMLInputElement).value)
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Dolgozat címe románul
        </label>
        <input
          type="text"
          id="title"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) =>
            setRomanianTitle((e.target as HTMLInputElement).value)
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Dolgozat címe angolul
        </label>
        <input
          type="text"
          id="title"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) => setEnglishTitle((e.target as HTMLInputElement).value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Email cím
        </label>
        <input
          type="email"
          id="email"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="universities"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Egyetem
        </label>
        <select
          id="universities"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
        >
          {universityList.map((university, index) => {
            return (
              <option
                className="text-md"
                key={index}
                onClick={(e) => setUniversity(university)}
              >
                {university}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="sections"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Témakörök
        </label>
        <select
          id="sections"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
        >
          {sectionList.map((section, index) => {
            return (
              <option
                className="text-md"
                key={index}
                onClick={() => setSection(section)}
              >
                {section}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-medium text-gray-900">Évfolyam</h3>
        <ul className="ml-4 w-full items-center rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium text-gray-900 sm:flex">
          {[...Array(6).keys()]
            .map((i) => i + 1)
            .map((i) => {
              return (
                <li
                  className="w-full border-b border-gray-200 hover:bg-gray-200 sm:border-b-0 sm:border-r"
                  key={i}
                >
                  <div
                    className="flex items-center pl-3"
                    onClick={() => {
                      setStudyYear(i);
                    }}
                  >
                    <input
                      id={`horizontal-list-radio-${i}`}
                      type="radio"
                      value={i}
                      name="list-radio"
                      className="h-4 w-4 border-gray-300 bg-gray-50 "
                    />
                    <label
                      htmlFor={`horizontal-list-radio-${i}`}
                      className="ml-2 w-full py-3 text-sm font-medium text-gray-900"
                    >
                      {i}
                    </label>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <h3 className="mt-10 mb-4 block text-lg font-medium text-gray-900">
        Dolgozat tartalmának feltöltése
      </h3>
      <div className="py-2">
        Formai követelmények:
        <ul className="list-disc py-2 text-sm text-gray-400">
          <li>
            A kivonat maximális hossza 2200 karakter (szóköz nélkül, cím
            nélkül).
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <label
          htmlFor="introduction"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Bevezetés
        </label>
        <textarea
          id="large-input"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) =>
            setIntroduction((e.target as HTMLTextAreaElement).value)
          }
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="mission"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Célkitűzések
        </label>
        <textarea
          id="mission"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => setMission((e.target as HTMLTextAreaElement).value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="methods"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Módszer
        </label>
        <textarea
          id="methods"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => setMethods((e.target as HTMLTextAreaElement).value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="results"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Eredmények
        </label>
        <textarea
          id="results"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => setResults((e.target as HTMLTextAreaElement).value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="conclusions"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Következtetés
        </label>
        <textarea
          id="conclusions"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) =>
            setConclusions((e.target as HTMLTextAreaElement).value)
          }
        />
      </div>
      <h3 className="mt-10 mb-4 block text-lg font-medium text-gray-900">
        Saját hozzájárulási nyilatkozat feltöltése
      </h3>
      <div className="ml-4">
        <p className="py-2 text-gray-600">
          A saját hozzájárulási nyilatkozat nevű dokumentum igazolja a szerző
          hozzájárulását a dolgozathoz.{" "}
          <a className="text-sky-600 underline" href={agreementDocUrl}>
            A minta dokumentum ide kattintással tölthető le.
          </a>
        </p>
        <p className="text-gray-600">
          A kék színnel kiegészített részek példaként szolgálnak az űrlap
          kitöltéséhez. Kérünk, hogy figyelmesen olvasd végig a dokumentumot
          kitöltés közben. Amennyiben további kérdések merülnének fel, keress
          minket az e-mail címünkön (tdk@mmdsz.ro), vagy írj a konferencia
          Facebook oldalán.
        </p>
        <FileUpload
          file={agreementDoc}
          setFile={setAgreementDoc}
          fileFormats=".pdf"
          id="upload-agreement"
        />
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 "
            required
            onClick={() => setAcceptedTerms(!acceptedTerms)}
          />
        </div>
        <label htmlFor="terms" className="ml-2 text-gray-600">
          A jelentkezéssel beleegyezel a szabályzatba.{" "}
          <NavLink
            to="/szabalyzat"
            target="_blank"
            className="text-sky-600 underline"
          >
            Szabáyzat elolvasása →
          </NavLink>
        </label>
      </div>
      {acceptedTerms &&
      applicantName !== "" &&
      university.length &&
      section.length &&
      hungarianTitle !== "" &&
      email != "" &&
      agreementDoc ? (
        <button
          className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          onClick={onSignup}
        >
          Jelentkezés
        </button>
      ) : (
        <button
          className="rounded-full bg-gray-300 px-10 py-4 font-semibold uppercase text-black drop-shadow-md xl:text-xl"
          disabled
          title="A jelentkezéshez ki kell töltedened az adataid és el kell fogadnod a szabáyzatot!"
        >
          Jelentkezés
        </button>
      )}
    </div>
  );
};

export default InitialSignupForm;
