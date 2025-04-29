import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import { withLayout } from "../layout/withLayout";
import { maxSignUpPerEmail, workshopServerUrl } from "../constants";
import googleIcon from "../assets/google_icon.svg";
import SignupWorkshop from "../components/signup-workshop";
import { WorkshopType } from "../components/workshop";
import { Helmet } from "react-helmet";

const WorkshopSignup = () => {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<any>();
  const [workshops, setWorkshops] = useState<WorkshopType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<{ section: string; studyYear: number } | undefined>(undefined);
  const [studyYear, setStudyYear] = useState<number>(0);
  const [section, setSection] = useState("");
  const [canSignUp, setCanSingUp] = useState(true);
  const [disableButtons, setDisableButtons] = useState(false);

  const login = useGoogleLogin({ onSuccess: (res) => setUser(res) });

  async function fetchWorkshops(section: string, studyYear: number) {
    setLoading(true);
    const resp = await fetch(`${workshopServerUrl}/workshop/filter`, {
      method: "POST",
      body: JSON.stringify({ studyYear: studyYear, section: section }),
      headers: { "Content-Type": "application/json" },
    });
    if (resp.status != 200) {
      setError(true);
      return;
    }
    const data = await resp.json();
    setWorkshops(data);
    setLoading(false);
  }

  function saveSignupInfo() {
    setPersonalInfo({ section, studyYear });
    localStorage.setItem("workshopPersonalInfo", JSON.stringify({ section, studyYear }));
  }

  useEffect(() => {
    if (personalInfo) {
      fetchWorkshops(personalInfo.section, personalInfo.studyYear);
    }
  }, [personalInfo]);

  useEffect(() => {
    (async () => {
      if (user) {
        const resp = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
          method: "GET",
        });
        const data = await resp.json();
        setProfile(data);
      }
    })();
  }, [user]);

  useEffect(() => {
    // load profile info if any
    const profileStr = localStorage.getItem("profile");
    if (profileStr) {
      setProfile(JSON.parse(profileStr));
    }

    const personalInfoStr = localStorage.getItem("workshopPersonalInfo");
    if (!personalInfoStr) {
      return;
    }
    setPersonalInfo(JSON.parse(personalInfoStr));
  }, []);

  useEffect(() => {
    (async () => {
      if (profile) {
        localStorage.setItem("profile", JSON.stringify(profile));

        // await fetchApplicationNumberInfo();
      }
    })();
  }, [profile]);

  async function fetchApplicationNumberInfo() {
    // fetch applications of user
    const resp = await fetch(`${workshopServerUrl}/application/${profile.email}`);
    const data = await resp.json();
    setCanSingUp(data.length < maxSignUpPerEmail);
  }

  if (!profile) {
    return (
      <div className="mx-auto flex h-screen flex-col items-center px-10 pt-20 pb-10 font-semibold text-neutral-500 sm:justify-center sm:pt-0 lg:w-2/3">
        <Helmet>
          <title>32. TDK - Műhelymukák</title>
        </Helmet>
        A műhelymunkákra való jelentkezéshez csatlakoztatnod kell a Google fiókod az oldalhoz!
        <button
          className="my-10 flex w-48 items-center justify-center rounded-full border bg-neutral-100 px-3 py-1 drop-shadow-md hover:underline"
          onClick={() => login()}
        >
          <img src={googleIcon} className="h-6 w-6" />
          <div className=" mx-3 my-2 font-semibold text-neutral-600 lg:block lg:px-3">Bejelentkezés</div>
        </button>
      </div>
    );
  }

  if (!personalInfo) {
    return (
      <div className="flex h-screen flex-col items-center px-5 pt-24 sm:justify-center sm:pt-0 lg:mx-auto lg:w-1/3">
        <Helmet>
          <title>32. TDK - Műhelymukák</title>
        </Helmet>
        <p className="pb-6 text-center text-sm font-semibold text-gray-600">
          Add meg a karod és évfolyamod, hogy a megfelelő műhelymukákat mutathassuk neked. Ezt csak egyszer tudod
          megadni, utólag nem lehet módosítani!
        </p>
        <div className="flex w-full flex-col px-5">
          <label htmlFor="section-select" className="mb-2 block text-lg font-medium text-gray-900">
            Kar
          </label>
          <select
            id="section-select"
            className="ml-4 block w-full rounded-full border border-gray-400 bg-white p-2.5 text-gray-900 focus:border-tdk-primary"
            onChange={(e) => setSection((e.target as HTMLSelectElement).value)}
          >
            {["", "ÁOK", "FOK", "GYK"].map((section, index) => {
              return (
                <option className="text-md" key={index}>
                  {section}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full flex-col px-5 pt-5 sm:pt-2">
          <label htmlFor="study-year-select" className="mb-2 block text-lg font-medium text-gray-900">
            Évfolyam
          </label>
          <select
            id="study-year-select"
            className="ml-4 block w-full rounded-full border border-gray-400 bg-white p-2.5 text-gray-900 focus:border-tdk-primary"
            onChange={(e) =>
              setStudyYear(
                (e.target as HTMLSelectElement).value.length
                  ? Number.parseInt((e.target as HTMLSelectElement).value)
                  : 0
              )
            }
          >
            {["", "1", "2", "3", "4", "5", "6"].map((studyYear, index) => {
              return (
                <option className="text-md" key={index}>
                  {studyYear}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="mt-8 flex w-fit items-center justify-center rounded-full bg-tdk-accent px-5 py-3 text-sm font-bold uppercase text-white drop-shadow-lg hover:underline lg:text-base lg:font-bold"
          onClick={saveSignupInfo}
        >
          Mentés
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen items-center justify-center text-sm font-semibold text-rose-500">
        <Helmet>
          <title>32. TDK - Műhelymukák</title>
        </Helmet>
        Sajnos egy hiba lépett fel. Vedd fel a kapcsolatot a szervezőkkel a következő címen: tdk@mmdsz.ro
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Helmet>
          <title>32. TDK - Műhelymukák</title>
        </Helmet>
        <ClipLoader />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>32. TDK - Műhelymukák</title>
      </Helmet>
      <div className="top-25 right-5 flex justify-center pt-8 pr-2 lg:fixed lg:justify-end lg:pt-5 lg:pr-5">
        <button
          className="flex items-center justify-center rounded-full border bg-neutral-100 px-3 py-2 drop-shadow-md"
          onClick={() => login()}
        >
          <img src={profile.picture} referrerPolicy="no-referrer" className="mx-1 h-10 w-10 rounded-full" />
          <div className="mx-1 text-sm font-semibold text-neutral-600">{profile.name}</div>
          <div className="ml-1 text-sm font-light text-neutral-500">
            {personalInfo.section} - {personalInfo.studyYear}
          </div>
        </button>
      </div>
      <div className="mx-auto py-20 px-5 lg:w-2/3">
        <h2 className="pb-12 text-center text-5xl font-bold">Műhelymunkák</h2>
        {/* <p className="pt-10 pb-20 text-center text-2xl font-thin">
          A műhelymukák időszerinti beosztását{" "}
          <a
            className="text-sky-500 hover:underline"
            href="https://docs.google.com/spreadsheets/d/1jxP5znjqZEuvqZomjdKyoU8wR6M70GqfuduG2vWLjR4/edit?usp=sharing"
            target="_blank"
          >
            ebben
          </a>{" "}
          a táblázatban találjátok.
        </p> */}
        {workshops.map((workshop) => (
          <div key={workshop.id}>
            <SignupWorkshop
              workshop={workshop}
              email={profile.email}
              name={profile.name}
              section={personalInfo.section}
              studyYear={personalInfo.studyYear}
              canSignUp={canSignUp}
              disableButton={disableButtons}
              onSignupStart={() => setDisableButtons(true)}
              onSignupSuccess={(ws) => {
                setWorkshops(
                  [...workshops.filter((_ws) => _ws.id != ws.id), ws].sort((a, b) => a.title.localeCompare(b.title))
                );
                setDisableButtons(false);
                fetchApplicationNumberInfo();
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default withLayout(WorkshopSignup);
