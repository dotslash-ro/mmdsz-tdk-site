import journal2023 from "../assets/2023-suppl2.pdf";
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
import journal2024 from "../assets/2024-suppl1.pdf";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScrollMode, SpecialZoomLevel, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const yearToJournalMap: Map<string, string> = new Map([
  ["2023", journal2023],
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
  ["2024", journal2024],
]);

const Journal = () => {
  const { year } = useParams();
  const [journal, setJournal] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  useEffect(() => {
    if (!year || !yearToJournalMap.get(year)) {
      return;
    }
    setJournal(yearToJournalMap.get(year) ?? "");
  }, [year]);

  if (!year || !yearToJournalMap.get(year)) {
    return (
      <div className="flex flex-grow items-center justify-center font-light text-gray-500">
        Ebben az évben nem található összefoglaló kötet!
      </div>
    );
  }

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
      <div className="flex flex-grow flex-col overflow-y-scroll">
        <Viewer
          fileUrl={journal}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={SpecialZoomLevel.PageFit}
          scrollMode={ScrollMode.Vertical}
        />
        ;
      </div>
    </Worker>
  );
};

export default Journal;
