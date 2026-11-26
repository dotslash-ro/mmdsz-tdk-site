import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Field, StepFooter, textareaClass, type StepProps } from "./form-ui";

const questions = [
  "Milyen, az MMDSZ-től független szervezési tapasztalatokkal rendelkezel?",
  "Képzeld el, hogy a konferencia előtt 2 nappal egy kulcsfontosságú elem (például egy előadó, helyszín, nyomdai anyag vagy online felület) váratlanul kiesik vagy hibásan működik. Milyen lépésekben állnál neki a megoldásnak és mikor szólnál a főszervezőknek?",
  "Ha egy szuperképességet választhatnál a szervezéshez, mi lenne az és mire használnád?",
  "Mit mondanál egy elsőéves hallgatónak, miért fontos a részvétel az első szervezői nagygyűlésen?",
] as const;

// react-hook-form treats dots in field names as nested paths, so the question text
// (which may contain "." characters) can't be used directly as a field name.
const fieldName = (index: number) => `q${index}`;

const questionsAswersFormSchema = z.object(
  Object.fromEntries(
    questions.map((_, index) => [fieldName(index), z.string().min(1, { message: "Add meg a választ!" })])
  )
);

type QuestionsFormFields = z.infer<typeof questionsAswersFormSchema>;

/** Answers keyed by the full question text, as sent to the backend. */
export type QuestionsAnswersFormSchema = Record<string, string>;

const toFields = (answers?: Partial<QuestionsAnswersFormSchema>): QuestionsFormFields =>
  Object.fromEntries(questions.map((question, index) => [fieldName(index), answers?.[question] ?? ""]));

const toAnswers = (fields: QuestionsFormFields): QuestionsAnswersFormSchema =>
  Object.fromEntries(questions.map((question, index) => [question, fields[fieldName(index)] ?? ""]));

const QuestionsForm = ({ defaultValues, onNext, onBack }: StepProps<QuestionsAnswersFormSchema>) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<QuestionsFormFields>({
    resolver: zodResolver(questionsAswersFormSchema),
    mode: "onTouched",
    defaultValues: toFields(defaultValues),
  });

  return (
    <form onSubmit={handleSubmit((fields) => onNext(toAnswers(fields)))} noValidate>
      <div className="space-y-10">
        {questions.map((question, index) => (
          <Field
            key={fieldName(index)}
            label={
              <span className="flex gap-3">
                <span className="text-tdk-accent">{index + 1}.</span>
                <span>{question}</span>
              </span>
            }
            htmlFor={fieldName(index)}
            error={errors[fieldName(index)]?.message}
          >
            <textarea id={fieldName(index)} className={textareaClass} {...register(fieldName(index))} />
          </Field>
        ))}
      </div>

      <StepFooter
        onBack={() => onBack(toAnswers(getValues()))}
        canProceed={isValid}
        disabledHint="Válaszolj minden kérdésre!"
      />
    </form>
  );
};

export default QuestionsForm;
