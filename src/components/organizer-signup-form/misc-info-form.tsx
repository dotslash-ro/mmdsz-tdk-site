import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";

const miscInfOFormSchema = z.object({
  willBePresenting: z.string(),
  drivesACar: z.string(),
  isPartOfDanceGroup: z.string(),
});

export type MiscInfoFormSchema = z.infer<typeof miscInfOFormSchema>;

const MiscInfoForm = ({ setMiscInfo }: { setMiscInfo: (data: MiscInfoFormSchema) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<MiscInfoFormSchema>({
    resolver: zodResolver(miscInfOFormSchema),
  });

  const onSubmit = async (data: MiscInfoFormSchema) => {
    setMiscInfo(data);
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
          <h3 className="mb-4 text-lg font-medium text-gray-900">A 32.TDK-ra készülsz dolgozattal?</h3>
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
                  {...register("willBePresenting")}
                  name="willBePresenting"
                />
                <p className="text-sm">{answer}</p>
              </label>
            ))}
          </fieldset>
        </div>
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Tagja vagy az MMDSZ haladó néptánccsoportnak?</h3>
          <fieldset className="ml-4 space-y-3">
            {["Igen", "Nem"].map((answer, index) => (
              <label
                key={index}
                htmlFor={`dance-${answer}`}
                className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
              >
                <input
                  type="radio"
                  value={answer}
                  id={`dance-${answer}`}
                  className="accent-tdk-accent"
                  {...register("isPartOfDanceGroup")}
                  name="isPartOfDanceGroup"
                />
                <p className="text-sm">{answer}</p>
              </label>
            ))}
          </fieldset>
        </div>
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-medium text-gray-900">
            Van autód és tudnád használni a TDK ideje alatt? Természetesen a szervezés ideje alatt elfogyasztott
            üzemanyag költségeit igyekszünk megtéríteni.
          </h3>
          <fieldset className="ml-4 space-y-3">
            {["Igen", "Nem"].map((answer, index) => (
              <label
                key={index}
                htmlFor={`drive-${answer}`}
                className="has-[:checked]:bg-tdk-accent has-[:checked]:text-white flex cursor-pointer gap-2 rounded-md border border-gray-200 py-2 px-3 text-gray-900  hover:border-tdk-accent"
              >
                <input
                  type="radio"
                  value={answer}
                  id={`drive-${answer}`}
                  className="accent-tdk-accent"
                  {...register("drivesACar")}
                  name="drivesACar"
                />
                <p className="text-sm">{answer}</p>
              </label>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="w-6/6 h-2 rounded-full bg-tdk-accent"></div>
            </div>
            <p className="py-3 text-sm font-light text-gray-500">6/6 - Egyéb információk</p>
          </div>
          {isValid ? (
            <button
              className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
              type="submit"
            >
              Jelentkezés
            </button>
          ) : (
            <button
              className="rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md xl:text-lg"
              disabled
              type="submit"
              title="Add meg a szervezői csoport nevét!"
            >
              Jelentkezés
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MiscInfoForm;
