import { Helmet } from "react-helmet";

import { withLayout } from "../layout/withLayout";
import { useProgram } from "../hooks/useProgram";
import ProgramDay from "../components/program/program-day";

const Programme = () => {
  const { program, fetching } = useProgram();
  return (
    <div className="px-5 py-20 max-w-2xl mx-auto">
      <Helmet>
        <title>32. TDK - Program</title>
      </Helmet>
      <h1 className="pb-20 text-6xl font-bold text-tdk-primary">Program</h1>
      {fetching && <div className="flex h-screen items-center justify-center text-sm text-gray-700">Betöltés</div>}
      {program && (
        <div className="space-y-14">
          {program.attributes.programDays.map((day, index) => (
            <ProgramDay day={day} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default withLayout(Programme);
