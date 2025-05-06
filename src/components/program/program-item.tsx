import { useEffect, useState } from "react";
import type { ProgramItem } from "../../types/program.types";
import { formatTime } from "../../utils/datetime.util";

const ProgramItem = ({ item, date }: { item: ProgramItem; date: string }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const programItemDate = new Date(`${date}T${item.startTime}`);
  const programItemEndDate = new Date(`${date}T${item.endTime}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const ongoing = dateTime >= programItemDate && dateTime <= programItemEndDate;
  const hasEnded = dateTime > programItemEndDate;

  return (
    <div
      data-ongoing={ongoing}
      data-has-ended={hasEnded}
      className="group relative flex items-start gap-2.5 text-tdk-primary data-[has-ended=true]:opacity-50"
    >
      <span className="whitespace-nowrap font-bold">
        {formatTime(item.startTime)} - {formatTime(item.endTime)}
      </span>
      <div>
        <span className="font-medium">{item.title.split("-")[0]}</span>
        {item.title.split("-").length > 1 && (
          <span className="italic"> - {item.title.split("-").slice(1).join("-")}</span>
        )}
      </div>
      <div className="absolute top-2 -left-4 hidden h-2 w-2 animate-pulse rounded-full bg-tdk-primary-light group-data-[ongoing=true]:flex"></div>
    </div>
  );
};

export default ProgramItem;
