import { MutableRefObject, useEffect, useState } from "react";
import PersonalInfo, { PersonalInfoSchema } from "./personal-info";
import DocumentInfo, { DocumentInfoSchema } from "./document-info";
import { CoAuthorInfoSchema } from "./coauthor-info";
// @ts-ignore
import exampleAgreementDocUrl from "../assets/tdk-pelda-nyilatkozat.docx";
// @ts-ignore
import agreementDocUrl from "../assets/tdk-nyilatkozat.docx";
import AgreementDoc from "./agreement-doc";
import { CoordinatorInfoSchema } from "./coordinator-info";
import ConfirmSignup from "./confirm-signup";
import CoAuthorInfos from "./coauthor-info-wrapper";
import CoordinatorInfos from "./coordinator-info-wrapper";
import { serverUrl } from "../constants";
import { ClipLoader } from "react-spinners";

const signupSteps = [
  "preSignup",
  "personalInfo",
  "documentInfo",
  "coAuthorInfo",
  "coordinatorInfo",
  "agreementDoc",
  "confirmSignup",
] as const;
export type SignupStep = (typeof signupSteps)[number];

const signupStatuses = ["not-signedup", "signed-up", "error"] as const;
type SignupStatus = (typeof signupStatuses)[number];

const SignupWrapper = ({
  scrollToRef,
}: {
  scrollToRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const [signupStatus, setSignupStatus] =
    useState<SignupStatus>("not-signedup");

  const [currentStep, setCurrentStep] = useState<SignupStep>("preSignup");
  const [personalInfo, setPersonalInfo] = useState<
    PersonalInfoSchema | undefined
  >(undefined);
  const [documentInfo, setDocumentInfo] = useState<
    DocumentInfoSchema | undefined
  >(undefined);
  const [coAuthorInfos, setCoAuthorInfos] = useState<Array<CoAuthorInfoSchema>>(
    []
  );
  const [coordinatorInfos, setCoordinatorInfos] = useState<
    Array<CoordinatorInfoSchema>
  >([]);
  const [agreementDoc, setAgreementDoc] = useState<File>();
  const [loading, setLoading] = useState(false);

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
  }, []);

  useEffect(() => {
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  const onSignup = async () => {
    if (!personalInfo || !documentInfo || !agreementDoc) {
      return;
    }
    // send applicant data to backend
    const body = JSON.stringify({
      personalInfo: {
        ...personalInfo,
        university:
          personalInfo.university == "Egyéb"
            ? personalInfo.otherUniversity
            : personalInfo.university,
      },
      documentInfo,
      coAuthorInfos: coAuthorInfos.map((coAuthorInfo) => ({
        ...coAuthorInfo,
        university:
          coAuthorInfo.university == "Egyéb"
            ? coAuthorInfo.otherUniversity
            : coAuthorInfo.university,
      })),
      coordinatorInfos,
    });
    try {
      setLoading(true);
      scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
      const response = await fetch(`${serverUrl}/signup`, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status != 200) {
        setLoading(false);
        setSignupStatus("error");
        return;
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSignupStatus("error");
      return;
    }
    // prepare form data for file upload
    const data = new FormData();
    data.append("files", agreementDoc);
    data.append("section", documentInfo.section);
    data.append("university", personalInfo.university);
    data.append("applicantName", personalInfo.applicantName);

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
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }

  if (signupStatus === "signed-up") {
    return (
      <div className="flex h-48 flex-col items-center justify-center text-lg text-gray-600">
        Jelentkezésed sikeresen regisztráltuk!
        <div
          className="py-3 text-sm text-sky-600 hover:cursor-pointer hover:underline"
          onClick={() => {
            localStorage.removeItem("signupStatus");
            setSignupStatus("not-signedup");
            setCurrentStep("personalInfo");
          }}
        >
          Új kivonat feltöltése →
        </div>
      </div>
    );
  }
  if (signupStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center">
        <div className="py-6 text-center text-xl font-semibold text-red-400">
          Sajnos a jelentkezés feldolgozása alatt egy hiba lépett fel!
        </div>
        <button
          className="rounded-full bg-tdk-accent py-2 px-5 text-lg font-bold uppercase text-white hover:underline"
          onClick={() => {
            setCurrentStep("personalInfo");
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

  if (currentStep == "preSignup") {
    return (
      <p className="">
        <h3 className="mb-4 mt-8 text-lg font-light text-gray-800">
          A kivonat feltöltéséhez: az alábbi adatokra lesz szükség:
        </h3>
        <ul className="ml-6 list-disc text-gray-500">
          <li>
            A kivonat maximális hossza 2200 karakter (szóköz nélkül, cím
            nélkül).{" "}
          </li>
          <li>A cím 3 nyelven (magyar, román, angol).</li>
          <li>
            A kivonat szövegének az alábbi szerkezetet kell követnie: bevezetés,
            célkitűzések, módszerek, eredmények és következtetés.
          </li>
        </ul>
        <h3 className="mb-4 mt-6 text-lg font-light text-gray-800">
          A beküldéshez az alábbi adatokra lesz szükség:{" "}
        </h3>
        <ul className="ml-6 list-disc text-gray-500">
          <li>A szerző neve, egyetem, évfolyam, email, kar, telefonszám.</li>
          <li>Társszerzők neve, e-mail címe, egyeteme, évfolyama, kara </li>
          <li>Témavezető neve és beosztása, valamint egyetem (intézet). </li>
        </ul>
        <h3 className="mb-4 mt-6 text-lg font-light text-gray-800">
          Saját hozzájárulási nyilatkozat
        </h3>
        <p className="mt-8 text-gray-500">
          A tavalyi évhez hasonlóan idén is szükséges a saját hozzájárulási
          nyilatkozat kitöltése.{" "}
        </p>
        <p className="mt-4 text-gray-500">
          Egy kitöltött, példa dokumentum{" "}
          <a className="text-sky-600 underline" href={exampleAgreementDocUrl}>
            ide{" "}
          </a>
          kattintással tölthető le.
        </p>
        <p className="mt-4 text-gray-500">
          Az eredeti, kitöltendő dokumentum{" "}
          <a className="text-sky-600 underline" href={agreementDocUrl}>
            innen tölthető le.
          </a>
        </p>
        <p className="text-gray-500">
          A kék színnel kiegészített részek példaként szolgálnak az űrlap
          kitöltéséhez. Kérünk, hogy figyelmesen olvasd végig a dokumentumot
          kitöltés közben.
        </p>
        <p className="mt-4 text-gray-500">
          A fájlra vonatkozó követelmények:
          <ul className="ml-4 list-disc">
            <li>.pdf fájl formátum</li>
            <li>Maximum 1 MB fájl méret.</li>
          </ul>
        </p>
        <p className="mt-4 text-gray-500">
          Amennyiben további kérdések merülnének fel, keress minket az e-mail
          címünkön (tdk@mmdsz.ro), vagy írj a konferencia Facebook oldalán.
        </p>
        <button
          className="mt-6 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          onClick={() => setCurrentStep("personalInfo")}
        >
          Jelentkezés
        </button>
      </p>
    );
  }

  if (currentStep == "personalInfo") {
    return (
      <PersonalInfo
        setPersonalInfo={setPersonalInfo}
        setCurrentStep={setCurrentStep}
      />
    );
  }
  if (currentStep == "documentInfo") {
    return (
      <DocumentInfo
        setDocumentInfo={setDocumentInfo}
        setCurrentStep={setCurrentStep}
      />
    );
  }
  if (currentStep == "coAuthorInfo") {
    return (
      <CoAuthorInfos
        setCoAuthorInfosParent={setCoAuthorInfos}
        setCurrentStep={setCurrentStep}
      />
    );
  }
  if (currentStep == "coordinatorInfo") {
    return (
      <CoordinatorInfos
        setCoordinatorInfosParent={setCoordinatorInfos}
        setCurrentStep={setCurrentStep}
      />
    );
  }
  if (currentStep == "agreementDoc") {
    return (
      <AgreementDoc
        setAgreementDoc={setAgreementDoc}
        agreementDoc={agreementDoc}
        setCurrentStep={setCurrentStep}
      />
    );
  }

  if (currentStep == "confirmSignup") {
    return (
      <ConfirmSignup
        personalInfo={personalInfo}
        documentInfo={documentInfo}
        coAuthorInfos={coAuthorInfos}
        agreementDoc={agreementDoc}
        coordinatorInfos={coordinatorInfos}
        onSignup={onSignup}
      />
    );
  }
  return <div>All done</div>;
};

export default SignupWrapper;
