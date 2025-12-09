import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";
import { type SignupStep } from ".";
import { useMemo } from "react";
import { organizerGroups } from "../../constants";

const organizerGroupFormSchema = z.object({
  firstChoice: z.string().min(1, { message: "Válaszd ki az elsődleges szervezői csoportodat!" }),
  secondChoice: z.string().min(1, { message: "Válaszd ki a másodlagos szervezői csoportodat!" }),
  reason: z.string().min(1, { message: "Add meg, hogy miért szeretnél a kiválasztott csoportban szervező lenni!" }),
});

export type OrganizerGroupFormSchema = z.infer<typeof organizerGroupFormSchema>;

const OrganizerGroupSelectForm = ({
  setOrganizerGroupData,
  setCurrentStep,
}: {
  setOrganizerGroupData: (groupData: OrganizerGroupFormSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<OrganizerGroupFormSchema>({
    resolver: zodResolver(organizerGroupFormSchema),
  });

  const onSubmit = async (data: OrganizerGroupFormSchema) => {
    // save to local storage
    setOrganizerGroupData(data);
    setCurrentStep("miscInfo");
  };

  const selectableGroups = useMemo(() => organizerGroups.filter(({ canSelect }) => canSelect), [organizerGroups]);

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
        <h3 className="mb-4 text-lg font-medium text-gray-900">
          A következő munkacsoportban szeretnék szervező lenni - 1. opció:
        </h3>
        <fieldset className="ml-4 space-y-3">
          {selectableGroups.map(({ name }, index) => (
            <label
              key={index}
              htmlFor={`first-choice-${name}`}
              className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
            >
              <input
                type="radio"
                value={name}
                id={`first-choice-${name}`}
                className="accent-tdk-accent"
                {...register("firstChoice")}
                name="firstChoice"
              />
              <p className="text-sm">{name}</p>
            </label>
          ))}
        </fieldset>
        {errors.firstChoice && <p className="mt-2 text-xs italic text-red-500"> {errors.firstChoice?.message}</p>}
      </div>
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-medium text-gray-900">
          A következő munkacsoportban szeretnék szervező lenni - 2. opció:
        </h3>
        <fieldset className="ml-4 space-y-3">
          {selectableGroups.map(({ name }, index) => (
            <label
              key={index}
              htmlFor={`second-choice-${name}`}
              className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
            >
              <input
                type="radio"
                value={name}
                id={`second-choice-${name}`}
                className="accent-tdk-accent"
                {...register("secondChoice")}
                name="secondChoice"
              />
              <p className="text-sm">{name}</p>
            </label>
          ))}
        </fieldset>
        {errors.secondChoice && <p className="mt-2 text-xs italic text-red-500"> {errors.secondChoice?.message}</p>}
      </div>
      <div className="mb-6">
        <label className="mb-4 text-lg font-medium text-gray-900" htmlFor="reason">
          Miért szeretnél az általad megjelölt munkacsoportokban tevékenykedni?
        </label>
        <textarea
          id="reason"
          className="block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-accent focus:outline-none"
          {...register("reason")}
        />
        {errors.reason && <p className="mt-2 text-xs italic text-red-500">{errors.reason?.message}</p>}
      </div>

      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-5/6 rounded-full bg-tdk-accent"></div>
          </div>
          <p className="py-3 text-sm font-light text-gray-500">5/6 - TDK szervezés</p>
        </div>
        <button
          className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline disabled:bg-gray-300 disabled:text-black disabled:hover:no-underline xl:text-lg"
          type="submit"
          disabled={!isValid}
          title={isValid ? "Tovább" : "Ki kell választanod egy választ!"}
        >
          Tovább
        </button>
      </div>
    </form>
  );
};

export default OrganizerGroupSelectForm;
