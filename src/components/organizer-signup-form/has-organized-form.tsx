import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";

import type { SignupStep } from ".";
import { organizerGroups } from "../../constants";

const hasOrganizedFormSchema = z.object({
  hasOrganized: z.string(),
  organizerGroup: z.string().min(1, { message: "Add meg a szervezői csoport nevét!" }).nullable().default("-"),
});

export type HasOrganizedFormSchema = z.infer<typeof hasOrganizedFormSchema>;

const HasOrganizedForm = ({
  setHasOrganizedInfo,
  setCurrentStep,
}: {
  setHasOrganizedInfo: (hasOrganizedInfo: HasOrganizedFormSchema) => void;
  setCurrentStep: (currentStep: SignupStep) => void;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<HasOrganizedFormSchema>({
    resolver: zodResolver(hasOrganizedFormSchema),
  });

  const onSubmit: SubmitHandler<HasOrganizedFormSchema> = (data) => {
    setHasOrganizedInfo(data);
    setCurrentStep("questionsAnswers");
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
          <h3 className="mb-4 text-lg font-medium text-gray-900">Szerveztél már TDK-t?</h3>
          <fieldset className="ml-4 space-y-3">
            {["Igen", "Nem"].map((answer, index) => (
              <label
                key={index}
                htmlFor={answer}
                className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
              >
                <input
                  type="radio"
                  value={answer}
                  id={answer}
                  className="accent-tdk-accent"
                  {...register("hasOrganized")}
                  name="hasOrganized"
                />
                <p className="text-sm">{answer}</p>
              </label>
            ))}
          </fieldset>
        </div>
        {watch("hasOrganized") === "Igen" && (
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Milyen munkacsoportban tevékenykedtél?</h3>
            <fieldset className="ml-4 space-y-3">
              {organizerGroups.map(({ name }, index) => (
                <label
                  key={index}
                  htmlFor={name}
                  className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
                >
                  <input
                    type="radio"
                    value={name}
                    id={name}
                    className="accent-tdk-accent"
                    {...register("organizerGroup")}
                    name="organizerGroup"
                  />
                  <p className="text-sm">{name}.</p>
                </label>
              ))}
            </fieldset>
            {errors.organizerGroup && (
              <p className="mt-2 text-xs italic text-red-500"> {errors.organizerGroup?.message}</p>
            )}
          </div>
        )}
        <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-3/6 rounded-full bg-tdk-accent"></div>
            </div>
            <p className="py-3 text-sm font-light text-gray-500">3/6 - Tapasztalatok</p>
          </div>
          {watch("hasOrganized") == "Nem" || (watch("hasOrganized") == "Igen" && watch("organizerGroup") != null) ? (
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
              title="Add meg a szervezői csoport nevét!"
            >
              Tovább
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default HasOrganizedForm;
