import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

const coordinatorInfoSchema = z.object({
  coordinatorName: z.string().min(1, { message: "Add meg témavezető nevét!" }),
  institute: z
    .string()
    .min(1, { message: "Add meg a témavezető intézményét!!" }),
  email: z.string().email({ message: "Add meg a témavezető e-mail címét!" }),
  title: z.string().min(1, { message: "Add meg a témavezető titulusát!" }),
  otherTitle: z
    .string()
    .min(1, { message: "Add meg a témavezető titulusát!" })
    .optional(),
});

export type CoordinatorInfoSchema = z.infer<typeof coordinatorInfoSchema>;

interface CoordinatorInfoFormProps {
  setCoordinatorInfo: (CoordinatorInfo: CoordinatorInfoSchema) => void;
}

const CoordinatorInfo = ({ setCoordinatorInfo }: CoordinatorInfoFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<CoordinatorInfoSchema>({
    resolver: zodResolver(coordinatorInfoSchema),
  });

  const onSubmit: SubmitHandler<CoordinatorInfoSchema> = (data) => {
    setCoordinatorInfo(data);
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
      <form className="py-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 block text-lg font-medium text-gray-900"
          >
            Témavezető neve
          </label>
          <input
            type="text"
            id="name"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register("coordinatorName")}
          />
          {errors.coordinatorName && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.coordinatorName?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-lg font-medium text-gray-900"
          >
            Témavezető email címe
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
            htmlFor="institute"
            className="mb-2 block text-lg font-medium text-gray-900"
          >
            Témavezető intézménye
          </label>
          <input
            type="institute"
            id="name"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register("institute")}
          />

          {errors.institute && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.institute?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="titles"
            className="mb-2 block text-lg font-medium text-gray-900"
          >
            Témavezető titulusa
          </label>
          <select
            id="titles"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
            {...register("title")}
          >
            {[
              "Egyetemi tanár",
              "Egyetemi docens",
              "Egyetemi adjunktus",
              "Egyetemi tanársegéd",
              "Egyéb",
            ].map((title, index) => {
              return (
                <option className="text-md" key={index}>
                  {title}
                </option>
              );
            })}
          </select>
          {errors.title && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.title?.message}
            </p>
          )}
        </div>
        {watch("title") === "Egyéb" && (
          <div className="mb-6">
            <label
              htmlFor="other-title"
              className="mb-2 block text-lg font-medium text-gray-900"
            >
              Témavezető titulusa
            </label>
            <input
              type="text"
              id="other-title"
              className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register("otherTitle")}
              aria-invalid={errors.otherTitle ? "true" : "false"}
            />
            {errors.otherTitle && (
              <p className="mt-2 text-xs italic text-red-500">
                {" "}
                {errors.otherTitle?.message}
              </p>
            )}
          </div>
        )}
        {!isSubmitted &&
          (isValid ? (
            <button
              className="mt-2 mb-4 w-full rounded-full bg-tdk-accent py-2 text-center font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
              type="submit"
            >
              Témavezető adatainak elmentése
            </button>
          ) : (
            <button
              className="my-1 w-full rounded-full border bg-gray-300 py-2 text-center uppercase xl:text-lg"
              disabled
            >
              Témavezető adatainak elmentése
            </button>
          ))}
      </form>
    </div>
  );
};

export default CoordinatorInfo;
