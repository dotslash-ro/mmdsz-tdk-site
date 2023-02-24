import { withLayout } from "../layout/withLayout";
import { Link, Outlet, useNavigate } from "react-router-dom";

const PastJournals = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-grow flex-col py-5 md:flex-row">
      <div className="mb-6 border-gray-300 px-10 md:w-1/5 md:border-r">
        <label
          htmlFor="journals"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Év
        </label>
        <select
          id="universities"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
          onChange={(e) => {
            navigate(`${(e.target as HTMLSelectElement).value}`);
          }}
        >
          {[...Array(11).keys()]
            .map((year) => year + 2012)
            .map((year, index) => {
              return <option key={index}>{year}</option>;
            })}
        </select>
      </div>
      <div className="mx-10 flex w-screen flex-grow justify-center md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default withLayout(PastJournals);
