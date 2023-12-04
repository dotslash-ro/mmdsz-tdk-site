import FileUpload from "./file-upload";
import { serverUrl } from "../constants";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const uploadStatuses = ["not-uploaded", "in-progress", "uploaded", "error"] as const;
type UploadStatus = (typeof uploadStatuses)[number];

const PresentationUpload = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File>();
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("not-uploaded");

  useEffect(() => {
    const _uploadStatus = localStorage.getItem("uploadStatus");
    if (!_uploadStatus) {
      setUploadStatus("not-uploaded");
    } else if (uploadStatuses.find((validStatus) => validStatus === _uploadStatus)) {
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
    data.append("document", file, `asd-TDK-bemutató.docx`);
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
        Prezentáció sikeresen feltötlve!
      </div>
    );
  } else if (uploadStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center gap-3">
        <div className="text-xl font-semibold text-red-400">
          Sajnos a dokumentum feldolgozása alatt egy hiba lépett fel!
        </div>
        <div className="text-lg text-gray-600">
          Vedd fel a szervezőkkel a kapcsolatot:{" "}
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
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
          Email cím
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        />
      </div>
      <h3 className="mb-2 block text-sm font-medium text-gray-900">Prezentáció feltöltése</h3>
      <FileUpload file={file} setFile={setFile} fileFormats=".ppt vagy .pptx" id="upload-presentation" />
      <button
        className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
        onClick={onSignup}
      >
        Feltöltés
      </button>
    </div>
  );
};

export default PresentationUpload;
