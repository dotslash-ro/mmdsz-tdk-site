import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import SignupWorkshop from "../components/signup-workshop";
import { workshopServerUrl } from "../constants";
import { withLayout } from "../layout/withLayout";

const AllWorkshops = () => {
  const [workshops, setWorkshops] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchWorkshops() {
    const resp = await fetch(`${workshopServerUrl}/workshop/all`);
    if (resp.status != 200) {
      setError(true);
      return;
    }
    const data = await resp.json();
    setWorkshops(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchWorkshops();
  }, []);

  if (error) {
    return (
      <div className="h-screen items-center justify-center text-sm font-semibold text-rose-500">
        Sajnos egy hiba lépett fel. Vedd fel a kapcsolatot a szervezőkkel a következő címen: tdk@mmdsz.ro
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ClipLoader />
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto py-20 px-5 lg:w-2/3">
        <h2 className="pb-20 text-center text-5xl font-bold">Műhelymunkák</h2>
        {workshops.map((workshop, index) => (
          <div key={index}>
            <SignupWorkshop id={workshop} email={undefined} canSignUp={true} fetchApplicationsNumber={async () => {}} />
          </div>
        ))}
      </div>
    </>
  );
};

export default withLayout(AllWorkshops);
