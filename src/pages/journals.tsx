import { Helmet } from "react-helmet";
import { withLayout } from "../layout/withLayout";
import { Outlet, useNavigate } from "react-router-dom";

const PastJournals = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-grow flex-col py-5 md:flex-row">
      <Helmet>
        <title>32. TDK - Összefoglaló kötetek</title>
      </Helmet>
      <div className="mb-6 border-gray-300 px-10 md:w-1/5 md:border-r">
        <label htmlFor="journals" className="mb-2 block pt-10 text-lg font-medium text-gray-900">
          Év
        </label>
        <select
          id="universities"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
          onChange={(e) => {
            navigate(`${(e.target as HTMLSelectElement).value}`);
          }}
        >
          {[...Array(13).keys()]
            .map((year) => year + 2012)
            .map((year, index) => {
              return <option key={index}>{year}</option>;
            })}
        </select>
      </div>
      <div className="mx-2 flex h-screen flex-grow justify-center md:mx-10 md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default withLayout(PastJournals);
