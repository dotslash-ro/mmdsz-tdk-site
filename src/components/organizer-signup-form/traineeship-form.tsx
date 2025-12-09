import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";
import { type SignupStep } from ".";

const options = ["Igen, első félévben", "Igen, második félévben", "Igen, egész évben", "Nem"] as const;

const traineeShipFormSchema = z.object({
  answer: z.enum(options),
});

export type TraineeShipFormSchema = z.infer<typeof traineeShipFormSchema>;

const TraineeshipInfoForm = ({
  setTraineeshipData,
  setCurrentStep,
}: {
  setTraineeshipData: (traineeshipData: TraineeShipFormSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TraineeShipFormSchema>({
    resolver: zodResolver(traineeShipFormSchema),
  });

  const onSubmit = async (data: TraineeShipFormSchema) => {
    // save to local storage
    setTraineeshipData(data);
    setCurrentStep("hasOrganized");
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
        <h3 className="mb-4 text-lg font-medium text-gray-900">
          Az elmúlt tanévben voltam fél éves, vagy egész éves részképzésen (Erasmus, Hunyadi János, EMMI-ELTE).
        </h3>
        <fieldset className="ml-4 space-y-3">
          {options.map((answer, index) => (
            <label
              key={index}
              htmlFor={answer}
              className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
            >
              <input
                type="radio"
                value={answer}
                id={answer}
                className="accent-tdk-accent"
                {...register("answer")}
                name="answer"
              />
              <p className="text-sm">{answer}.</p>
            </label>
          ))}
        </fieldset>
        {errors.answer && <p className="mt-2 text-xs italic text-red-500"> {errors.answer?.message}</p>}
      </div>

      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-2/6 rounded-full bg-tdk-accent"></div>
          </div>
          <p className="py-3 text-sm font-light text-gray-500">2/6 - Részképzés</p>
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
            title="Ki kell választanod egy választ!"
          >
            Tovább
          </button>
        )}
      </div>
    </form>
  );
};

export default TraineeshipInfoForm;
