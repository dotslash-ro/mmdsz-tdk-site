import type { ProgramSection } from "../../types/program.types";
import ProgramLocation from "./program-location";

const ProgramSection = ({ section }: { section: ProgramSection }) => {
  return (
    <div>
      <h3 className="pb-4 font-bold text-tdk-accent">{section.text}</h3>
      <div className="space-y-4">
          {section.locations.map((location) => (
            <ProgramLocation location={location} />
          ))}
      </div>
    </div>
  );
};

export default ProgramSection;
