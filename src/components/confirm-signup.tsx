import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import { ClipLoader } from "react-spinners";
import { PersonalInfoSchema } from "./personal-info";
import { DocumentInfoSchema } from "./document-info";
import { CoAuthorInfoSchema } from "./coauthor-info";
import { CoordinatorInfoSchema } from "./coordinator-info";
import { SignupStep } from "./signup-wrapper";

const confirmSignupSchema = z.object({
  acceptedTerms: z.literal(true, {
    errorMap: () => ({ message: "El kell fogadnod a szabályzatot!" }),
  }),
});

export type ConfirmSingupSchema = z.infer<typeof confirmSignupSchema>;

interface ConfirmSignupProps {
  personalInfo?: PersonalInfoSchema;
  documentInfo?: DocumentInfoSchema;
  coAuthorInfos: Array<CoAuthorInfoSchema>;
  coordinatorInfos: Array<CoordinatorInfoSchema>;
  agreementDoc?: File;
  onSignup: () => void;
  setCurrentStep: (step: SignupStep) => void;
}

const ConfirmSignup = ({
  personalInfo,
  coordinatorInfos,
  coAuthorInfos,
  agreementDoc,
  documentInfo,
  onSignup,
  setCurrentStep,
}: ConfirmSignupProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ConfirmSingupSchema>({
    resolver: zodResolver(confirmSignupSchema),
  });

  const onSubmit: SubmitHandler<ConfirmSingupSchema> = () => {
    onSignup();
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
      <div className="pt-10 pb-14">
        <div className="group">
          <div className="flex items-center gap-2 pt-4 pb-2">
            <h2 className="text-lg font-semibold group-hover:underline">Személyes adatok</h2>
            <button
              onClick={() => {
                setCurrentStep("personalInfo");
              }}
              className="group hidden h-6 w-6 rounded-md border border-gray-300 px-1 hover:border-gray-900 group-hover:block"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-300 group-hover:stroke-gray-900"
              >
                <path
                  d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
          <ul className="ml-6 list-disc">
            <li>
              <label htmlFor="applicantName" className="mr-2 font-light italic text-gray-600">
                Jelentkező neve:
              </label>
              <span id="applicantName" className="mt-2 font-light">
                {personalInfo?.applicantName}
              </span>
            </li>
            <li>
              <label htmlFor="university" className="mr-2 font-light italic text-gray-600">
                Jelentkező egyeteme:
              </label>
              <span id="university" className="mt-2 font-light">
                {personalInfo?.university == "Egyéb" ? personalInfo?.otherUniversity : personalInfo?.university}
              </span>
            </li>
            <li>
              <label htmlFor="studyYear" className="mr-2 font-light italic text-gray-600">
                Jelentkező évfolyama:
              </label>
              <span id="studyYear" className="mt-2 font-light">
                {personalInfo?.studyYear}
              </span>
            </li>
          </ul>
        </div>
        <div className="group">
          <div className="flex items-center gap-2 pt-4 pb-2">
            <h2 className="text-lg font-semibold group-hover:underline">Kivonat tartalma</h2>
            <button
              onClick={() => {
                setCurrentStep("documentInfo");
              }}
              className="group hidden h-6 w-6 rounded-md border border-gray-300 px-1 hover:border-gray-900 group-hover:block"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-300 group-hover:stroke-gray-900"
              >
                <path
                  d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
          <ul className="ml-6 list-disc">
            <li>
              <label htmlFor="hungarianTitle" className="mr-2 font-light italic text-gray-600">
                Magyar cím:
              </label>
              <span id="hungarianTitle" className="mt-2 font-light">
                {documentInfo?.hungarianTitle}
              </span>
            </li>
            <li>
              <label htmlFor="romanianTitle" className="mr-2 font-light italic text-gray-600">
                Román cím:
              </label>
              <span id="romanianTitle" className="mt-2 font-light">
                {documentInfo?.romanianTitle}
              </span>
            </li>
            <li>
              <label htmlFor="englishTitle" className="mr-2 font-light italic text-gray-600">
                Angol cím:
              </label>
              <span id="englishTitle" className="mt-2 font-light">
                {documentInfo?.englishTitle}
              </span>
            </li>
          </ul>
        </div>
        <div className="group">
          <div className="flex items-center gap-2 pt-4 pb-2">
            <h2 className="text-lg font-semibold group-hover:underline">Társszerzők adatai</h2>
            <button
              onClick={() => {
                setCurrentStep("coAuthorInfo");
              }}
              className="group hidden h-6 w-6 rounded-md border border-gray-300 px-1 hover:border-gray-900 group-hover:block"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-300 group-hover:stroke-gray-900"
              >
                <path
                  d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
          <ul>
            {coAuthorInfos.map((coAuthorInfo, index) => {
              return (
                <li key={index}>
                  <h3 className="pt-4 pb-2">{index + 1}. Társszerző:</h3>
                  <ul className="ml-6 list-disc">
                    <li>
                      <label htmlFor="applicantName" className="mr-2 font-light italic text-gray-600">
                        Társszerző neve:
                      </label>
                      <span id="applicantName" className="mt-2 font-light">
                        {coAuthorInfo.coAuthorName}
                      </span>
                    </li>
                    <li>
                      <label htmlFor="university" className="mr-2 font-light italic text-gray-600">
                        Társszerző egyeteme:
                      </label>
                      <span id="university" className="mt-2 font-light">
                        {coAuthorInfo.university == "Egyéb" ? coAuthorInfo.otherUniversity : coAuthorInfo.university}
                      </span>
                    </li>
                    <li>
                      <label htmlFor="studyYear" className="mr-2 font-light italic text-gray-600">
                        Társszerző évfolyama:
                      </label>
                      <span id="studyYeae" className="mt-2 font-light">
                        {coAuthorInfo.studyYear}
                      </span>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="group">
          <div className="flex items-center gap-2 pt-4 pb-2">
            <h2 className="text-lg font-semibold group-hover:underline">Témavezetők adatai</h2>
            <button
              onClick={() => {
                setCurrentStep("coordinatorInfo");
              }}
              className="group hidden h-6 w-6 rounded-md border border-gray-300 px-1 hover:border-gray-900 group-hover:block"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-300 group-hover:stroke-gray-900"
              >
                <path
                  d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
          <ul>
            {coordinatorInfos.map((coordinatorInfo, index) => {
              return (
                <li key={index}>
                  <h3 className="pt-4 pb-2">{index + 1}. Témavezető:</h3>
                  <ul className="ml-6 list-disc">
                    <li>
                      <label htmlFor="applicantName" className="mr-2 font-light italic text-gray-600">
                        Témavezető neve:
                      </label>
                      <span id="applicantName" className="mt-2 font-light">
                        {coordinatorInfo.coordinatorName}
                      </span>
                    </li>
                    <li>
                      <label htmlFor="university" className="mr-2 font-light italic text-gray-600">
                        Témavezető intézménye:
                      </label>
                      <span id="university" className="mt-2 font-light">
                        {coordinatorInfo.institute}
                      </span>
                    </li>
                    <li>
                      <label htmlFor="title" className="mr-2 font-light italic text-gray-600">
                        Témavezető titulusa:
                      </label>
                      <span id="university" className="mt-2 font-light">
                        {coordinatorInfo.title == "Egyéb" ? coordinatorInfo.otherTitle : coordinatorInfo.title}
                      </span>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="group">
          <div className="flex items-center gap-2 pt-4 pb-2">
            <h2 className="text-lg font-semibold group-hover:underline">Saját hozzájárulási nyilatkozat</h2>
            <button
              onClick={() => {
                setCurrentStep("agreementDoc");
              }}
              className="group hidden h-6 w-6 rounded-md border border-gray-300 px-1 hover:border-gray-900 group-hover:block"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-300 group-hover:stroke-gray-900"
              >
                <path
                  d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
          <li>
            <span className="font-light italic">{agreementDoc?.name}</span>
          </li>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 cursor-pointer rounded-md border border-gray-300 bg-gray-50 accent-tdk-accent focus:ring-blue-300"
              {...register("acceptedTerms")}
            />
            {errors.acceptedTerms && (
              <p className="mx-3 mt-2 text-xs italic text-red-500"> {errors.acceptedTerms?.message}</p>
            )}
          </div>
          <label htmlFor="terms" className="ml-2 text-gray-600">
            A jelentkezéssel beleegyezel a szabályzatba.{" "}
            <NavLink to="/szabalyzat" target="_blank" className="text-sky-600 underline">
              Szabályzat elolvasása →
            </NavLink>
          </label>
        </div>

        <div className="flex flex-col items-end justify-evenly gap-x-4 py-2 md:flex-row">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-full rounded-full bg-tdk-primary"></div>
            </div>
            <p className="pt-3 text-sm font-light text-gray-400">6/6 - Adatok ellenőrzése</p>
          </div>
          {isValid ? (
            <button
              className="mt-6 w-full rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline md:w-fit xl:text-lg"
              type="submit"
            >
              Jelentkezés
            </button>
          ) : (
            <button
              className="mt-6 w-full rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase drop-shadow-md md:w-fit xl:text-lg"
              disabled
              title="A jelentkezéshez el kell fogadnod a szabályzatot!"
            >
              Jelentkezés
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ConfirmSignup;
