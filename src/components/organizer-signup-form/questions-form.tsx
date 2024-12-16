import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";
import { type SignupStep } from ".";

const questions = [
  "Milyen, az MMDSZ-től független szervezési tapasztalatokkal rendelkezel?",
  "Mit gondolsz, mi a legnehezebb egy rendezvény megszervezésében?",
  "Mit gondolsz, hogyan lehet az általad említett nehézségeket a leghatékonyabban kijavítani, esetleg kiküszöbölni?",
  "Lenne valamilyen innovatív ötleted a rendezvényt illetően? Mi az ami nélkül a TDK nem lehetne TDK?",
] as const;

const questionsAswersFormSchema = z.object({
  ...Object.fromEntries(questions.map((question) => [question, z.string().min(1, { message: "Add meg a választ!" })])),
});

export type QuestionsAnswersFormSchema = z.infer<typeof questionsAswersFormSchema>;

const QuestionsForm = ({
  setQuestionsFormData,
  setCurrentStep,
}: {
  setQuestionsFormData: (traineeshipData: QuestionsAnswersFormSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<QuestionsAnswersFormSchema>({
    resolver: zodResolver(questionsAswersFormSchema),
  });

  const onSubmit = async (data: QuestionsAnswersFormSchema) => {
    // save to local storage
    setQuestionsFormData(data);
    setCurrentStep("organizerGroup");
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
      {questions.map((question, index) => (
        <div className="mb-6" key={index}>
          <label className="mb-4 text-lg font-medium text-gray-900" htmlFor={question}>
            {question}
          </label>
          <textarea
            id={question}
            className="block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-accent focus:outline-none"
            {...register(question)}
          />
          {errors[question] && <p className="mt-2 text-xs italic text-red-500">{errors[question]?.message}</p>}
        </div>
      ))}

      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-4/6 rounded-full bg-tdk-accent"></div>
          </div>
          <p className="py-3 text-sm font-light text-gray-500">4/6 - Egyéni hozzájárulás</p>
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

export default QuestionsForm;
