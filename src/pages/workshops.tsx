import { ClipLoader } from "react-spinners";
import Workshop, { type WorkshopType } from "../components/workshop";
import { workshopServerUrl } from "../constants";
import { withLayout } from "../layout/withLayout";
import { useEffect, useState } from "react";

const Workshops = () => {
  const [allWorkshops, setAllWorkshops] = useState<WorkshopType[]>([]);
  const [studyYear, setStudyYear] = useState<number>(0);
  const [section, setSection] = useState("Mindenkinek");

  const workshopsToShow = allWorkshops.filter(
    (ws) =>
      (section == "Mindenkinek" || ws.department.includes(section)) &&
      (studyYear == 0 || (studyYear <= ws.maxYear && studyYear >= ws.minYear))
  );

  async function fetchWorkshops() {
    const res = await fetch(`${workshopServerUrl}/workshop/all-all`);
    const data = await res.json();
    return data as WorkshopType[];
  }

  useEffect(() => {
    fetchWorkshops().then((data) => setAllWorkshops(data));
  }, []);

  if (!allWorkshops.length) {
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
        <div className="flex flex-col items-center justify-center pb-10 md:flex-row md:space-x-10">
          <div className="flex w-full flex-col px-5">
            <label htmlFor="section-select" className="mb-2 block text-lg font-medium text-gray-900">
              Kar
            </label>
            <select
              id="section-select"
              className="ml-4 block w-full rounded-full border border-gray-400 bg-white p-2.5 text-gray-900 focus:border-tdk-primary focus:outline-none"
              onChange={(e) => setSection((e.target as HTMLSelectElement).value)}
            >
              {["Mindenkinek", "ÁOK", "FOK", "GYK"].map((section, index) => {
                return (
                  <option className="text-md" key={index}>
                    {section}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex w-full flex-col px-5 pt-5 md:pt-0">
            <label htmlFor="study-year-select" className="mb-2 block text-lg font-medium text-gray-900">
              Évfolyam
            </label>
            <select
              id="study-year-select"
              className="ml-4 block w-full rounded-full border border-gray-400 bg-white p-2.5 text-gray-900 focus:border-tdk-primary focus:outline-none"
              onChange={(e) =>
                setStudyYear(
                  (e.target as HTMLSelectElement).value != "Mind"
                    ? Number.parseInt((e.target as HTMLSelectElement).value)
                    : 0
                )
              }
            >
              {["Mind", "1", "2", "3", "4", "5", "6"].map((studyYear, index) => {
                return (
                  <option className="text-md" key={index}>
                    {studyYear}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {workshopsToShow.map((workshop, index) => (
          <div key={index}>
            <Workshop workshop={workshop} email={undefined} canSignUp={false} />
            <hr className="my-8 h-px border-0 bg-gray-200"></hr>
          </div>
        ))}
      </div>
    </>
  );
};

export default withLayout(Workshops);
