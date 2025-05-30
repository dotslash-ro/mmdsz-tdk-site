import FileUpload from "./file-upload";
import { sectionList, serverUrl, universityList } from "../constants";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const uploadStatuses = ["not-uploaded", "in-progress", "uploaded", "error"] as const;
type UploadStatus = (typeof uploadStatuses)[number];

const PresentationUploadFormSchema = z.object({
  applicantName: z.string().min(1, { message: "Add meg a neved!" }),
  university: z.string().min(1, { message: "Válaszd ki az egyetemed!" }),
  section: z.string().min(1, { message: "Add meg a karod!" }),
  otherUniversity: z.string().min(1, { message: "Add meg az egyetemed nevét!" }).optional(),
});

export type SecondUploadSchema = z.infer<typeof PresentationUploadFormSchema>;

const PresentationUploadForm = () => {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("not-uploaded");
  const [file, setFile] = useState<File>();

  const _personalInfo = localStorage.getItem("personalInfo");
  const _documentInfo = localStorage.getItem("documentInfo");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SecondUploadSchema>({
    resolver: zodResolver(PresentationUploadFormSchema),
    mode: "all",
    defaultValues: {
      ...(_personalInfo ? JSON.parse(_personalInfo) : {}),
      ...(_documentInfo ? JSON.parse(_documentInfo) : {}),
    },
  });

  const onSubmitDirectlyToS3: SubmitHandler<SecondUploadSchema> = async (data) => {
    if (!file) {
      return;
    }
    try {
      const res = await fetch(`${serverUrl}/get-presigned-url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name }),
      });
      if (!res.ok) {
        setUploadStatus("error");
      }
      const presignedUrl = ((await res.json()) as { signedUrl: string }).signedUrl;

      const uploadRes = await fetch(presignedUrl, {
        method: "PUT",
        headers: { "Content-Type": "multipart/form-data" },
        body: file,
      });
      if (!uploadRes.ok) {
        setUploadStatus("error");
      }

      const gDriveUploadRes = await fetch(`${serverUrl}/presentation-upload-aws`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: data.section,
          university: data.university ?? data.otherUniversity,
          applicantName: data.applicantName,
          fileName: file.name,
        }),
      });
      if (!gDriveUploadRes.ok) {
        setUploadStatus("error");
      }
      setUploadStatus("uploaded");
    } catch (e) {
      console.log(e);
      setUploadStatus("error");
    }
  };

  useEffect(() => {
    const _uploadStatus = localStorage.getItem("presentationUpload24");
    if (!_uploadStatus) {
      setUploadStatus("not-uploaded");
    } else if (uploadStatuses.find((validStatus) => validStatus === _uploadStatus)) {
      setUploadStatus(_uploadStatus as UploadStatus);
    } else {
      setUploadStatus("not-uploaded");
    }
  }, []);

  if (isSubmitting) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }
  if (uploadStatus === "in-progress") {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  } else if (uploadStatus === "uploaded") {
    return (
      <div className="flex h-40 flex-col items-center justify-center gap-2 text-sm font-light text-gray-500">
        Prezentáció sikeresen feltötlve!
        <div
          className="py-3 text-sm text-sky-600 hover:cursor-pointer hover:underline"
          onClick={() => {
            localStorage.removeItem("presentationUpload24");
            setUploadStatus("not-uploaded");
            setFile(undefined);
          }}
        >
          Új prezentáció feltöltése →
        </div>
      </div>
    );
  } else if (uploadStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center gap-3">
        <div className="text-xl font-semibold text-red-400">
          Sajnos a prezentáció feldolgozása alatt egy hiba lépett fel!
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
    <form className="py-10 pr-4" onSubmit={handleSubmit(onSubmitDirectlyToS3)}>
      <div className="mb-6">
        <label htmlFor="name" className="mb-2 block text-lg font-medium text-gray-900">
          Teljes név
        </label>
        <input
          type="text"
          id="name"
          data-error={errors.applicantName != undefined}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("applicantName")}
        />
        {errors.applicantName && <p className="mt-2 text-xs italic text-red-500"> {errors.applicantName?.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="universities" className="mb-2 block text-lg font-medium text-gray-900">
          Egyetem
        </label>
        <select
          id="universities"
          data-error={errors.university != undefined}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("university")}
        >
          {universityList.map((university, index) => {
            return (
              <option className="text-md" key={index}>
                {university}
              </option>
            );
          })}
        </select>
        {errors.university && <p className="mt-2 text-xs italic text-red-500"> {errors.university?.message}</p>}
      </div>
      {watch("university") === "Egyéb" && (
        <div className="mb-6">
          <label htmlFor="other-university" className="mb-2 block text-lg font-medium text-gray-900">
            Egyetem neve
          </label>
          <input
            type="text"
            id="other-university"
            data-error={errors.otherUniversity != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("otherUniversity")}
            aria-invalid={errors.otherUniversity ? "true" : "false"}
          />
          {errors.otherUniversity && (
            <p className="mt-2 text-xs italic text-red-500"> {errors.otherUniversity?.message}</p>
          )}
        </div>
      )}
      <div className="mb-6">
        <label htmlFor="sections" className="mb-2 block text-lg font-medium text-gray-900">
          Témakör
        </label>
        <select
          id="sections"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary focus:outline-none"
          {...register("section")}
        >
          {sectionList.map((section, index) => {
            return (
              <option className="text-md" key={index}>
                {section}
              </option>
            );
          })}
        </select>
        {errors.section && <p className="mt-2 text-xs italic text-red-500"> {errors.section?.message}</p>}
      </div>
      <div className="pl-4">
        <FileUpload
          file={file}
          setFile={setFile}
          fileFormats=".ppt vagy .pptx"
          id="upload-document-2"
          accept=".ppt,.pptx"
        />
      </div>

      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        {isValid && file ? (
          <button
            className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
            type="submit"
          >
            Feltöltés
          </button>
        ) : (
          <button
            className="rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md xl:text-lg"
            disabled
            type="submit"
            title="A továbblépéshez ki kell töltedened az adataid!"
          >
            Feltöltés
          </button>
        )}
      </div>
    </form>
  );
};

export default PresentationUploadForm;
