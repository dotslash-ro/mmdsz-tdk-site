import FileUpload from "./file-upload";
import { serverUrl } from "../constants";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const uploadStatuses = [
  "not-uploaded",
  "in-progress",
  "uploaded",
  "error",
] as const;
type UploadStatus = (typeof uploadStatuses)[number];

const SecondUploadForm = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File>();
  const [uploadStatus, setUploadStatus] =
    useState<UploadStatus>("not-uploaded");

  useEffect(() => {
    const _uploadStatus = localStorage.getItem("uploadStatus");
    if (!_uploadStatus) {
      setUploadStatus("not-uploaded");
    } else if (
      uploadStatuses.find((validStatus) => validStatus === _uploadStatus)
    ) {
      setUploadStatus(_uploadStatus as UploadStatus);
    } else {
      setUploadStatus("not-uploaded");
    }
  }, []);

  async function onSignup() {
    if (!file) {
      return;
    }

    // by setting status to in-progress, the spinner will display
    setUploadStatus("in-progress");

    // prepare form data for file upload
    const data = new FormData();
    data.append("document", file, `asd-TDK-dolgozat.docx`);
    const documentUploadURL = new URL(`${serverUrl}/document/upload`);
    documentUploadURL.searchParams.append("applicantName", "asd");

    // upload document to backend
    try {
      const response = await fetch(documentUploadURL, {
        method: "POST",
        body: data,
      });
      if (response.status != 200) {
        setUploadStatus("error");
      } else {
        setUploadStatus("uploaded");
        localStorage.setItem("uploadStatus", "uploaded");
      }
    } catch (e) {
      setUploadStatus("error");
    }
  }

  if (uploadStatus === "in-progress") {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  } else if (uploadStatus === "uploaded") {
    return (
      <div className="flex h-48 items-center justify-center text-lg text-gray-600">
        Dokumentum sikeresen felt??tlve!
      </div>
    );
  } else if (uploadStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center gap-3">
        <div className="text-xl font-semibold text-red-400">
          Sajnos a dokumentum feldolgoz??sa alatt egy hiba l??pett fel!
        </div>
        <div className="text-lg text-gray-600">
          Vedd fel a szervez??kkel a kapcsolatot:{" "}
          <span className="text-sky-400 underline">
            <a href="mailto:tdk@mmdsz.ro">tdk@mmdsz.ro </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Email c??m
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        />
      </div>
      <FileUpload
        file={file}
        setFile={setFile}
        fileFormats=".doc vagy .docx"
        id="upload-document-2"
      />
      <button
        className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
        onClick={onSignup}
      >
        Felt??lt??s
      </button>
    </div>
  );
};

export default SecondUploadForm;
