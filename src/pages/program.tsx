import { withLayout } from "../layout/withLayout";
import { ScrollMode, SpecialZoomLevel, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import programmePdf from "../assets/programme.pdf";

const Programme = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (_) => [],
  });

  return (
    <div className="mx-auto py-40 px-5 lg:w-1/2">
      <h2 className="pb-10 text-center text-5xl font-bold">Programfüzet</h2>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <div className="flex flex-grow flex-col overflow-y-scroll">
          <Viewer
            fileUrl={programmePdf}
            plugins={[defaultLayoutPluginInstance]}
            defaultScale={SpecialZoomLevel.PageFit}
            scrollMode={ScrollMode.Vertical}
            initialPage={2}
          />
          ;
        </div>
      </Worker>
    </div>
  );
};

export default withLayout(Programme);
