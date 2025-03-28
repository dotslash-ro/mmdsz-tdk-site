import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";
import { SignupStep } from ".";

const organizerUniversityList = [
  "MOGYTTE",
  "Sapientia, EMTE, Marosvásárhely",
  "Marosvásárhelyi Művészeti Egyetem",
  "BBTE-Pedagógia, Marosvásárhely]",
];

const organizerInfoSchema = z.object({
  applicantName: z.string().min(1, { message: "Add meg a neved!" }),
  university: z.string().min(1, { message: "Válaszd ki az egyetemed!" }),
  email: z.string().email({ message: "Add meg az e-mail címed!" }),
  facebookLink: z.string().min(1, { message: "Add meg a Facebook linkedet!" }),
  department: z.string().min(1, { message: "Add meg a kart, amelyen tanulsz!" }),
  section: z.string().min(1, { message: "Add meg a szakod!" }),
  studentId: z.string().min(1, { message: "Add meg a beiskolázási azonosítód (Nr. matricol):" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Add meg a telefonszámod!" })
    .max(13, { message: "Helytelen telefonszám!" }),
  studyYear: z.string(),
  acceptedTerms: z.boolean().refine((v) => v, { message: "A jelentkezéshez el kell fogadnod a szabályzatot!" }),
});

export type OrganizerInfoSchema = z.infer<typeof organizerInfoSchema>;

const OrganizerInfoForm = ({
  setOrganizerInfo,
  setCurrentStep,
}: {
  setOrganizerInfo: (organizerInfo: OrganizerInfoSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<OrganizerInfoSchema>({
    resolver: zodResolver(organizerInfoSchema),
  });

  const onSubmit = async (data: OrganizerInfoSchema) => {
    // save to local storage
    setOrganizerInfo(data);
    setCurrentStep("traineeshipInfo");
  };

  if (isSubmitting) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }

  return (
    <form className="py-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="name" className="mb-2 block text-lg font-medium text-gray-900">
          Teljes név
        </label>
        <input
          type="text"
          id="name"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("applicantName")}
        />
        {errors.applicantName && <p className="mt-2 text-xs italic text-red-500"> {errors.applicantName?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="studentId" className="mb-2 block text-lg font-medium text-gray-900">
          Beiskolázási azonosító (Nr. matricol):
        </label>
        <input
          type="text"
          id="studentId"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("studentId")}
        />
        {errors.studentId && <p className="mt-2 text-xs italic text-red-500"> {errors.studentId?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 block text-lg font-medium text-gray-900">
          Email cím
        </label>
        <input
          type="email"
          id="email"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="mt-2 text-xs italic text-red-500"> {errors.email?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="fb-link" className="mb-2 block text-lg font-medium text-gray-900">
          Facebook profil link
        </label>
        <input
          type="text"
          id="fb-link"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("facebookLink")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.facebookLink && <p className="mt-2 text-xs italic text-red-500"> {errors.facebookLink?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="mb-2 block text-lg font-medium text-gray-900">
          Telefonszám
        </label>
        <input
          type="tel"
          id="phone"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("phoneNumber")}
          aria-invalid={errors.phoneNumber ? "true" : "false"}
        />
        {errors.phoneNumber && <p className="mt-2 text-xs italic text-red-500"> {errors.phoneNumber?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="universities" className="mb-2 block text-lg font-medium text-gray-900">
          Egyetem
        </label>
        <select
          id="universities"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-accent focus:outline-tdk-accent"
          {...register("university")}
        >
          {organizerUniversityList.map((university, index) => {
            return (
              <option className="text-md" key={index}>
                {university}
              </option>
            );
          })}
        </select>
        {errors.university && <p className="mt-2 text-xs italic text-red-500"> {errors.university?.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="department" className="mb-2 block text-lg font-medium text-gray-900">
          Kar
        </label>
        <input
          type="text"
          id="department"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("department")}
          aria-invalid={errors.department ? "true" : "false"}
        />
        {errors.department && <p className="mt-2 text-xs italic text-red-500"> {errors.department?.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="department" className="mb-2 block text-lg font-medium text-gray-900">
          Szak
        </label>
        <input
          type="text"
          id="section"
          className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-tdk-accent focus:outline-tdk-accent focus:ring-tdk-accent"
          {...register("section")}
          aria-invalid={errors.section ? "true" : "false"}
        />
        {errors.department && <p className="mt-2 text-xs italic text-red-500"> {errors.department?.message}</p>}
      </div>
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-medium text-gray-900">Évfolyam</h3>
        <fieldset className="flex-start ml-4 flex flex-wrap gap-3">
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
                />
                <label
                  htmlFor={`studyYear-${i}`}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white"
                >
                  <p className="text-sm font-medium">{i}.</p>
                </label>
              </div>
            ))}
          <div>
            <input
              type="radio"
              value="Mesterképzés"
              id={`masters`}
              className="peer hidden"
              {...register("studyYear")}
              name="studyYear"
            />
            <label
              htmlFor={`masters`}
              className="flex h-10 w-fit cursor-pointer items-center justify-center rounded-md border border-gray-300 px-2 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white"
            >
              <p className="text-sm font-medium">Mesterképzés</p>
            </label>
          </div>
        </fieldset>
        {errors.studyYear && <p className="mt-2 text-xs italic text-red-500"> {errors.studyYear?.message}</p>}
      </div>
      <div className="mb-6 flex items-start">
        <div className="ml-4 flex h-5 items-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="focus:ring-3 h-5 w-5 cursor-pointer rounded border border-tdk-accent bg-gray-50 accent-tdk-accent focus:ring-tdk-accent"
            {...register("acceptedTerms")}
          />
          {errors.acceptedTerms && (
            <p className="mx-3 mt-2 text-xs italic text-red-500"> {errors.acceptedTerms?.message}</p>
          )}
        </div>
        <label htmlFor="terms" className="ml-2 text-sm text-neutral-400">
          Beleegyezem, hogy az MMDSZ az adataimat a rendezvény lejártától számítva egy évig tárolja és egy esetleges, a
          rendezvényhez kapcsolódó, dokumentáció-ellenőrzés során azt felmutassa az illetékes szerveknek.{" "}
          <a href="http://www.mmdsz.ro/gdpr" target="_blank" className="text-tdk-accent underline">
            GDPR szabályzat elolvasása →
          </a>
        </label>
      </div>
      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-1/6 rounded-full bg-tdk-accent"></div>
          </div>
          <p className="py-3 text-sm font-light text-gray-500">1/6 - Személyes adatok</p>
        </div>
        {isValid ? (
          <button
            className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
            type="submit"
          >
            Tovább
          </button>
        ) : (
          <button
            className="rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md xl:text-lg"
            disabled
            type="submit"
            title="A továbblépéshez ki kell töltedened az adataid!"
          >
            Tovább
          </button>
        )}
      </div>
    </form>
  );
};

export default OrganizerInfoForm;
