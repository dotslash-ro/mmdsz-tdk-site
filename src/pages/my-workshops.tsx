import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ClipLoader } from "react-spinners";

import googleIcon from "../assets/google_icon.svg";
import Workshop, { WorkshopType } from "../components/workshop";
import { workshopServerUrl } from "../constants";
import { withLayout } from "../layout/withLayout";

type GoogleProfile = {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
};

type WorkshopApplication = {
  workshop?: WorkshopType;
  workshopId?: number;
  workshop_id?: number;
  workshopTitle?: string;
  title?: string;
};

const isWorkshop = (value: unknown): value is WorkshopType => {
  return !!value && typeof value === "object" && "id" in value && "title" in value && "speakers" in value;
};

const getAppliedWorkshopIds = (applications: WorkshopApplication[]) => {
  return applications
    .map((application) => application.workshopId ?? application.workshop_id ?? application.workshop?.id)
    .filter((id): id is number => typeof id === "number");
};

const MyWorkshops = () => {
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState<GoogleProfile>();
  const [workshops, setWorkshops] = useState<WorkshopType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = useGoogleLogin({ onSuccess: (res) => setUser(res) });

  useEffect(() => {
    const profileStr = localStorage.getItem("profile");
    if (profileStr) {
      setProfile(JSON.parse(profileStr));
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (!user) {
        return;
      }

      const resp = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: "application/json",
        },
        method: "GET",
      });
      const data = await resp.json();
      setProfile(data);
      localStorage.setItem("profile", JSON.stringify(data));
    })();
  }, [user]);

  useEffect(() => {
    (async () => {
      if (!profile?.email) {
        return;
      }

      setLoading(true);
      setError(false);

      try {
        const applicationResp = await fetch(`${workshopServerUrl}/application/${profile.email}`);
        if (!applicationResp.ok) {
          setError(true);
          return;
        }

        const appliedWorkshopIds = (await applicationResp.json()) as number[];

        const workshopsResp = await fetch(`${workshopServerUrl}/workshop/all-all`);
        if (!workshopsResp.ok) {
          setError(true);
          return;
        }

        const allWorkshops = (await workshopsResp.json()) as WorkshopType[];
        setWorkshops(
          allWorkshops
            .filter((workshop) => appliedWorkshopIds.includes(workshop.id))
            .sort((a, b) => a.title.localeCompare(b.title))
        );
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [profile?.email]);

  if (!profile) {
    return (
      <div className="mx-auto flex h-screen flex-col items-center px-10 pt-20 pb-10 font-semibold text-neutral-500 sm:justify-center sm:pt-0 lg:w-2/3">
        <Helmet>
          <title>33. TDK - Műhelymunkáim</title>
        </Helmet>
        A műhelymunkáid megtekintéséhez csatlakoztatnod kell a Google fiókod az oldalhoz!
        <button
          className="my-10 flex w-48 items-center justify-center rounded-full border bg-neutral-100 px-3 py-1 drop-shadow-md hover:underline"
          onClick={() => login()}
        >
          <img src={googleIcon} className="h-6 w-6" />
          <div className="mx-3 my-2 font-semibold text-neutral-600 lg:block lg:px-3">Bejelentkezés</div>
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center px-5 text-center text-sm font-semibold text-rose-500">
        <Helmet>
          <title>33. TDK - Műhelymunkáim</title>
        </Helmet>
        Sajnos egy hiba lépett fel. Vedd fel a kapcsolatot a szervezőkkel a következő címen: tdk@mmdsz.ro
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>33. TDK - Műhelymunkáim</title>
      </Helmet>
      <div className="top-25 right-5 flex justify-center pt-8 pr-2 lg:fixed lg:justify-end lg:pt-5 lg:pr-5">
        <button
          className="flex items-center justify-center rounded-full border bg-neutral-100 px-3 py-2 drop-shadow-md"
          onClick={() => login()}
        >
          <img src={profile.picture} referrerPolicy="no-referrer" className="mx-1 h-10 w-10 rounded-full" />
          <div className="mx-1 text-sm font-semibold text-neutral-600">{profile.name}</div>
        </button>
      </div>
      <div className="mx-auto py-20 px-5 lg:w-2/3">
        <h2 className="pb-12 text-center text-5xl font-bold">Műhelymunkáim</h2>
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <ClipLoader />
          </div>
        ) : workshops.length ? (
          workshops.map((workshop) => (
            <div key={workshop.id}>
              <Workshop workshop={workshop} email={profile.email} />
              <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold text-neutral-500">
            Ezzel a Google fiókkal nem jelentkeztél műhelymunkára.
          </p>
        )}
      </div>
    </>
  );
};

export default withLayout(MyWorkshops);
