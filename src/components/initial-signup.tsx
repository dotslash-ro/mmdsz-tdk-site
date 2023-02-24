import { NavLink } from "react-router-dom";
import FileUpload from "../components/file-upload";
import { serverUrl, universityList, sectionList } from "../constants";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// @ts-ignore
import agreementDocUrl from "../assets/tdk-nyilatkozat.docx";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formValidationSchema = z.object({
  applicantName: z.string().min(1, { message: "Add meg a neved!" }),
  university: z.string().min(1, { message: "Válaszd ki az egyetemed!" }),
  section: z.enum(sectionList, {
    errorMap: () => ({
      message: "Válassz egy témakört!",
    }),
  }),
  email: z.string().email({ message: "Add meg az e-mail címed!" }),
  acceptedTerms: z.literal(true, {
    errorMap: () => ({ message: "El kell fogadnod a szabályzatot!" }),
  }),
  hungarianTitle: z
    .string()
    .min(1, { message: "Add meg a dolgozatod magyar címét!" }),
  romanianTitle: z
    .string()
    .min(1, { message: "Add meg a dolgozatod román címét!" }),
  englishTitle: z
    .string()
    .min(1, { message: "Add meg a dolgozatod angol címét!" }),
  introduction: z
    .string()
    .min(1, { message: 'Vezesd be a dolgozatod "Bevezetés" bekezdését!' }),
  mission: z
    .string()
    .min(1, { message: 'Vezesd be a dolgozatod "Célkitűzések" bekezdését!' }),
  methods: z
    .string()
    .min(1, { message: 'Vezesd be a dolgozatod "Módszerek" bekezdését!' }),
  results: z
    .string()
    .min(1, { message: 'Vezesd be a dolgozatod "Eredmények" bekezdését!' }),
  conclusions: z.string().min(1, {
    message: 'Vezesd be a dolgozatod "Következtetések" bekezdését!',
  }),
  studyYear: z.string().regex(/[123456]/),
});

type FormValidationSchema = z.infer<typeof formValidationSchema>;

const signupStatuses = ["not-signedup", "signed-up", "error"] as const;
type SignupStatus = (typeof signupStatuses)[number];

