import { useEffect, useState } from "react";
import PersonalInfo, { PersonalInfoSchema } from "./personal-info";
import DocumentInfo, { DocumentInfoSchema } from "./document-info";
import { CoAuthorInfoSchema } from "./coauthor-info";
import AgreementDoc from "./agreement-doc";
import { CoordinatorInfoSchema } from "./coordinator-info";
import ConfirmSignup from "./confirm-signup";
import CoAuthorInfos from "./coauthor-info-wrapper";
import CoordinatorInfos from "./coordinator-info-wrapper";
import { serverUrl } from "../constants";

const signupSteps = [
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

const SignupWrapper = () => {
  const [signupStatus, setSignupStatus] =
    useState<SignupStatus>("not-signedup");

  const [currentStep, setCurrentStep] = useState<SignupStep>("personalInfo");
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

  const onSignup = async () => {
    if (!personalInfo || !documentInfo || !agreementDoc) {
      return;
    }
    // send applicant data to backend
    const body = JSON.stringify({
      personalInfo,
      documentInfo,
      coAuthorInfos,
      coordinatorInfos,
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
        return;
      }
    } catch (e) {
      console.log(e);
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
  };

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
