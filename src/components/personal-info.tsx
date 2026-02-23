import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDegreeList, departments, scheduleTypes, sections, universityList } from "../constants";
import { SignupStep } from "./signup-wrapper";
import { ClipLoader } from "react-spinners";

const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: "Add meg a vezetékneved!" }),
  lastName: z.string().min(1, { message: "Add meg a kereszteneved!" }),
  email: z.string().min(1, { message: "Add meg az e-mail címed!" }).email({ message: "Helytelen e-mail cím" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Add meg a telefonszámod!" })
    .max(13, { message: "Helytelen telefonszám!" }),
  university: z.string().min(1, { message: "Válaszd ki az egyetemed!" }),
  otherUniversity: z.string().min(1, { message: "Add meg az egyetemed nevét!" }).optional(),
  department: z.string().min(1, { message: "Add meg a kart, amelyen tanulsz!" }),
  otherDepartment: z.string().min(1, { message: "Add meg a karod nevét!" }).optional(),
  section: z.string().min(1, { message: "Add meg a karod!" }),
  otherSection: z.string().min(1, { message: "Add meg a szakod nevét!" }).optional(),
  studyYear: z.string(),
  nrOfActiveSemesters: z
    .string()
    .min(1, { message: "Add meg az aktív féléveid számát!" })
    .refine(
      (it) => {
        const asNumber = Number(it);
        return !Number.isNaN(asNumber) && asNumber <= 12 && asNumber > 0;
      },
      { message: "Nem lehet kisebb mint 1 vagy több mint 12" }
    ),
  academicDegree: z.string().min(1, { message: "Add meg a jogviszonyod típusát!" }),
  scheduleType: z.string().min(1, { message: "Add meg a jogviszonyod munkarendjét!" }),
  startYearOfStudies: z.string(),
});

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;

