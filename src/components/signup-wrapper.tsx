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
  const [dataUploaded, setDataUploaded] = useState(false);

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
    // fetch signup status from localstorage
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

    // fetch dataUploaded from localstorage
    const _dataUploaded = localStorage.getItem("dataUploaded");
    if (_dataUploaded && _dataUploaded === "true") {
      setDataUploaded(true);
      setCurrentStep("agreementDoc");
    }

    // fetch personal info, from previous session, if any
    const _personalInfo = localStorage.getItem("personalInfo");
    if (_personalInfo) {
      setPersonalInfo(JSON.parse(_personalInfo) as PersonalInfoSchema);
    }
    // fetch document info, from previous session, if any
    const _documentInfo = localStorage.getItem("documentInfo");
    if (_documentInfo) {
      setDocumentInfo(JSON.parse(_documentInfo) as DocumentInfoSchema);
    }
    // fetch co-author info, from previous session, if any
    const _coAuthorInfos = localStorage.getItem("coAuthorInfos");
    if (_coAuthorInfos) {
      setCoAuthorInfos(JSON.parse(_coAuthorInfos) as CoAuthorInfoSchema[]);
    }
    // fetch coordinator info, from previous session, if any
    const _coordinatorInfos = localStorage.getItem("coordinatorInfos");
    if (_coordinatorInfos) {
      setCoordinatorInfos(
        JSON.parse(_coordinatorInfos) as CoordinatorInfoSchema[]
      );
    }
  }, []);

  useEffect(() => {
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  const onSignup = async () => {
    if (!personalInfo || !documentInfo || !agreementDoc) {
      return;
    }
    if (!dataUploaded) {
      // send applicant data to backend
      const body = JSON.stringify({
        personalInfo: {
          ...personalInfo,
          university:
            personalInfo.university == "Egy??b"
              ? personalInfo.otherUniversity
              : personalInfo.university,
        },
        documentInfo,
        coAuthorInfos: coAuthorInfos.map((coAuthorInfo) => ({
          ...coAuthorInfo,
          university:
            coAuthorInfo.university == "Egy??b"
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
      // after successful upload, set flag to no longer require applicant data
      setDataUploaded(true);
      localStorage.setItem("dataUploaded", "true");

      // persist form data for later use if file upload fails
      localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
      localStorage.setItem("documentInfo", JSON.stringify(documentInfo));
      localStorage.setItem("coAuthorInfos", JSON.stringify(coAuthorInfos));
      localStorage.setItem(
        "coordinatorInfos",
        JSON.stringify(coordinatorInfos)
      );
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
        Jelentkez??sed sikeresen regisztr??ltuk!
        <div
          className="py-3 text-sm text-sky-600 hover:cursor-pointer hover:underline"
          onClick={() => {
            localStorage.removeItem("signupStatus");
            localStorage.removeItem("personalInfo");
            localStorage.removeItem("documentInfo");
            localStorage.removeItem("coAuthorInfos");
            localStorage.removeItem("coordinatorInfos");
            localStorage.removeItem("dataUploaded");
            setSignupStatus("not-signedup");
            setDataUploaded(false);
            setCurrentStep("personalInfo");
          }}
        >
          ??j kivonat felt??lt??se ???
        </div>
      </div>
    );
  }
  if (signupStatus === "error" && dataUploaded) {
    return (
      <div className="flex h-48 flex-col items-center justify-center">
        <div className="py-6 text-center text-xl font-semibold text-red-400">
          Sajnos a hozz??j??rul??si nyilatkozat felt??lt??se alatt egy hiba l??pett
          fel!
        </div>
        <button
          className="rounded-full bg-tdk-accent py-2 px-5 text-lg font-bold uppercase text-white hover:underline"
          onClick={() => {
            setCurrentStep("agreementDoc");
            setSignupStatus("not-signedup");
          }}
        >
          ??jrapbr??b??lkoz??s ???
        </button>
        <div className="pt-6 text-center font-light text-gray-600">
          Ha a hiba tov??bbra is fent ??ll, vedd fel a szervez??kkel a kapcsolatot:{" "}
          <span className="text-sky-400 hover:underline">
            <a href="mailto:tdk@mmdsz.ro">tdk@mmdsz.ro </a>
          </span>
        </div>
      </div>
    );
  }

  if (signupStatus === "error" && !dataUploaded) {
    return (
      <div className="flex h-48 flex-col items-center justify-center">
        <div className="py-6 text-center text-xl font-semibold text-red-400">
          Sajnos egy hiba l??pett fel a jelentkez??s feldolgoz??sa alatt.
        </div>
        <button
          className="rounded-full bg-tdk-accent py-2 px-5 text-lg font-bold uppercase text-white hover:underline"
          onClick={() => {
            setCurrentStep("personalInfo");
            setSignupStatus("not-signedup");
          }}
        >
          ??jrapbr??b??lkoz??s ???
        </button>
        <div className="pt-6 text-center font-light text-gray-600">
          Ha a hiba tov??bbra is fent ??ll, vedd fel a szervez??kkel a kapcsolatot:{" "}
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
          A kivonat felt??lt??s??hez: az al??bbi adatokra lesz sz??ks??g:
        </h3>
        <ul className="ml-6 list-disc text-gray-500">
          <li>
            A kivonat maxim??lis hossza 2200 karakter (sz??k??z n??lk??l, c??m
            n??lk??l).{" "}
          </li>
          <li>A c??m 3 nyelven (magyar, rom??n, angol).</li>
          <li>
            A kivonat sz??veg??nek az al??bbi szerkezetet kell k??vetnie: bevezet??s,
            c??lkit??z??sek, m??dszerek, eredm??nyek ??s k??vetkeztet??s.
          </li>
        </ul>
        <h3 className="mb-4 mt-6 text-lg font-light text-gray-800">
          A bek??ld??shez az al??bbi adatokra lesz sz??ks??g:{" "}
        </h3>
        <ul className="ml-6 list-disc text-gray-500">
          <li>A szerz?? neve, egyetem, ??vfolyam, email, kar, telefonsz??m.</li>
          <li>T??rsszerz??k neve, e-mail c??me, egyeteme, ??vfolyama, kara </li>
          <li>T??mavezet?? neve ??s beoszt??sa, valamint egyetem (int??zet). </li>
        </ul>
        <h3 className="mb-4 mt-6 text-lg font-light text-gray-800">
          Saj??t hozz??j??rul??si nyilatkozat
        </h3>
        <p className="mt-8 text-gray-500">
          A tavalyi ??vhez hasonl??an id??n is sz??ks??ges a saj??t hozz??j??rul??si
          nyilatkozat kit??lt??se.{" "}
        </p>
        <p className="mt-4 text-gray-500">
          Egy kit??lt??tt, p??lda dokumentum{" "}
          <a className="text-sky-600 underline" href={exampleAgreementDocUrl}>
            ide{" "}
          </a>
          kattint??ssal t??lthet?? le.
        </p>
        <p className="mt-4 text-gray-500">
          Az eredeti, kit??ltend?? dokumentum{" "}
          <a className="text-sky-600 underline" href={agreementDocUrl}>
            innen t??lthet?? le.
          </a>
        </p>
        <p className="text-gray-500">
          A k??k sz??nnel kieg??sz??tett r??szek p??ldak??nt szolg??lnak az ??rlap
          kit??lt??s??hez. K??r??nk, hogy figyelmesen olvasd v??gig a dokumentumot
          kit??lt??s k??zben.
        </p>
        <p className="mt-4 text-gray-500">
          A f??jlra vonatkoz?? k??vetelm??nyek:
          <ul className="ml-4 list-disc">
            <li>.pdf f??jl form??tum</li>
            <li>Maximum 1 MB f??jl m??ret.</li>
          </ul>
        </p>
        <p className="mt-4 text-gray-500">
          Amennyiben tov??bbi k??rd??sek mer??ln??nek fel, keress minket az e-mail
          c??m??nk??n (tdk@mmdsz.ro), vagy ??rj a konferencia Facebook oldal??n.
        </p>
        <button
          className="mt-6 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          onClick={() => setCurrentStep("personalInfo")}
        >
          Jelentkez??s
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
