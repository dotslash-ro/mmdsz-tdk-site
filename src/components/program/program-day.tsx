import type { ProgramDay } from "../../types/program.types";
import ProgramSection from "./program-section";

const ProgramDay = ({ day }: { day: ProgramDay }) => {
  return (
    <div>
      <h2 className="pb-4 font-hero text-5xl text-tdk-accent">{day.name}</h2>
      <div className="space-y-8">
        {day.sections.map((section, index) => (
          <ProgramSection section={section} key={index} date={day.date} />
        ))}
      </div>
    </div>
  );
};

export default ProgramDay;
