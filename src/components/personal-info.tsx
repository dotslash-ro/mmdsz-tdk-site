import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { universityList } from "../constants";
import { SignupStep } from "./signup-wrapper";
import { ClipLoader } from "react-spinners";

const personalInfoSchema = z.object({
  applicantName: z.string().min(1, { message: "Add meg a neved!" }),
  university: z.string().min(1, { message: "Válaszd ki az egyetemed!" }),
  otherUniversity: z
    .string()
    .min(1, { message: "Add meg az egyetemed nevét!" })
    .optional(),
  email: z.string().email({ message: "Add meg az e-mail címed!" }),
  studyYear: z.string().regex(/[123456]/),
});

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;

interface PersonalInfoFormProps {
  setPersonalInfo: (personalInfo: PersonalInfoSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
}

const PersonalInfo = ({
  setPersonalInfo,
  setCurrentStep,
}: PersonalInfoFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit: SubmitHandler<PersonalInfoSchema> = (data) => {
    setPersonalInfo(data);
    setCurrentStep("documentInfo");
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
            Teljes név
          </label>
          <input
            type="text"
            id="name"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register("applicantName")}
          />
          {errors.applicantName && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.applicantName?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-lg font-medium text-gray-900"
          >
            Email cím
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
            htmlFor="universities"
            className="mb-2 block text-lg font-medium text-gray-900"
          >
            Egyetem
          </label>
          <select
            id="universities"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary"
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
          {errors.university && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.university?.message}
            </p>
          )}
        </div>
        {watch("university") === "Egyéb" && (
          <div className="mb-6">
            <label
              htmlFor="other-university"
              className="mb-2 block text-lg font-medium text-gray-900"
            >
              Egyetem neve
            </label>
            <input
              type="text"
              id="other-university"
              className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register("otherUniversity")}
              aria-invalid={errors.otherUniversity ? "true" : "false"}
            />
            {errors.otherUniversity && (
              <p className="mt-2 text-xs italic text-red-500">
                {" "}
                {errors.otherUniversity?.message}
              </p>
            )}
          </div>
        )}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Évfolyam</h3>
          <fieldset className="flex flex-wrap justify-evenly gap-3">
            {[...Array(6).keys()]
              .map((i) => i + 1)
              .map((i) => (
                <div key={i}>
                  <input
                    type="radio"
                    value={i}
                    id={`studyYear-${i}`}
                    className="peer hidden"
                    {...register("studyYear")}
                    name="studyYear"
                  />
                  <label
                    htmlFor={`studyYear-${i}`}
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-300 peer-checked:bg-tdk-accent peer-checked:text-white md:px-5"
                  >
                    <p className="text-sm font-medium">{i}.</p>
                  </label>
                </div>
              ))}
          </fieldset>
          {errors.studyYear && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.studyYear?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-1/6 rounded-full bg-blue-400"></div>
            </div>
            <p className="py-3 text-sm font-light text-gray-500">
              1/6 - Személyes adatok
            </p>
          </div>
          {isValid ? (
            <button
              className="rounded-full bg-tdk-accent px-10 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
              type="submit"
            >
              Tovább
            </button>
          ) : (
            <button
              className="rounded-full bg-gray-300 px-10 font-semibold uppercase text-black drop-shadow-md xl:text-lg"
              disabled
              title="A továbblépéshez ki kell töltedened az adataid!"
            >
              Tovább
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
