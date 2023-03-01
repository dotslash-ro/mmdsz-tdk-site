import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import { ClipLoader } from "react-spinners";
import { PersonalInfoSchema } from "./personal-info";
import { DocumentInfoSchema } from "./document-info";
import { CoAuthorInfoSchema } from "./coauthor-info";
import { CoordinatorInfoSchema } from "./coordinator-info";

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
}

const ConfirmSignup = ({
  personalInfo,
  coordinatorInfos,
  coAuthorInfos,
  agreementDoc,
  documentInfo,
  onSignup,
}: ConfirmSignupProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ConfirmSingupSchema>({
    resolver: zodResolver(confirmSignupSchema),
  });

  const onSubmit: SubmitHandler<ConfirmSingupSchema> = ({ acceptedTerms }) => {
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
        <div>
          <h2 className="pt-4 pb-2 text-lg font-semibold">Személyes adatok</h2>
          <ul className="ml-6 list-disc">
            <li>
              <label
                htmlFor="applicantName"
                className="mr-2 font-light italic text-gray-600"
              >
                Jelentkező neve:
              </label>
              <span id="applicantName" className="mt-2 font-light">
                {personalInfo?.applicantName}
              </span>
            </li>
            <li>
              <label
                htmlFor="university"
                className="mr-2 font-light italic text-gray-600"
              >
                Jelentkező egyeteme:
              </label>
              <span id="university" className="mt-2 font-light">
                {personalInfo?.university == "Egyéb"
                  ? personalInfo?.otherUniversity
                  : personalInfo?.university}
              </span>
            </li>
            <li>
              <label
                htmlFor="studyYear"
                className="mr-2 font-light italic text-gray-600"
              >
                Jelentkező évfolyama:
              </label>
              <span id="studyYear" className="mt-2 font-light">
                {personalInfo?.studyYear}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="pt-8 pb-2 text-lg font-semibold">Kivonat tartalma</h2>
          <ul className="ml-6 list-disc">
            <li>
              <label
                htmlFor="hungarianTitle"
                className="mr-2 font-light italic text-gray-600"
              >
                Magyar cím:
              </label>
              <span id="hungarianTitle" className="mt-2 font-light">
                {documentInfo?.hungarianTitle}
              </span>
            </li>
            <li>
              <label
                htmlFor="romanianTitle"
                className="mr-2 font-light italic text-gray-600"
              >
                Román cím:
              </label>
              <span id="romanianTitle" className="mt-2 font-light">
                {documentInfo?.romanianTitle}
              </span>
            </li>
            <li>
              <label
                htmlFor="englishTitle"
                className="mr-2 font-light italic text-gray-600"
              >
                Angol cím:
              </label>
              <span id="englishTitle" className="mt-2 font-light">
                {documentInfo?.englishTitle}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="pt-8 text-lg font-semibold">Társszerzők adatai</h2>
          <ul>
            {coAuthorInfos.map((coAuthorInfo, index) => {
              return (
                <li key={index}>
                  <h3 className="pt-4 pb-2">{index + 1}. Társszerző:</h3>
                  <ul className="ml-6 list-disc">
                    <li>
                      <label
                        htmlFor="applicantName"
                        className="mr-2 font-light italic text-gray-600"
                      >
                        Társszerző neve:
                      </label>
                      <span id="applicantName" className="mt-2 font-light">
                        {coAuthorInfo.coAuthorName}
                      </span>
                    </li>
                    <li>
                      <label
                        htmlFor="university"
                        className="mr-2 font-light italic text-gray-600"
                      >
                        Társszerző egyeteme:
                      </label>
                      <span id="university" className="mt-2 font-light">
                        {coAuthorInfo.university == "Egyéb"
                          ? coAuthorInfo.otherUniversity
                          : coAuthorInfo.university}
                      </span>
                    </li>
                    <li>
                      <label
                        htmlFor="studyYear"
                        className="mr-2 font-light italic text-gray-600"
                      >
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
        <div>
          <h2 className="pt-8 text-lg font-semibold">Témavezetők adatai</h2>
          <ul>
            {coordinatorInfos.map((coordinatorInfo, index) => {
              return (
                <li key={index}>
                  <h3 className="pt-4 pb-2">{index + 1}. Témavezető:</h3>
                  <ul className="ml-6 list-disc">
                    <li>
                      <label
                        htmlFor="applicantName"
                        className="mr-2 font-light italic text-gray-600"
                      >
                        Témavezető neve:
                      </label>
                      <span id="applicantName" className="mt-2 font-light">
                        {coordinatorInfo.coordinatorName}
                      </span>
                    </li>
                    <li>
                      <label
                        htmlFor="university"
                        className="mr-2 font-light italic text-gray-600"
                      >
                        Témavezető intézménye:
                      </label>
                      <span id="university" className="mt-2 font-light">
                        {coordinatorInfo.institute}
                      </span>
                    </li>
                    <li>
                      <label
                        htmlFor="title"
                        className="mr-2 font-light italic text-gray-600"
                      >
                        Témavezető titulusa:
                      </label>
                      <span id="university" className="mt-2 font-light">
                        {coordinatorInfo.title == "Egyéb"
                          ? coordinatorInfo.otherTitle
                          : coordinatorInfo.title}
                      </span>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="pt-8 pb-4 text-lg font-semibold">
            Saját hozzájárulási nyilatkozat
          </h2>
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
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 "
              {...register("acceptedTerms")}
            />
            {errors.acceptedTerms && (
              <p className="mx-3 mt-2 text-xs italic text-red-500">
                {" "}
                {errors.acceptedTerms?.message}
              </p>
            )}
          </div>
          <label htmlFor="terms" className="ml-2 text-gray-600">
            A jelentkezéssel beleegyezel a szabályzatba.{" "}
            <NavLink
              to="/szabalyzat"
              target="_blank"
              className="text-sky-600 underline"
            >
              Szabályzat elolvasása →
            </NavLink>
          </label>
        </div>

        <div className="flex flex-col items-end justify-evenly gap-x-4 py-2 md:flex-row">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-full rounded-full bg-blue-500"></div>
            </div>
            <p className="pt-3 text-sm font-light text-gray-400">
              6/6 - Adatok ellenőrzése
            </p>
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