const InitialSignupForm = () => {
  const [agreementDoc, setAgreementDoc] = useState<File>();
  const [signupStatus, setSignupStatus] =
    useState<SignupStatus>("not-signedup");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValidationSchema>({
    resolver: zodResolver(formValidationSchema),
  });

  useEffect(() => {
    const _signupStatus = localStorage.getItem("signupStatus");
    if (!_signupStatus) {
      setSignupStatus("not-signedup");
    } else if (
      signupStatuses.find((validStatus) => validStatus === _signupStatus)
    ) {
      setSignupStatus(_signupStatus as SignupStatus);
    } else {
      setSignupStatus("not-signedup");
    }
  }, []);

  const onSignup: SubmitHandler<FormValidationSchema> = async ({
    university,
    section,
    email,
    applicantName,
    englishTitle,
    hungarianTitle,
    romanianTitle,
    studyYear,
    introduction,
    mission,
    methods,
    results,
    conclusions,
  }) => {
    if (!agreementDoc) {
      return;
    }

    // send applicant data to backend
    const body = JSON.stringify({
      applicantName,
      university,
      studyYear: Number.parseInt(studyYear),
      email,
      hungarianTitle,
      romanianTitle,
      englishTitle,
      section,
      introduction,
      mission,
      methods,
      results,
      conclusions,
    });
    try {
      const response = await fetch(`${serverUrl}/signup`, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status != 200) {
        setSignupStatus("error");
        return;
      }
    } catch (e) {
      console.log(e);
      setSignupStatus("error");
      return;
    }
    // prepare form data for file upload
    const data = new FormData();
    data.append("files", agreementDoc);
    data.append("section", section);
    data.append("university", university);
    data.append("applicantName", applicantName);

    // upload document to backend
    try {
      const response = await fetch(`${serverUrl}/upload`, {
        method: "POST",
        body: data,
      });
      if (response.status != 200) {
        setSignupStatus("error");
      } else {
        setSignupStatus("signed-up");
        localStorage.setItem("signupStatus", "signed-up");
      }
    } catch (e) {
      console.log(e);
      setSignupStatus("error");
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }

  if (signupStatus === "signed-up") {
    return (
      <div className="flex h-48 flex-col items-center justify-center text-lg text-gray-600">
        Jelentkezésed sikeresen regisztráltuk!
        <div
          className="py-3 text-sm text-sky-600 hover:cursor-pointer hover:underline"
          onClick={() => {
            localStorage.removeItem("signupStatus");
            setSignupStatus("not-signedup");
            reset();
          }}
        >
          Új dolgozat feltöltése →
        </div>
      </div>
    );
  }
  if (signupStatus === "error") {
    return (
      <div className="flex h-48 flex-col items-center justify-center">
        <div className="py-6 text-center text-xl font-semibold text-red-400">
          Sajnos a jelentkezés feldolgozása alatt egy hiba lépett fel!
        </div>
        <button
          className="rounded-full bg-tdk-accent py-3 px-5 text-lg font-bold text-white hover:underline"
          onClick={() => {
            setSignupStatus("not-signedup");
          }}
        >
          Újrapbróbálkozás →
        </button>
        <div className="pt-6 text-center font-light text-gray-600">
          Ha a hiba továbbra is fent áll, vedd fel a szervezőkkel a kapcsolatot:{" "}
          <span className="text-sky-400 hover:underline">
            <a href="mailto:tdk@mmdsz.ro">tdk@mmdsz.ro </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="py-10" onSubmit={handleSubmit(onSignup)}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Teljes név
        </label>
        <input
          type="text"
          id="name"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("applicantName")}
        />
        {errors.applicantName && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.applicantName?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Dolgozat címe magyarul
        </label>
        <input
          type="text"
          id="title"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("hungarianTitle")}
        />
        {errors.hungarianTitle && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.hungarianTitle?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Dolgozat címe románul
        </label>
        <input
          type="text"
          id="title"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("romanianTitle")}
        />
        {errors.romanianTitle && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.romanianTitle?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Dolgozat címe angolul
        </label>
        <input
          type="text"
          id="title"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("englishTitle")}
        />
        {errors.englishTitle && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.englishTitle?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Email cím
        </label>
        <input
          type="email"
          id="email"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="universities"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Egyetem
        </label>
        <select
          id="universities"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
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
        {errors.university && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.university?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="sections"
          className="mb-2 block text-lg font-medium text-gray-900"
        >
          Témakörök
        </label>
        <select
          id="sections"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
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
        {errors.section && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.section?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-medium text-gray-900">Évfolyam</h3>
        <fieldset className="flex flex-wrap justify-evenly gap-3">
          {[...Array(6).keys()]
            .map((i) => i + 1)
            .map((i) => (
              <div key={i}>
                <input
                  type="radio"
                  value={i}
                  id={`studyYear-${i}`}
                  className="peer hidden"
                  {...register("studyYear")}
                  name="studyYear"
                  checked
                />

                <label
                  htmlFor={`studyYear-${i}`}
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white md:px-5"
                >
                  <p className="text-sm font-medium">{i}.</p>
                </label>
              </div>
            ))}
        </fieldset>

        {errors.studyYear && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.studyYear?.message}
          </p>
        )}
      </div>
      <h3 className="mt-10 mb-4 block text-lg font-medium text-gray-900">
        Dolgozat tartalmának feltöltése
      </h3>
      <div className="py-2">
        Formai követelmények:
        <ul className="list-disc py-2 text-sm text-gray-400">
          <li>
            A kivonat maximális hossza 2200 karakter (szóköz nélkül, cím
            nélkül).
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <label
          htmlFor="introduction"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Bevezetés
        </label>
        <textarea
          id="large-input"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register("introduction")}
        />
        {errors.introduction && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.introduction?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="mission"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Célkitűzések
        </label>
        <textarea
          id="mission"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register("mission")}
        />
        {errors.mission && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.mission?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="methods"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Módszer
        </label>
        <textarea
          id="methods"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register("methods")}
        />
        {errors.methods && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.methods?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="results"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Eredmények
        </label>
        <textarea
          id="results"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register("results")}
        />
        {errors.results && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.results?.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="conclusions"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Következtetés
        </label>
        <textarea
          id="conclusions"
          className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...register("conclusions")}
        />
        {errors.conclusions && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.conclusions?.message}
          </p>
        )}
      </div>
      <h3 className="mt-10 mb-4 block text-lg font-medium text-gray-900">
        Saját hozzájárulási nyilatkozat feltöltése
      </h3>
      <div className="ml-4">
        <p className="py-2 text-gray-600">
          A saját hozzájárulási nyilatkozat nevű dokumentum igazolja a szerző
          hozzájárulását a dolgozathoz.{" "}
          <a className="text-sky-600 underline" href={agreementDocUrl}>
            A minta dokumentum ide kattintással tölthető le.
          </a>
        </p>
        <p className="text-gray-600">
          A kék színnel kiegészített részek példaként szolgálnak az űrlap
          kitöltéséhez. Kérünk, hogy figyelmesen olvasd végig a dokumentumot
          kitöltés közben. Amennyiben további kérdések merülnének fel, keress
          minket az e-mail címünkön (tdk@mmdsz.ro), vagy írj a konferencia
          Facebook oldalán.
        </p>
        <FileUpload
          file={agreementDoc}
          setFile={setAgreementDoc}
          fileFormats=".pdf"
          id="upload-agreement"
        />
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 "
            {...register("acceptedTerms")}
          />
          {errors.acceptedTerms && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.acceptedTerms?.message}
            </p>
          )}
        </div>
        <label htmlFor="terms" className="ml-2 text-gray-600">
          A jelentkezéssel beleegyezel a szabályzatba.{" "}
          <NavLink
            to="/szabalyzat"
            target="_blank"
            className="text-sky-600 underline"
          >
            Szabáyzat elolvasása →
          </NavLink>
        </label>
      </div>
      {isValid && agreementDoc ? (
        <button
          className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          type="submit"
        >
          Jelentkezés
        </button>
      ) : (
        <button
          className="rounded-full bg-gray-300 px-10 py-4 font-semibold uppercase text-black drop-shadow-md xl:text-xl"
          disabled
          title="A jelentkezéshez ki kell töltedened az adataid és el kell fogadnod a szabáyzatot!"
        >
          Jelentkezés
        </button>
      )}
    </form>
  );
};

export default InitialSignupForm;
