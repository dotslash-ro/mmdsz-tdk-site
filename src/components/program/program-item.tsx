import type { ProgramItem } from "../../types/program.types";
import { formatTime } from "../../utils/datetime.util";

const ProgramItem = ({ item }: { item: ProgramItem }) => {
  return (
    <div className="flex items-start gap-2.5 text-tdk-primary">
      <span className="font-bold whitespace-nowrap">
        {formatTime(item.startTime)} - {formatTime(item.endTime)}
      </span>
      <div>
        <span className="font-medium">{item.title.split("-")[0]}</span>
        {item.title.split("-")[1] && <span className="italic"> - {item.title.split("-")[1]}</span>}
      </div>
    </div>
  );
};

export default ProgramItem;
