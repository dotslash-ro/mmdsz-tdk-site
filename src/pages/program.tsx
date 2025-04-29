import { Helmet } from "react-helmet";

import { withLayout } from "../layout/withLayout";
import { useProgram } from "../hooks/useProgram";
import ProgramDay from "../components/program/program-day";

const Programme = () => {
  const { program, fetching } = useProgram();
  return (
    <div className="mx-auto max-w-2xl px-5 pt-20 pb-40 xl:max-w-none xl:px-20">
      <Helmet>
        <title>32. TDK - Program</title>
      </Helmet>
      <h1 className="pb-20 text-6xl font-bold text-tdk-primary">Program</h1>
      {fetching && <div className="flex h-screen items-center justify-center text-sm text-gray-700">Betöltés</div>}
      {program && (
        <div className="grid grid-cols-1 gap-y-14 xl:grid-cols-2 xl:gap-x-20">
          {program.attributes.programDays.map((day, index) => (
            <ProgramDay day={day} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default withLayout(Programme);
