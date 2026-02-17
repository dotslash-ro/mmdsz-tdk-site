import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDegreeList, departments, scheduleTypes, sections, universityList } from "../constants";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";

const CoAuthorInfoSchema = z.object({
  firstName: z.string().min(1, { message: "Add meg a társszerző vezetéknevét!" }),
  lastName: z.string().min(1, { message: "Add meg a társszerző keresztenevét!" }),
  university: z.string().min(1, { message: "Add meg a társszerző egyetemét!" }),
  otherUniversity: z.string().min(1, { message: "Add meg a társszerző egyetemének nevét!" }).optional(),
  department: z.string().min(1, { message: "Add meg a társszerző karát!" }),
  otherDepartment: z.string().min(1, { message: "Add meg a karod nevét!" }).optional(),
  section: z.string().min(1, { message: "Add meg a társszerző szakát!" }),
  otherSection: z.string().min(1, { message: "Add meg a szakod nevét!" }).optional(),
  email: z
    .string()
    .min(1, { message: "Add meg a társszerző email címét!" })
    .email({ message: "Helytelen e-mail cím!" }),
  studyYear: z.string().regex(/[123456]/, { message: "Add meg a társszerző évfolyamát!" }),
  nrOfActiveSemesters: z.coerce
    .number()
    .gt(0, { message: "Nem lehet kevesebb mint 1!" })
    .lte(12, { message: "Nem lehet több mint 12!" }),
  academicDegree: z.string().min(1, { message: "Add meg a társszerző jogviszonyának típusát!" }),
  scheduleType: z.string().min(1, { message: "Add meg a jogviszonyának munkarendjét!" }),
});

export type CoAuthorInfoSchema = z.infer<typeof CoAuthorInfoSchema>;

interface CoAuthorInfoFormProps {
  setCoAuthorInfo: (CoAuthorInfo: CoAuthorInfoSchema) => void;
  removeCoAuthorForm: () => void;
  setIsDirty: (isDirty: boolean) => void;
  index: number;
  defaultValues?: CoAuthorInfoSchema;
}

const CoAuthorInfo = ({
  setCoAuthorInfo,
  removeCoAuthorForm,
  index,
  setIsDirty,
  defaultValues,
}: CoAuthorInfoFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting, isDirty, isSubmitted },
  } = useForm<CoAuthorInfoSchema>({
    resolver: zodResolver(CoAuthorInfoSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CoAuthorInfoSchema> = (data) => {
    setCoAuthorInfo(data);
  };
  useEffect(() => {
    setIsDirty(!isSubmitted && isDirty);
  }, [isSubmitted, isDirty]);

  if (isSubmitting) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        className="absolute right-4 top-8 flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 text-lg font-semibold text-gray-400 transition-colors hover:border-gray-900 hover:text-gray-900"
        onClick={removeCoAuthorForm}
      >
        &times;
      </button>
      <form className="py-10 pr-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="first-name" className="mb-2 block text-lg font-medium text-gray-900">
            Társszerző vezetékneve
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
            Társszerző keresztneve
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
            Társszerző email címe
          </label>
          <input
            type="email"
            id="email"
            data-error={errors.email != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="mt-2 text-xs italic text-red-500"> {errors.email?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="universities" className="mb-2 block text-lg font-medium text-gray-900">
            Társszerző egyeteme
          </label>
          <select
            id="universities"
            data-error={errors.university}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary focus:outline-none"
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
              Társszerző egyetemének neve
            </label>
            <input
              type="text"
              id="other-university"
              data-error={errors.otherUniversity}
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
            Társszerző kara
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
            Társszerző szakja
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
          <h3 className="mb-4 text-lg font-medium text-gray-900">Társszerző évfolyama</h3>
          <fieldset className="flex flex-wrap justify-evenly gap-3">
            {[...Array(6).keys()]
              .map((i) => i + 1)
              .map((i) => (
                <div key={i}>
                  <input
                    type="radio"
                    value={i}
                    id={`studyYear-${i}-${index}`}
                    className="peer hidden"
                    {...register("studyYear")}
                    name="studyYear"
                  />
                  <label
                    htmlFor={`studyYear-${i}-${index}`}
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white md:px-5"
                  >
                    <p className="text-sm font-medium">{i}.</p>
                  </label>
                </div>
              ))}
          </fieldset>
          {errors.studyYear && <p className="mt-2 text-xs italic text-red-500"> {errors.studyYear?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="academic-degree" className="mb-2 block text-lg font-medium text-gray-900">
            Társszerző jogviszonyának típusa
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
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Társszerző jogviszonyának munkarendje</h3>
          <fieldset className="flex flex-wrap justify-evenly gap-3">
            {scheduleTypes.map((it) => (
              <div key={it}>
                <input
                  type="radio"
                  value={it}
                  id={`schedule-type-${it}`}
                  className="peer hidden"
                  {...register("scheduleType")}
                  name="schedule-type"
                />
                <label
                  htmlFor={`schedule-type-${it}`}
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-300 py-2 px-3 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white md:px-5"
                >
                  <p className="text-sm font-medium">{it}.</p>
                </label>
              </div>
            ))}
          </fieldset>
          {errors.scheduleType && <p className="mt-2 text-xs italic text-red-500"> {errors.scheduleType?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="nr-of-active-semesters" className="mb-2 block text-lg font-medium text-gray-900">
            Társszerző aktív féléveinek száma
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
        {!isSubmitted && isValid ? (
          <button
            className="mt-2 mb-4 w-full rounded-full bg-tdk-accent py-2 text-center font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
            type="submit"
          >
            Társszerző adatainak elmentése
          </button>
        ) : (
          <button
            className="mt-2 mb-4 w-full cursor-not-allowed rounded-full bg-tdk-accent py-2 text-center font-semibold uppercase text-white opacity-50 drop-shadow-md grayscale xl:text-lg"
            disabled
          >
            Társszerző adatainak elmentése
          </button>
        )}
      </form>
    </div>
  );
};

export default CoAuthorInfo;
