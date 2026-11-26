import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Field, Fieldset, StepFooter, inputClass, type StepProps } from "./form-ui";

const organizerUniversityList = [
  "MOGYTTE",
  "Sapientia, EMTE, Marosvásárhely",
  "Marosvásárhelyi Művészeti Egyetem",
  "BBTE-Pedagógia, Marosvásárhely",
];

const studyYears = ["1", "2", "3", "4", "5", "6", "Mesterképzés"];

const organizerInfoSchema = z.object({
  applicantName: z.string().min(1, { message: "Add meg a neved!" }),
  university: z.string().min(1, { message: "Válaszd ki az egyetemed!" }),
  email: z.string().email({ message: "Add meg az e-mail címed!" }),
  facebookLink: z.string().min(1, { message: "Add meg a Facebook linkedet!" }),
  department: z.string().min(1, { message: "Add meg a kart, amelyen tanulsz!" }),
  section: z.string().min(1, { message: "Add meg a szakod!" }),
  studentId: z.string().min(1, { message: "Add meg a beiskolázási azonosítód (Nr. matricol)!" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Add meg a telefonszámod!" })
    .max(13, { message: "Helytelen telefonszám!" }),
  studyYear: z.string({ invalid_type_error: "Válaszd ki az évfolyamod!" }),
  acceptedTerms: z.boolean().refine((v) => v, { message: "A jelentkezéshez el kell fogadnod a szabályzatot!" }),
});

export type OrganizerInfoSchema = z.infer<typeof organizerInfoSchema>;

const OrganizerInfoForm = ({ defaultValues, onNext, onBack }: StepProps<OrganizerInfoSchema>) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<OrganizerInfoSchema>({
    resolver: zodResolver(organizerInfoSchema),
    mode: "onTouched",
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="space-y-6">
        <Field
          label="Teljes név"
          hint="Ahogy a személyi igazolványban szerepel"
          htmlFor="name"
          error={errors.applicantName?.message}
        >
          <input type="text" id="name" autoComplete="name" className={inputClass} {...register("applicantName")} />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="E-mail cím" htmlFor="email" error={errors.email?.message}>
            <input type="email" id="email" autoComplete="email" className={inputClass} {...register("email")} />
          </Field>
          <Field label="Telefonszám" htmlFor="phone" error={errors.phoneNumber?.message}>
            <input type="tel" id="phone" autoComplete="tel" className={inputClass} {...register("phoneNumber")} />
          </Field>
        </div>

        <Field label="Facebook profil link" htmlFor="fb-link" error={errors.facebookLink?.message}>
          <input type="url" id="fb-link" className={inputClass} {...register("facebookLink")} />
        </Field>
      </div>

      <h3 className="mb-6 mt-12 border-b border-gray-200 pb-2 text-lg font-bold text-gray-900">Tanulmányok</h3>
      <div className="space-y-6">
        <Field label="Egyetem" htmlFor="university" error={errors.university?.message}>
          <select id="university" className={inputClass} {...register("university")}>
            {organizerUniversityList.map((university) => (
              <option key={university}>{university}</option>
            ))}
          </select>
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Kar" htmlFor="department" error={errors.department?.message}>
            <input type="text" id="department" className={inputClass} {...register("department")} />
          </Field>
          <Field label="Szak" htmlFor="section" error={errors.section?.message}>
            <input type="text" id="section" className={inputClass} {...register("section")} />
          </Field>
        </div>

        <Field label="Beiskolázási azonosító (Nr. matricol)" htmlFor="studentId" error={errors.studentId?.message}>
          <input type="text" id="studentId" className={inputClass} {...register("studentId")} />
        </Field>

        <Fieldset legend="Évfolyam" error={errors.studyYear?.message}>
          <div className="flex flex-wrap gap-2">
            {studyYears.map((year) => (
              <div key={year}>
                <input
                  type="radio"
                  value={year}
                  id={`studyYear-${year}`}
                  className="peer sr-only"
                  {...register("studyYear")}
                />
                <label
                  htmlFor={`studyYear-${year}`}
                  className="flex h-10 min-w-[2.5rem] cursor-pointer items-center justify-center rounded-md border border-gray-300 px-3 text-sm font-medium text-gray-900 transition hover:border-tdk-accent/60 peer-checked:border-tdk-accent peer-checked:bg-tdk-accent peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-tdk-accent/40"
                >
                  {year.length === 1 ? `${year}.` : year}
                </label>
              </div>
            ))}
          </div>
        </Fieldset>
      </div>

      <div className="mt-10 rounded-lg bg-gray-50 p-4">
        <label htmlFor="terms" className="flex cursor-pointer items-start gap-3 text-sm text-neutral-600">
          <input
            id="terms"
            type="checkbox"
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-tdk-accent"
            {...register("acceptedTerms")}
          />
          <span>
            Beleegyezem, hogy az MMDSZ az adataimat a rendezvény lejártától számítva egy évig tárolja és egy esetleges,
            a rendezvényhez kapcsolódó, dokumentáció-ellenőrzés során azt felmutassa az illetékes szerveknek.{" "}
            <a href="http://www.mmdsz.ro/gdpr" target="_blank" rel="noreferrer" className="text-tdk-accent underline">
              GDPR szabályzat elolvasása →
            </a>
          </span>
        </label>
      </div>

      <StepFooter
        onBack={() => onBack(getValues())}
        canProceed={isValid}
        disabledHint="A továbblépéshez ki kell töltened az adataid!"
      />
    </form>
  );
};

export default OrganizerInfoForm;
