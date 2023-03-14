import { useParams } from "react-router-dom";
import journal2022 from "../assets/2022-suppl1.pdf";
import journal2021 from "../assets/2021-suppl1.pdf";
import journal2020 from "../assets/2020-suppl1.pdf";
import journal2019 from "../assets/2019-suppl1.pdf";
import journal2018 from "../assets/2018-suppl1.pdf";
import journal2017 from "../assets/2017-suppl1.pdf";
import journal2016 from "../assets/2016-suppl1.pdf";
import journal2015 from "../assets/2015-suppl1.pdf";
import journal2014 from "../assets/2014-suppl1.pdf";
import journal2013 from "../assets/2013-suppl1.pdf";
import journal2012 from "../assets/2012-suppl1.pdf";
import { useEffect, useState } from "react";

const yearToJournalMap: Map<string, string> = new Map([
  ["2022", journal2022],
  ["2021", journal2021],
  ["2020", journal2020],
  ["2019", journal2019],
  ["2018", journal2018],
  ["2017", journal2017],
  ["2016", journal2016],
  ["2015", journal2015],
  ["2014", journal2014],
  ["2013", journal2013],
  ["2012", journal2012],
]);

const JournalError = () => {
  const { year } = useParams();
  const [journal, setJournal] = useState("");

  useEffect(() => {
    if (!year || !yearToJournalMap.get(year)) {
      return;
    }
    setJournal(yearToJournalMap.get(year) ?? "");
  }, [year]);

  return (
    <div className="flex flex-grow items-center justify-center font-light text-gray-500">
      {" "}
      Sajnos nem sikerült megjeleníteni az összefoglaló kötetet. A Safari
      böngésző iOS-en nem támogatja PDF fájlok megjelenítését. Az összefoglaló
      letölthető{" "}
      <a
        className="font-semibold text-sky-400 hover:underline"
        href={journal}
        download
      >
        ide
      </a>{" "}
      kattintással.
    </div>
  );
};

export default JournalError;