interface PersonalInfoFormProps {
  setPersonalInfo: (personalInfo: PersonalInfoSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
  defaultValues?: PersonalInfoSchema;
}

const PersonalInfo = ({ setPersonalInfo, setCurrentStep, defaultValues }: PersonalInfoFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    mode: "all",
    defaultValues,
  });

  const onSubmit: SubmitHandler<PersonalInfoSchema> = (data) => {
    setPersonalInfo(data);
    setCurrentStep("documentInfo");
    localStorage.setItem("personalInfo", JSON.stringify(data));
  };

  if (isSubmitting) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }

  return (
    <div>
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
          <label htmlFor="email" className="mb-2 block text-lg font-medium text-gray-900">
            Email cím
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            data-error={errors.email != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="mt-2 text-xs italic text-red-500"> {errors.email?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="mb-2 block text-lg font-medium text-gray-900">
            Telefonszám
          </label>
          <input
            type="tel"
            id="phone"
            data-error={errors.phoneNumber != undefined}
            autoComplete="tel"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
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
          <label htmlFor="department" className="mb-2 block text-lg font-medium text-gray-900">
            Kar
          </label>
          <select
            id="department"
            data-error={errors.department != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("department")}
          >
            {departments.map((dep, index) => {
              return (
                <option className="text-md" key={index}>
                  {dep}
                </option>
              );
            })}
          </select>
          {errors.department && <p className="mt-2 text-xs italic text-red-500"> {errors.department?.message}</p>}
        </div>
        {watch("department") === "Egyéb" && (
          <div className="mb-6">
            <label htmlFor="other-department" className="mb-2 block text-lg font-medium text-gray-900">
              Kar neve
            </label>
            <input
              type="text"
              id="other-department"
              data-error={errors.otherDepartment != undefined}
              className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
              {...register("otherDepartment")}
              aria-invalid={errors.otherDepartment ? "true" : "false"}
            />
            {errors.otherDepartment && (
              <p className="mt-2 text-xs italic text-red-500"> {errors.otherDepartment?.message}</p>
            )}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="section" className="mb-2 block text-lg font-medium text-gray-900">
            Szak
          </label>
          <select
            id="section"
            data-error={errors.section != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("section")}
          >
            {sections.map((section, index) => {
              return (
                <option className="text-md" key={index}>
                  {section}
                </option>
              );
            })}
          </select>
          {errors.section && <p className="mt-2 text-xs italic text-red-500"> {errors.section?.message}</p>}
        </div>
        {watch("section") === "Egyéb" && (
          <div className="mb-6">
            <label htmlFor="other-section" className="mb-2 block text-lg font-medium text-gray-900">
              Kar neve
            </label>
            <input
              type="text"
              id="other-section"
              data-error={errors.otherSection != undefined}
              className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
              {...register("otherSection")}
              aria-invalid={errors.otherSection ? "true" : "false"}
            />
            {errors.otherSection && <p className="mt-2 text-xs italic text-red-500"> {errors.otherSection?.message}</p>}
          </div>
        )}
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
                  />
                  <label
                    htmlFor={`studyYear-${i}`}
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-300 py-2 px-3 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white md:px-5"
                  >
                    <p className="text-sm font-medium">{i}.</p>
                  </label>
                </div>
              ))}
          </fieldset>
          {errors.studyYear && <p className="mt-2 text-xs italic text-red-500"> {errors.studyYear?.message}</p>}
        </div>
        {/* Jogviszony típusa */}
        <div className="mb-6">
          <label htmlFor="academic-degree" className="mb-2 block text-lg font-medium text-gray-900">
            Jogviszony típusa
          </label>
          <select
            id="academic-degree"
            data-error={errors.academicDegree != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("academicDegree")}
          >
            {academicDegreeList.map((ad, index) => {
              return (
                <option className="text-md" key={index}>
                  {ad}
                </option>
              );
            })}
          </select>
          {errors.academicDegree && (
            <p className="mt-2 text-xs italic text-red-500"> {errors.academicDegree?.message}</p>
          )}
        </div>
        {/* Jogviszony munkarendje */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Jogviszony munkarendje</h3>
          <fieldset className="flex flex-wrap justify-evenly gap-3">
            {scheduleTypes.map((it) => (
              <div key={it}>
                <input
                  type="radio"
                  value={it}
                  id={`schedule-type-${it}`}
                  className="peer hidden"
                  {...register("scheduleType")}
                  name="scheduleType"
                />
                <label
                  htmlFor={`schedule-type-${it}`}
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-300 py-2 px-3 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white md:px-5"
                >
                  <p className="text-sm font-medium">{it}</p>
                </label>
              </div>
            ))}
          </fieldset>
          {errors.scheduleType && <p className="mt-2 text-xs italic text-red-500"> {errors.scheduleType?.message}</p>}
        </div>
        {/* Aktív félévek száma  */}
        <div className="mb-6">
          <label htmlFor="nr-of-active-semesters" className="mb-2 block text-lg font-medium text-gray-900">
            Aktív félévek száma
          </label>
          <input
            type="number"
            id="nr-of-active-semesters"
            data-error={errors.nrOfActiveSemesters != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("nrOfActiveSemesters")}
          />
          {errors.nrOfActiveSemesters && (
            <p className="mt-2 text-xs italic text-red-500"> {errors.nrOfActiveSemesters?.message}</p>
          )}
        </div>
        {/* Egyetem megkezdésének éve */}
        <div className="mb-6">
          <label htmlFor="start-year" className="mb-2 block text-lg font-medium text-gray-900">
            Egyetem megkezdésének éve
          </label>
          <select
            id="start-year"
            data-error={errors.startYearOfStudies != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("startYearOfStudies")}
          >
            {Array.from({ length: 11 }, (_, i) => new Date().getFullYear() - i).map((year, index) => {
              return (
                <option className="text-md" key={index}>
                  {year}
                </option>
              );
            })}
          </select>
          {errors.startYearOfStudies && (
            <p className="mt-2 text-xs italic text-red-500"> {errors.startYearOfStudies?.message}</p>
          )}
        </div>
        {/* Tovabb */}
        <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-1/6 rounded-full bg-tdk-primary"></div>
            </div>
            <p className="py-3 text-sm font-light text-gray-500">1/6 - Személyes adatok</p>
          </div>
          {isValid ? (
            <button
              className="h-fit rounded-md bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline"
              type="submit"
            >
              Tovább
            </button>
          ) : (
            <button
              className="h-fit rounded-md bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md"
              disabled
              type="submit"
              title="A továbblépéshez ki kell töltedened az adataid!"
            >
              Tovább
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
