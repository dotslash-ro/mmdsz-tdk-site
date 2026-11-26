import { type MutableRefObject, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { serverUrl } from "../../constants";
import { StepHeader } from "./form-ui";
import HasOrganizedForm, { type HasOrganizedFormSchema } from "./has-organized-form";
import MiscInfoForm, { type MiscInfoFormSchema } from "./misc-info-form";
import OrganizerGroupSelectForm, { type OrganizerGroupFormSchema } from "./organizer-group-form";
import OrganizerInfoForm, { type OrganizerInfoSchema } from "./organizer-info";
import PreSignup from "./pre-signup";
import QuestionsForm, { type QuestionsAnswersFormSchema } from "./questions-form";
import TraineeshipInfoForm, { type TraineeShipFormSchema } from "./traineeship-form";

export type OrganizerSignupFullSchema = {
  organizerInfo: OrganizerInfoSchema;
  traineeshipInfo: TraineeShipFormSchema;
  questionsFormData: QuestionsAnswersFormSchema;
  hasOrganizedFormData: HasOrganizedFormSchema;
  organizerGroupData: OrganizerGroupFormSchema;
  organizerMiscInfo: MiscInfoFormSchema;
};

type FormStepKey = keyof OrganizerSignupFullSchema;

/** The form steps, in the order the applicant goes through them. */
const formSteps: { key: FormStepKey; title: string }[] = [
  { key: "organizerInfo", title: "Személyes adatok" },
  { key: "traineeshipInfo", title: "Részképzés" },
  { key: "hasOrganizedFormData", title: "Tapasztalatok" },
  { key: "questionsFormData", title: "Egyéni hozzájárulás" },
  { key: "organizerGroupData", title: "TDK szervezés" },
  { key: "organizerMiscInfo", title: "Egyéb információk" },
];

export type SignupStep = "preSignup" | FormStepKey;

const signupStatuses = ["not-signedup", "signed-up", "error"] as const;
export type SignupStatus = (typeof signupStatuses)[number];

const signupStatusStorageKey = "organizerSignupStatus27";

const isComplete = (data: Partial<OrganizerSignupFullSchema>): data is OrganizerSignupFullSchema =>
  formSteps.every(({ key }) => data[key] !== undefined);

const OrganizerSignupMultistepForm = ({
  scrollToRef,
  enabled,
}: {
  scrollToRef: MutableRefObject<HTMLDivElement | null>;
  enabled: boolean;
}) => {
  const [signupStatus, setSignupStatus] = useState<SignupStatus>("not-signedup");
  const [currentStep, setCurrentStep] = useState<SignupStep>("preSignup");
  const [formData, setFormData] = useState<Partial<OrganizerSignupFullSchema>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem(signupStatusStorageKey);
    const validStatus = signupStatuses.find((status) => status === storedStatus);
    setSignupStatus(validStatus ?? "not-signedup");

    // personal info from a previous session, if any
    const storedOrganizerInfo = localStorage.getItem("organizerInfo");
    if (storedOrganizerInfo) {
      setFormData((prev) => ({ ...prev, organizerInfo: JSON.parse(storedOrganizerInfo) as OrganizerInfoSchema }));
    }
  }, []);

  useEffect(() => {
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  const submitSignup = async (payload: Partial<OrganizerSignupFullSchema>) => {
    if (!isComplete(payload)) {
      setSignupStatus("error");
      return;
    }
    if (signupStatus !== "not-signedup") return;

    try {
      setLoading(true);
      scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
      const response = await fetch(`${serverUrl}/organizer-signup`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
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
    localStorage.setItem(signupStatusStorageKey, "signed-up");
  };

  if (loading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} color="#f16d2d" />
      </div>
    );
  }

  if (signupStatus === "signed-up") {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <p className="text-xl font-semibold text-neutral-800">
          Köszönjük jelentkezésed, a regisztráció sikeresen megtörtént!
        </p>
        <Link to="/" className="font-medium text-tdk-accent hover:underline">
          Vissza a főoldalra →
        </Link>
      </div>
    );
  }

  if (signupStatus === "error") {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <p className="text-xl font-semibold text-red-500">
          Sajnos egy hiba lépett fel a jelentkezés feldolgozása alatt.
        </p>
        <button
          className="rounded-full bg-tdk-accent px-8 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline"
          onClick={() => {
            setSignupStatus("not-signedup");
            setCurrentStep(isComplete(formData) ? "organizerMiscInfo" : "organizerInfo");
          }}
        >
          Újrapróbálkozás →
        </button>
        <p className="font-light text-gray-600">
          Ha a hiba továbbra is fennáll, vedd fel a szervezőkkel a kapcsolatot:{" "}
          <a href="mailto:tdk@mmdsz.ro" className="text-tdk-accent hover:underline">
            tdk@mmdsz.ro
          </a>
        </p>
      </div>
    );
  }

  if (currentStep === "preSignup") {
    return <PreSignup onStart={() => setCurrentStep("organizerInfo")} enabled={enabled} />;
  }

  const stepIndex = formSteps.findIndex(({ key }) => key === currentStep);
  const { title } = formSteps[stepIndex];
  const isLastStep = stepIndex === formSteps.length - 1;

  const goBack =
    <K extends FormStepKey>(key: K) =>
    (draft: OrganizerSignupFullSchema[K]) => {
      setFormData((prev) => ({ ...prev, [key]: draft }));
      setCurrentStep(stepIndex === 0 ? "preSignup" : formSteps[stepIndex - 1].key);
    };

  const goNext =
    <K extends FormStepKey>(key: K) =>
    (data: OrganizerSignupFullSchema[K]) => {
      const next = { ...formData, [key]: data };
      setFormData(next);
      if (isLastStep) {
        submitSignup(next);
      } else {
        setCurrentStep(formSteps[stepIndex + 1].key);
      }
    };

  const stepProps = <K extends FormStepKey>(key: K) => ({
    defaultValues: formData[key],
    onNext: goNext(key),
    onBack: goBack(key),
  });

  return (
    <div>
      <StepHeader step={stepIndex + 1} total={formSteps.length} title={title} />
      {currentStep === "organizerInfo" && <OrganizerInfoForm {...stepProps("organizerInfo")} />}
      {currentStep === "traineeshipInfo" && <TraineeshipInfoForm {...stepProps("traineeshipInfo")} />}
      {currentStep === "hasOrganizedFormData" && <HasOrganizedForm {...stepProps("hasOrganizedFormData")} />}
      {currentStep === "questionsFormData" && <QuestionsForm {...stepProps("questionsFormData")} />}
      {currentStep === "organizerGroupData" && <OrganizerGroupSelectForm {...stepProps("organizerGroupData")} />}
      {currentStep === "organizerMiscInfo" && <MiscInfoForm {...stepProps("organizerMiscInfo")} />}
    </div>
  );
};

export default OrganizerSignupMultistepForm;
