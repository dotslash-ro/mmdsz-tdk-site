import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

const coordinatorInfoSchema = z
  .object({
    firstName: z.string().min(1, { message: "Add meg témavezető vezetéknevét!" }),
    lastName: z.string().min(1, { message: "Add meg témavezető keresztnevét!" }),
    institute: z.string().min(1, { message: "Add meg a témavezető intézményét!!" }),
    email: z
      .string()
      .min(1, { message: "Add meg a témavezető e-mail címét!" })
      .email({ message: "Helytelen e-mail cím" }),
    title: z.string().min(1, { message: "Add meg a témavezető titulusát!" }),
    otherTitle: z.string().min(1, { message: "Add meg a témavezető titulusát!" }).optional(),
    universityJobTitle: z.string(),
    universityJobDepartment: z.string(),
    otherJobTitle: z.string().optional(),
    otherJobName: z.string().optional(),
    hasUniversityJob: z.boolean(),
  })
  .refine(
    (it) => {
      if (it.hasUniversityJob) {
        return it.universityJobTitle && it.universityJobDepartment && it.institute;
      } else {
        return it.otherJobName && it.otherJobTitle;
      }
    },
    { message: "Add meg a témavezető munkahelyére vonatkozó adatokat!" }
  );

export type CoordinatorInfoSchema = z.infer<typeof coordinatorInfoSchema>;

interface CoordinatorInfoFormProps {
  setCoordinatorInfo: (CoordinatorInfo: CoordinatorInfoSchema) => void;
  defaultValues?: CoordinatorInfoSchema;
  removeCoordinatorForm: () => void;
}

const CoordinatorInfo = ({ setCoordinatorInfo, defaultValues, removeCoordinatorForm }: CoordinatorInfoFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<CoordinatorInfoSchema>({
    resolver: zodResolver(coordinatorInfoSchema),
    defaultValues: defaultValues ?? { hasUniversityJob: true },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CoordinatorInfoSchema> = (data) => {
    setCoordinatorInfo(data);
  };

  const hasUniversityJob = watch("hasUniversityJob");

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
        onClick={removeCoordinatorForm}
      >
        &times;
      </button>
      <form className="py-10 pr-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="first-name" className="mb-2 block text-lg font-medium text-gray-900">
            Témavezető vezetékneve
          </label>
          <input
            type="text"
            id="first-name"
            data-error={errors.firstName != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("firstName")}
          />
          {errors.firstName && <p className="mt-2 text-xs italic text-red-500"> {errors.firstName?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="last-name" className="mb-2 block text-lg font-medium text-gray-900">
            Témavezető keresztneve
          </label>
          <input
            type="text"
            id="last-name"
            data-error={errors.lastName != undefined}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("lastName")}
          />
          {errors.lastName && <p className="mt-2 text-xs italic text-red-500"> {errors.lastName?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-lg font-medium text-gray-900">
            Témavezető email címe
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
          <label htmlFor="titles" className="mb-2 block text-lg font-medium text-gray-900">
            Témavezető titulusa
          </label>
          <select
            id="titles"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("title")}
          >
            {["Egyetemi tanár", "Egyetemi docens", "Egyetemi adjunktus", "Egyetemi tanársegéd", "Egyéb"].map(
              (title, index) => {
                return (
                  <option className="text-md" key={index}>
                    {title}
                  </option>
                );
              }
            )}
          </select>
          {errors.title && <p className="mt-2 text-xs italic text-red-500"> {errors.title?.message}</p>}
        </div>
        {watch("title") === "Egyéb" && (
          <div className="mb-6">
            <label htmlFor="other-title" className="mb-2 block text-lg font-medium text-gray-900">
              Témavezető titulusa
            </label>
            <input
              type="text"
              id="other-title"
              data-error={errors.otherTitle != undefined}
              className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
              {...register("otherTitle")}
              aria-invalid={errors.otherTitle ? "true" : "false"}
            />
            {errors.otherTitle && <p className="mt-2 text-xs italic text-red-500"> {errors.otherTitle?.message}</p>}
          </div>
        )}
        <div className="mb-6 ml-6 flex h-5 items-center">
          <input
            id="uni-job"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 cursor-pointer rounded border border-tdk-accent bg-gray-50 accent-tdk-accent focus:ring-tdk-accent"
            {...register("hasUniversityJob")}
          />
          <label htmlFor="uni-job" className="ml-2 text-neutral-900">
            A témavezető intézményi munkahellyel rendelkezik
          </label>
        </div>
        {hasUniversityJob ? (
          <>
            <div className="mb-6">
              <label htmlFor="institute" className="mb-2 block text-lg font-medium text-gray-900">
                Témavezető intézménye
              </label>
              <input
                type="institute"
                id="name"
                data-error={errors.institute != undefined}
                className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
                {...register("institute")}
              />

              {errors.institute && <p className="mt-2 text-xs italic text-red-500"> {errors.institute?.message}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="job-title" className="mb-2 block text-lg font-medium text-gray-900">
                Témavezető intézményi beosztása
              </label>
              <input
                type="text"
                id="job-title"
                data-error={errors.universityJobTitle != undefined}
                className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
                {...register("universityJobTitle")}
                aria-invalid={errors.universityJobTitle ? "true" : "false"}
              />
              {errors.universityJobTitle && (
                <p className="mt-2 text-xs italic text-red-500"> {errors.universityJobTitle?.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="job-dept" className="mb-2 block text-lg font-medium text-gray-900">
                Témavezető intézményi kara
              </label>
              <input
                type="text"
                id="job-dept"
                data-error={errors.universityJobDepartment != undefined}
                className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
                {...register("universityJobDepartment")}
                aria-invalid={errors.universityJobDepartment ? "true" : "false"}
              />
              {errors.universityJobDepartment && (
                <p className="mt-2 text-xs italic text-red-500"> {errors.universityJobDepartment?.message}</p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <label htmlFor="other-job-title" className="mb-2 block text-lg font-medium text-gray-900">
                Témavezető munkahelyének neve
              </label>
              <input
                type="text"
                id="other-job-title"
                data-error={errors.otherJobName != undefined}
                className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
                {...register("otherJobName")}
                aria-invalid={errors.otherJobName ? "true" : "false"}
              />
              {errors.otherJobName && (
                <p className="mt-2 text-xs italic text-red-500"> {errors.otherJobName?.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="other-job" className="mb-2 block text-lg font-medium text-gray-900">
                Témavezető munkahelyi beosztása
              </label>
              <input
                type="text"
                id="other-job"
                data-error={errors.otherJobTitle != undefined}
                className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
                {...register("otherJobTitle")}
                aria-invalid={errors.otherJobTitle ? "true" : "false"}
              />
              {errors.otherJobTitle && (
                <p className="mt-2 text-xs italic text-red-500"> {errors.otherJobTitle?.message}</p>
              )}
            </div>
          </>
        )}
        {!isSubmitted &&
          (isValid ? (
            <button
              className="mt-2 mb-4 h-fit w-full rounded-md bg-tdk-accent py-2 text-center font-semibold uppercase text-white drop-shadow-md hover:underline"
              type="submit"
            >
              Témavezető adatainak elmentése
            </button>
          ) : (
            <button className="my-1 h-fit w-full rounded-md border bg-gray-300 py-2 text-center uppercase" disabled>
              Témavezető adatainak elmentése
            </button>
          ))}
      </form>
    </div>
  );
};

export default CoordinatorInfo;
