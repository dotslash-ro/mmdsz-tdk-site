import type { ProgramLocation } from "../../types/program.types";
import ProgramItem from "./program-item";

const ProgramLocation = ({ location }: { location: ProgramLocation }) => {
  return (
    <div>
      <div className="flex items-center gap-1 pb-1 font-bold text-tdk-primary">{location.name}</div>
      <div className="pl-5">
        {location.programItems.map((item) => (
          <ProgramItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProgramLocation;
