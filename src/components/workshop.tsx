import { Ref, RefObject, useEffect, useState } from "react";
import { workshopServerUrl, workshops } from "../constants";
import { ClipLoader } from "react-spinners";
import WorkshopSignupButton from "./workshop-signup-btn";

export type WorkshopType = {
  id: string;
  title: string;
  speakers: string;
  targetAudience: string;
  description: string;
  location: string;
  date: string;
  noOfAvailableSeats: number;
  noOfTotalSeats: number;
  yearFrom: number;
  yearTo: number;
  section: string;
};

export type WorkshopProps = {
  id: string;
  email: string | undefined;
  canSignUp: boolean;
};

const Workshop = ({ id, email, canSignUp }: WorkshopProps) => {
  const [workshop, setWorkshop] = useState<WorkshopType | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);

  async function fetchWorkshopData() {
    // const resp = await fetch(`${workshopServerUrl}/workshop/${id}`);
    // if (resp.status != 200) {
    //   return null; //error, handle please
    // }
    // const data = await resp.json();
    // setWorkshop(data);

    // if (email) {
    //   const resp2 = await fetch(
    //     `${workshopServerUrl}/application/has-applied`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify({ email: email, workshopId: id }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const { hasSignedUp } = await resp2.json();
    //   setHasSignedUp(hasSignedUp);
    // }
    setWorkshop(workshops.filter((workshop) => workshop.id == id)[0]);
  }

  useEffect(() => {
    fetchWorkshopData();
  }, [id]);

  async function onSignup() {
    setLoading(true);
    const resp = await fetch(`${workshopServerUrl}/application`, {
      method: "POST",
      body: JSON.stringify({ email: email, workshopId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await fetchWorkshopData();
    setLoading(false);
  }

  async function onCancelSignup() {
    setLoading(true);
    const resp = await fetch(`${workshopServerUrl}/application`, {
      method: "DELETE",
      body: JSON.stringify({ email: email, workshopId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await fetchWorkshopData();
    setLoading(false);
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
      <h3 className="text-md font-semibold text-gray-500">
        {workshop.speakers}:
      </h3>
      <h2 className="ml-4 pt-2 pb-2 text-2xl font-bold">{workshop.title}</h2>
      {!!workshop.location.length && (
        <div className="ml-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-gray-600"
          >
            <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z" />
          </svg>
          <h4 className="ml-4 pb-2 text-sm text-gray-600">
            {workshop.location}
          </h4>
        </div>
      )}
      <div className="ml-4 flex pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-gray-600"
        >
          <path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
        </svg>
        <h4 className="ml-4 text-sm text-gray-600">{workshop.date}</h4>
      </div>
      <div className="ml-4 flex pt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-gray-600"
        >
          <path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z" />
        </svg>
        <h4 className="ml-4 pb-6 text-sm text-gray-600">
          {workshop.section == "AOK"
            ? "ÁOK"
            : workshop.section == "ALL"
            ? "Mindenkinek"
            : workshop.section}{" "}
          {workshop.yearFrom}. - {workshop.yearTo}. év
        </h4>
      </div>
      <p className="whitespace-pre-line pb-6 pt-4 text-gray-700">
        {" "}
        {workshop.description}
      </p>
      <div className="pt-3">
        <b>Részvételi kritérium(ok): </b>
        {workshop.targetAudience}
      </div>
      <div className="pt-1">
        <b>Elérhető helyek száma: </b> {workshop.noOfAvailableSeats}/
        {workshop.noOfTotalSeats}
        {workshop.noOfAvailableSeats > 0 ? " fentmaradó hely" : ""}
      </div>
      {/* <div className="flex justify-end pt-4">
        <WorkshopSignupButton
          canSignUp={canSignUp}
          hasLoggedIn={!!email}
          hasSignedUp={hasSignedUp}
          onSignUp={onSignup}
          onCancelSignup={onCancelSignup}
          loading={loading}
          noOfAvailableSeats={workshop.noOfAvailableSeats}
        />
      </div> */}
    </div>
  );
};

export default Workshop;
