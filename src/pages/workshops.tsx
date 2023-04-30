import { useGoogleLogin } from "@react-oauth/google";
import Workshop, { WorkshopType } from "../components/workshop";
import { withLayout } from "../layout/withLayout";
import { ChangeEvent, useEffect, useState } from "react";
import { maxSignUpPerEmail, workshopServerUrl, workshops } from "../constants";
import googleIcon from "../assets/google_icon.svg";
import { ClipLoader } from "react-spinners";

const sectionNameToSectionCodeMap = new Map([
  ["ÁOK", "AOK"],
  ["GYK", "GYK"],
  ["FOK", "FOK"],
  ["Mindenkinek", "ALL"],
]);

const Workshops = () => {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<any>();
  //const [workshops, setWorkshops] = useState<string[]>([]);
  const [workshopsData, setWorkshopsData] = useState<WorkshopType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canSignUp, setCanSingUp] = useState(true);
  const [workshopsToShow, setWorkshopsToShow] = useState<WorkshopType[]>([]);
  const [studyYear, setStudyYear] = useState<number | undefined>(undefined);
  const [section, setSection] = useState("");

  const login = useGoogleLogin({ onSuccess: (res) => setUser(res) });

  useEffect(() => {
    setWorkshopsToShow(
      workshops
        .filter((workshop) =>
          section.length
            ? workshop.section === sectionNameToSectionCodeMap.get(section) ||
              workshop.section === "ALL"
            : true
        )
        .filter((workshop) =>
          studyYear
            ? studyYear <= workshop.yearTo && studyYear >= workshop.yearFrom
            : true
        )
    );
  }, [section, studyYear]);

  // async function fetchWorkshops() {
  //   const resp = await fetch(`${workshopServerUrl}/workshop/all`);
  //   if (resp.status != 200) {
  //     setError(true);
  //     return;
  //   }
  //   const data = await resp.json();
  //   setWorkshops(data);
  //   console.log(data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   (async () => {
  //     if (user) {
  //       const resp = await fetch(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //           method: "GET",
  //         }
  //       );
  //       const data = await resp.json();
  //       setProfile(data);
  //     }
  //   })();
  // }, [user]);

  // useEffect(() => {
  //   // fetch workshops
  //   fetchWorkshops();
  //   // load profile info if any
  //   const profileStr = localStorage.getItem("profile");
  //   if (profileStr) {
  //     setProfile(JSON.parse(profileStr));
  //     console.log(profile);
  //   }
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (profile) {
  //       localStorage.setItem("profile", JSON.stringify(profile));

  //       // fetch applications of user
  //       const resp = await fetch(
  //         `${workshopServerUrl}/application/${profile.email}`
  //       );
  //       const data = await resp.json();
  //       console.log(data);
  //       setCanSingUp(data.length < maxSignUpPerEmail);
  //     }
  //   })();
  // }, [profile]);

  // if (error) {
  //   return <>Error lol</>;
  // }

  // if (loading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       <ClipLoader />
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <div className="top-25 right-5 flex justify-center pt-8 pr-2 lg:fixed lg:justify-end lg:pt-5 lg:pr-5">
        {!profile ? (
          <button
            className="flex items-center rounded-full border bg-neutral-100 px-3 py-1 drop-shadow-md hover:underline"
            onClick={() => login()}
          >
            <img src={googleIcon} className="h-6 w-6" />
            <div className="hidden text-sm font-semibold text-neutral-600 lg:block lg:px-3">
              Bejelentkezés
            </div>
          </button>
        ) : (
          <button
            className="flex items-center rounded-full border bg-neutral-100 px-3 py-2 drop-shadow-md"
            onClick={() => login()}
          >
            <img
              src={profile.picture}
              referrerPolicy="no-referrer"
              className="mx-1 h-10 w-10 rounded-full"
            />
            <div className="mx-1 text-sm font-semibold text-neutral-600">
              {profile.name}
            </div>
          </button>
        )}
      </div> */}
      <div className="mx-auto py-20 px-5 lg:w-2/3">
        <h2 className="pb-20 text-center text-5xl font-bold">Műhelymunkák</h2>
        <div className="flex flex-col items-center justify-center pb-10 md:flex-row md:space-x-10">
          <div className="flex w-full flex-col px-5">
            <label
              htmlFor="section-select"
              className="mb-2 block text-lg font-medium text-gray-900"
            >
              Kar
            </label>
            <select
              id="section-select"
              className="ml-4 block w-full rounded-full border border-gray-400 bg-white p-2.5 text-gray-900 focus:border-tdk-primary"
            >
              {["", "ÁOK", "FOK", "GYK", "Mindenkinek"].map(
                (section, index) => {
                  return (
                    <option
                      className="text-md"
                      key={index}
                      onClick={() => setSection(section)}
                    >
                      {section}
                    </option>
                  );
                }
              )}
            </select>
          </div>
          <div className="flex w-full flex-col px-5 pt-5 md:pt-0">
            <label
              htmlFor="study-year-select"
              className="mb-2 block text-lg font-medium text-gray-900"
            >
              Évfolyam
            </label>
            <select
              id="study-year-select"
              className="ml-4 block w-full rounded-full border border-gray-400 bg-white p-2.5 text-gray-900 focus:border-tdk-primary"
            >
              {["", "1", "2", "3", "4", "5", "6"].map((studyYear, index) => {
                return (
                  <option
                    className="text-md"
                    key={index}
                    onClick={() =>
                      setStudyYear(
                        studyYear.length
                          ? Number.parseInt(studyYear)
                          : undefined
                      )
                    }
                  >
                    {studyYear}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* {!profile && (
          <div className="flex justify-center pb-10 text-sm font-semibold text-neutral-500">
            A műhelymunkákra való jelentkezéshez csatlakoztatnod kell a Google
            fiókod az oldalhoz!
          </div>
        )} */}
        {/* <h3 className="pb-8 text-3xl font-light">Általános Orvosi Kar</h3> */}
        {workshopsToShow.map((workshop, index) => (
          <div key={index}>
            <Workshop
              id={workshop.id}
              email={profile ? profile.email : null}
              canSignUp={canSignUp}
            />
            <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
          </div>
        ))}
      </div>
    </>
  );
};

export default withLayout(Workshops);
