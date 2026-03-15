import { sectionList, serverUrl } from "../constants";
import { useEffect, useRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const uploadStatuses = ["not-uploaded", "in-progress", "uploaded", "error"] as const;
type UploadStatus = (typeof uploadStatuses)[number];

function checkLength(it: {
  conclusions: string;
  introduction: string;
  mission: string;
  methods: string;
  results: string;
}) {
  const trimmed = (it.conclusions + it.introduction + it.methods + it.mission + it.results).replace(/\s/g, "");
  return trimmed.length <= 2200;
}

const secondUploadFormSchema = z
  .object({
    firstName: z.string().min(1, { message: "Add meg a vezetékneved!" }),
    lastName: z.string().min(1, { message: "Add meg a kereszteneved!" }),
    section: z.enum(sectionList, {
      errorMap: () => ({
        message: "Válassz egy témakört!",
      }),
    }),
    hungarianTitle: z.string().min(1, { message: "Add meg a Kivonatod magyar címét!" }),
    romanianTitle: z.string().min(1, { message: "Add meg a Kivonatod román címét!" }),
    englishTitle: z.string().min(1, { message: "Add meg a Kivonatod angol címét!" }),
    introduction: z.string().min(1, { message: 'Vezesd be a Kivonatod "Bevezetés" bekezdését!' }),
    mission: z.string().min(1, { message: 'Vezesd be a Kivonatod "Célkitűzések" bekezdését!' }),
    methods: z.string().min(1, { message: 'Vezesd be a Kivonatod "Módszerek" bekezdését!' }),
    results: z.string().min(1, { message: 'Vezesd be a Kivonatod "Eredmények" bekezdését!' }),
    conclusions: z.string().min(1, {
      message: 'Vezesd be a Kivonatod "Következtetések" bekezdését!',
    }),
  })
  .refine(checkLength, { message: "A dolgozat max. hossza 2200 karakter!", path: ["introduction"] })
  .refine(checkLength, { message: "A dolgozat max. hossza 2200 karakter!", path: ["methods"] })
  .refine(checkLength, { message: "A dolgozat max. hossza 2200 karakter!", path: ["results"] })
  .refine(checkLength, { message: "A dolgozat max. hossza 2200 karakter!", path: ["conclusions"] })
  .refine(checkLength, { message: "A dolgozat max. hossza 2200 karakter!", path: ["mission"] });

export type SecondUploadSchema = z.infer<typeof secondUploadFormSchema>;

const SecondUploadForm = () => {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("not-uploaded");
  const formContainerRef = useRef<HTMLDivElement | null>(null);

  const isEnabled = true;

  const _personalInfo = localStorage.getItem("personalInfo");
  const _documentInfo = localStorage.getItem("documentInfo");
  const personalInfoDefaults = _personalInfo ? JSON.parse(_personalInfo) : {};
  const documentInfoDefaults = _documentInfo ? JSON.parse(_documentInfo) : {};
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SecondUploadSchema>({
    resolver: zodResolver(secondUploadFormSchema),
    mode: "all",
    defaultValues: {
      ...personalInfoDefaults,
      ...documentInfoDefaults,
    },
  });

  const onSubmit: SubmitHandler<SecondUploadSchema> = async (data) => {
    setUploadStatus("in-progress");
    requestAnimationFrame(() => {
      formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    localStorage.setItem(
      "personalInfo",
      JSON.stringify({
        ...personalInfoDefaults,
        firstName: data.firstName,
        lastName: data.lastName,
      })
    );
    localStorage.setItem(
      "documentInfo",
      JSON.stringify({
        ...documentInfoDefaults,
        section: data.section,
        hungarianTitle: data.hungarianTitle,
        romanianTitle: data.romanianTitle,
        englishTitle: data.englishTitle,
        introduction: data.introduction,
        mission: data.mission,
        methods: data.methods,
        results: data.results,
        conclusions: data.conclusions,
      })
    );
    const payload = {
      section: data.section,
      firstName: data.firstName,
      lastName: data.lastName,
      hungarianTitle: data.hungarianTitle,
      romanianTitle: data.romanianTitle,
      englishTitle: data.englishTitle,
      introduction: data.introduction,
      mission: data.mission,
      methods: data.methods,
      results: data.results,
      conclusions: data.conclusions,
    };

    // upload document to backend
    try {
      const response = await fetch(`${serverUrl}/second-upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.status != 200) {
        setUploadStatus("error");
      } else {
        setUploadStatus("uploaded");
        localStorage.setItem("secondUpload26", "uploaded");
      }
    } catch (e) {
      console.log(e);
      setUploadStatus("error");
    }
  };

  useEffect(() => {
    const _uploadStatus = localStorage.getItem("secondUpload26");
    if (!_uploadStatus) {
      setUploadStatus("not-uploaded");
    } else if (uploadStatuses.find((validStatus) => validStatus === _uploadStatus)) {
      setUploadStatus(_uploadStatus as UploadStatus);
    } else {
      setUploadStatus("not-uploaded");
    }
  }, []);

  useEffect(() => {
    const subscription = watch((value) => {
      if (!value) return;
      localStorage.setItem(
        "personalInfo",
        JSON.stringify({
          ...personalInfoDefaults,
          firstName: value.firstName ?? personalInfoDefaults.firstName,
          lastName: value.lastName ?? personalInfoDefaults.lastName,
        })
      );
      localStorage.setItem(
        "documentInfo",
        JSON.stringify({
          ...documentInfoDefaults,
          section: value.section ?? documentInfoDefaults.section,
          hungarianTitle: value.hungarianTitle ?? documentInfoDefaults.hungarianTitle,
          romanianTitle: value.romanianTitle ?? documentInfoDefaults.romanianTitle,
          englishTitle: value.englishTitle ?? documentInfoDefaults.englishTitle,
          introduction: value.introduction ?? documentInfoDefaults.introduction,
          mission: value.mission ?? documentInfoDefaults.mission,
          methods: value.methods ?? documentInfoDefaults.methods,
          results: value.results ?? documentInfoDefaults.results,
          conclusions: value.conclusions ?? documentInfoDefaults.conclusions,
        })
      );
    });
    return () => subscription.unsubscribe();
  }, [watch, personalInfoDefaults, documentInfoDefaults]);

  if (isSubmitting) {
    return (
      <div ref={formContainerRef} className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }
  if (uploadStatus === "in-progress") {
    return (
      <div ref={formContainerRef} className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  } else if (uploadStatus === "uploaded") {
    return (
      <div ref={formContainerRef} className="flex h-40 flex-col items-center justify-center gap-2 text-sm font-light text-gray-500">
        Dokumentum sikeresen feltötlve!
      </div>
    );
  } else if (uploadStatus === "error") {
    return (
      <div ref={formContainerRef} className="flex h-48 flex-col items-center justify-center gap-3">
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
    <div ref={formContainerRef}>
      <form className="py-10 pr-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="first-name" className="mb-2 block text-lg font-medium text-gray-900">
          Vezetéknév
        </label>
        <input
          type="text"
          id="first-name"
          autoComplete="family-name"
          data-error={errors.firstName != undefined}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("firstName")}
        />
        {errors.firstName && <p className="mt-2 text-xs italic text-red-500"> {errors.firstName?.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="last-name" className="mb-2 block text-lg font-medium text-gray-900">
          Keresztnév
        </label>
        <input
          type="text"
          id="last-name"
          autoComplete="given-name"
          data-error={errors.lastName != undefined}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("lastName")}
        />
        {errors.lastName && <p className="mt-2 text-xs italic text-red-500"> {errors.lastName?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="title-hu" className="mb-2 block text-lg font-medium text-gray-900">
          Kivonat címe magyarul
        </label>
        <input
          type="text"
          id="title-hu"
          data-error={errors.hungarianTitle}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("hungarianTitle")}
        />
        {errors.hungarianTitle && (
          <p className="mt-2 text-xs italic text-red-500"> {errors.hungarianTitle?.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="title-ro" className="mb-2 block text-lg font-medium text-gray-900">
          Kivonat címe románul
        </label>
        <input
          type="text"
          id="title-ro"
          data-error={errors.romanianTitle}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("romanianTitle")}
        />
        {errors.romanianTitle && <p className="mt-2 text-xs italic text-red-500"> {errors.romanianTitle?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="title-en" className="mb-2 block text-lg font-medium text-gray-900">
          Kivonat címe angolul
        </label>
        <input
          type="text"
          id="title-en"
          data-error={errors.englishTitle}
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
          {...register("englishTitle")}
        />
        {errors.englishTitle && <p className="mt-2 text-xs italic text-red-500"> {errors.englishTitle?.message}</p>}
      </div>
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
      <h3 className="mt-10 block text-lg font-medium text-gray-900">Kivonat tartalmának feltöltése</h3>
      <ul className="mb-6 text-sm text-gray-400">
        <li className="">A kivonat maximális hossza 2200 karakter (szóköz nélkül, cím nélkül).</li>
      </ul>
      <div className="mb-6">
        <label htmlFor="introduction" className="mb-2 block text-sm font-medium text-gray-900">
          Bevezetés
        </label>
        <textarea
          id="introduction"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
          {...register("introduction")}
        />
        {errors.introduction && <p className="mt-2 text-xs italic text-red-500"> {errors.introduction?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="mission" className="mb-2 block text-sm font-medium text-gray-900">
          Célkitűzések
        </label>
        <textarea
          id="mission"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
          {...register("mission")}
        />
        {errors.mission && <p className="mt-2 text-xs italic text-red-500"> {errors.mission?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="methods" className="mb-2 block text-sm font-medium text-gray-900">
          Módszer
        </label>
        <textarea
          id="methods"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
          {...register("methods")}
        />
        {errors.methods && <p className="mt-2 text-xs italic text-red-500"> {errors.methods?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="results" className="mb-2 block text-sm font-medium text-gray-900">
          Eredmények
        </label>
        <textarea
          id="results"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
          {...register("results")}
        />
        {errors.results && <p className="mt-2 text-xs italic text-red-500"> {errors.results?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="conclusions" className="mb-2 block text-sm font-medium text-gray-900">
          Következtetés
        </label>
        <textarea
          id="conclusions"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
          {...register("conclusions")}
        />
        {errors.conclusions && <p className="mt-2 text-xs italic text-red-500"> {errors.conclusions?.message}</p>}
      </div>
      {/* @ts-expect-error it's just confused */}
      {errors.docLength && <p className="mt-2 text-xs italic text-red-500"> {errors.conclusions?.message}</p>}
      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        {isValid && isEnabled ? (
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
    </div>
  );
};

export default SecondUploadForm;
