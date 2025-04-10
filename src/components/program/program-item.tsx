import type { ProgramItem } from "../../types/program.types";
import { formatTime } from "../../utils/datetime.util";

const ProgramItem = ({ item }: { item: ProgramItem }) => {
  return (
    <div className="flex items-start gap-2.5 text-tdk-primary">
      <span className="font-bold whitespace-nowrap">
        {formatTime(item.startTime)} - {formatTime(item.endTime)}
      </span>
      <span>{item.title}</span>
    </div>
  );
};

export default ProgramItem;
