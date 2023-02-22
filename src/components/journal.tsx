import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
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
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
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

const Journal = () => {
  const { year } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [journal, setJournal] = useState("");

  useEffect(() => {
    if (!year || !yearToJournalMap.get(year)) {
      return;
    }
    setJournal(yearToJournalMap.get(year) ?? "");
    setPageNumber(1);
  }, [year]);

  if (!year || !yearToJournalMap.get(year)) {
    return (
      <div className="flex flex-grow items-center justify-center font-light text-gray-500">
        Ebben az évben nem található összefoglaló kötet!
      </div>
    );
  }

  return (
    <div className="h-fit w-fit">
      <Document
        file={journal}
        className="h-full w-full"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page
          pageNumber={pageNumber}
          className="h-full w-full border drop-shadow-md"
          loading={
            <div className="flex h-full w-full flex-grow items-center justify-center">
              <ClipLoader />
            </div>
          }
          scale={0.85}
        />
      </Document>
      <div className="mx-4 my-4 flex w-full items-center justify-around rounded-full bg-gray-100 py-2 drop-shadow-md">
        <button
          className="rounded-full bg-tdk-accent text-white drop-shadow-md"
          onClick={() =>
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)
          }
          disabled={pageNumber <= 1}
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-white"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <span>
          {pageNumber} / {numPages}
        </span>
        <button
          className="rounded-full bg-tdk-accent text-white drop-shadow-md"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-white"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <a
          href={`https://orvtudert.ro/images/PDF/${year}-suppl${
            year == "2022" ? 2 : 1
          }.pdf`}
          target="_blank"
        >
          <button className="rounded-full bg-tdk-accent text-white drop-shadow-md">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-white"
            >
              <path
                d="m6.864 3.424c.502-.301 1.136.063 1.136.642 0 .264-.138.509-.365.644-2.476 1.486-4.135 4.197-4.135 7.292 0 4.691 3.808 8.498 8.498 8.498s8.497-3.807 8.497-8.498c0-3.093-1.656-5.803-4.131-7.289-.225-.136-.364-.38-.364-.644 0-.582.635-.943 1.137-.642 2.91 1.748 4.858 4.936 4.858 8.575 0 5.519-4.479 9.998-9.997 9.998s-9.998-4.479-9.998-9.998c0-3.641 1.951-6.83 4.864-8.578zm.831 8.582s2.025 2.021 3.779 3.774c.147.147.339.22.53.22.192 0 .384-.073.531-.22 1.753-1.752 3.779-3.775 3.779-3.775.145-.145.217-.336.217-.526 0-.192-.074-.384-.221-.531-.292-.293-.766-.294-1.056-.004l-2.5 2.499v-10.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v10.693l-2.498-2.498c-.289-.289-.762-.286-1.054.006-.147.147-.221.339-.222.531 0 .19.071.38.215.524z"
                fill-rule="nonzero"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Journal;
