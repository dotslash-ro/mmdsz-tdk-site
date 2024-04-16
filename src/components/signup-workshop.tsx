import { useEffect, useState } from "react";
import { workshopServerUrl } from "../constants";
import { ClipLoader } from "react-spinners";
import WorkshopSignupButton from "./workshop-signup-btn";

export type WorkshopType = {
  id: number;
  title: string;
  speakers: string;
  department: string;
  description: string;
  location?: string;
  date?: string;
  maxAttendeeCount: number;
  applicantsCount: number;
  minYear: number;
  maxYear: number;
};

type SignupWorkshopProps = {
  workshop: WorkshopType;
  email: string;
  name: string;
  section: string;
  studyYear: number;
  canSignUp: boolean;
  onSignupSuccess: (workshop: WorkshopType) => void;
  onSignupStart: () => void;
  disableButton: boolean;
};

const SignupWorkshop = ({
  workshop,
  email,
  name,
  canSignUp,
  studyYear,
  section,
  onSignupSuccess,
  onSignupStart,
  disableButton,
}: SignupWorkshopProps) => {
  const [hasSignedUp, setHasSignedUp] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${workshopServerUrl}/application/has-applied`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, workshopId: workshop.id }),
    }).then((resp) =>
      resp.json().then(({ hasSignedUp: _hasSignedUp }: { hasSignedUp: boolean }) => {
        setHasSignedUp(_hasSignedUp);
        setLoading(false);
      })
    );
  }, []);

  async function onSignup() {
    onSignupStart();
    setLoading(true);
    await fetch(`${workshopServerUrl}/application`, {
      method: "POST",
      body: JSON.stringify({ email, workshopId: workshop.id, name, section, studyYear }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    setHasSignedUp(true);
    onSignupSuccess({ ...workshop, applicantsCount: workshop.applicantsCount + 1 });
  }

  async function onCancelSignup() {
    setLoading(true);
    await fetch(`${workshopServerUrl}/application`, {
      method: "DELETE",
      body: JSON.stringify({ email: email, workshopId: workshop.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    setHasSignedUp(false);
    onSignupSuccess({ ...workshop, applicantsCount: workshop.applicantsCount - 1 });
  }

  if (!workshop) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="">
      <h3 className="text-md font-medium text-gray-500">{workshop.speakers}:</h3>
      <h2 className="pb-2 text-lg font-bold">{workshop.title}</h2>
      {!!workshop.location && (
        <div className="ml-4 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-gray-600"
          >
            <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z" />
          </svg>
          <h4 className="text-sm text-gray-600">{workshop.location}</h4>
        </div>
      )}
      {workshop.date && (
        <div className="ml-4 flex items-center gap-3 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-gray-600">
            <path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
          </svg>
          <h4 className="text-sm text-gray-600">
            {new Intl.DateTimeFormat("hu-HU", { dateStyle: "medium", timeStyle: "short" }).format(
              new Date(workshop.date)
            )}
          </h4>
        </div>
      )}
      <div className="ml-4 flex items-center gap-3 pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-gray-600">
          <path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z" />
        </svg>
        <h4 className="text-sm text-gray-600">
          {workshop.department} {workshop.minYear}. - {workshop.maxYear}. év
        </h4>
      </div>
      <p className="whitespace-pre-line pt-6 text-gray-700"> {workshop.description}</p>
      <div className="pt-4">
        <b>Elérhető helyek száma: </b> {workshop.maxAttendeeCount - workshop.applicantsCount}/
        {workshop.maxAttendeeCount} {workshop.maxAttendeeCount - workshop.applicantsCount > 0 ? " fennmaradó hely" : ""}
      </div>
      <div className="flex justify-end pt-4">
        <WorkshopSignupButton
          canSignUp={canSignUp}
          hasLoggedIn={!!email}
          hasSignedUp={hasSignedUp}
          onSignUp={onSignup}
          onCancelSignup={onCancelSignup}
          loading={loading}
          noOfAvailableSeats={workshop.maxAttendeeCount}
          disable={disableButton}
        />
      </div>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
    </div>
  );
};

export default SignupWorkshop;
