import { type MutableRefObject, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { serverUrl } from "../../constants";
import OrganizerInfoForm, { OrganizerInfoSchema } from "./organizer-info";
import TraineeshipInfoForm, { TraineeShipFormSchema } from "./traineeship-form";
import QuestionsForm, { QuestionsAnswersFormSchema } from "./questions-form";
import HasOrganizedForm, { HasOrganizedFormSchema } from "./has-organized-form";
import OrganizerGroupSelectForm, { OrganizerGroupFormSchema } from "./organizer-group-form";
import MiscInfoForm, { MiscInfoFormSchema } from "./misc-info-form";
import PreSignup from "./pre-signup";

const signupSteps = [
  "preSignup",
  "organizerInfo",
  "traineeshipInfo",
  "questionsAnswers",
  "hasOrganized",
  "organizerGroup",
  "miscInfo",
  "confirmSignup",
] as const;
export type SignupStep = (typeof signupSteps)[number];

const signupStatuses = ["not-signedup", "signed-up", "error"] as const;
export type SignupStatus = (typeof signupStatuses)[number];

export type OrganizerSignupFullSchema = {
  organizerInfo: OrganizerInfoSchema;
  traineeshipInfo: TraineeShipFormSchema;
  questionsFormData: QuestionsAnswersFormSchema;
  hasOrganizedFormData: HasOrganizedFormSchema;
  organizerGroupData: OrganizerGroupFormSchema;
  organizerMiscInfo: MiscInfoFormSchema;
};

const OrganizerSignupMultistepForm = ({
  scrollToRef,
  enabled,
}: {
  scrollToRef: MutableRefObject<HTMLDivElement | null>;
  enabled: boolean;
}) => {
  const [signupStatus, setSignupStatus] = useState<SignupStatus>("not-signedup");
  const [currentStep, setCurrentStep] = useState<SignupStep>("preSignup");
  const [organizerInfo, setOrganizerInfo] = useState<OrganizerInfoSchema | undefined>(undefined);
  const [traineeshipInfo, setTraineeshipInfo] = useState<TraineeShipFormSchema | undefined>(undefined);
  const [questionsFormData, setQuestionsFormData] = useState<QuestionsAnswersFormSchema | undefined>(undefined);
  const [hasOrganizedFormData, setHasOrganizedFormData] = useState<HasOrganizedFormSchema | undefined>(undefined);
  const [organizerGroupData, setOrganizerGroupData] = useState<OrganizerGroupFormSchema | undefined>(undefined);
  const [organizerMiscInfo, setOrganizerMiscInfo] = useState<MiscInfoFormSchema | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (organizerMiscInfo) {
      onSignup();
    }
  }, [organizerMiscInfo]);

  useEffect(() => {
    // fetch signup status from local storage
    const _signupStatus = localStorage.getItem("signupStatus");
    if (!_signupStatus) {
      setSignupStatus("not-signedup");
    } else if (signupStatuses.find((validStatus) => validStatus === _signupStatus)) {
      setSignupStatus(_signupStatus as SignupStatus);
    } else {
      setSignupStatus("not-signedup");
    }

    // fetch personal info, from previous session, if any
    const _organizerInfo = localStorage.getItem("organizerInfo");
    if (_organizerInfo) {
      setOrganizerInfo(JSON.parse(_organizerInfo) as OrganizerInfoSchema);
    }
  }, []);

  useEffect(() => {
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  const onSignup = async () => {
    const payload = {
      organizerInfo,
      traineeshipInfo,
      questionsFormData,
      hasOrganizedFormData,
      organizerGroupData,
      organizerMiscInfo,
    };
    const body = JSON.stringify(payload);
    console.log(body);
    if (
      !organizerGroupData ||
      !organizerInfo ||
      !traineeshipInfo ||
      !questionsFormData ||
      !hasOrganizedFormData ||
      !organizerMiscInfo
    ) {
      setSignupStatus("error");
      return;
    }
    if (signupStatus === "not-signedup") {
      // send applicant data to backend

      try {
        setLoading(true);
        scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
        const response = await fetch(`${serverUrl}/organizer-signup`, {
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
      } finally {
        setLoading(false);
      }
      setSignupStatus("signed-up");
      localStorage.setItem("signupStatus24", "signed-up");
    }
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
      <div className="h-screen items-center space-y-4 pt-20">
        <div className="text-center font-semibold text-neutral-700">
          Köszönjük jelentkezésed, a regisztráció sikeresen megtörtént!
        </div>
        <div className=" w-full text-center">
          <Link to="/" className="text-tdk-accent hover:underline">
            Vissza a főoldalra →
          </Link>
        </div>
      </div>
    );
  }

  if (signupStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center">
        <div className="py-6 text-center text-xl font-semibold text-red-400">
          Sajnos egy hiba lépett fel a jelentkezés feldolgozása alatt.
        </div>
        <button
          className="rounded-full bg-tdk-accent py-2 px-5 text-lg font-bold uppercase text-white hover:underline"
          onClick={() => {
            setCurrentStep("organizerInfo");
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
    return <PreSignup setCurrentStep={setCurrentStep} enabled={enabled} />;
  }
  if (currentStep == "organizerInfo") {
    return <OrganizerInfoForm setOrganizerInfo={setOrganizerInfo} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep == "traineeshipInfo") {
    return <TraineeshipInfoForm setTraineeshipData={setTraineeshipInfo} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep == "questionsAnswers") {
    return <QuestionsForm setQuestionsFormData={setQuestionsFormData} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep == "hasOrganized") {
    return <HasOrganizedForm setHasOrganizedInfo={setHasOrganizedFormData} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep == "organizerGroup") {
    return <OrganizerGroupSelectForm setOrganizerGroupData={setOrganizerGroupData} setCurrentStep={setCurrentStep} />;
  }
  if (currentStep == "miscInfo") {
    return <MiscInfoForm setMiscInfo={setOrganizerMiscInfo} />;
  }
  return null;
};

export default OrganizerSignupMultistepForm;
