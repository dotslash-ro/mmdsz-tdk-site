import type { ProgramLocation } from "../../types/program.types";
import ProgramItem from "./program-item";

const ProgramLocation = ({ location }: { location: ProgramLocation }) => {
  return (
    <div>
      <div className="flex items-center gap-1 font-bold text-tdk-primary pb-1">
        {location.name}
      </div>
      <div className="pl-5">
        {location.programItems.map((item) => (
          <ProgramItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProgramLocation;
