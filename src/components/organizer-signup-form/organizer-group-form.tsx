import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { organizerGroups } from "../../constants";
import { ChoiceList, Field, Fieldset, StepFooter, textareaClass, type StepProps } from "./form-ui";

const organizerGroupFormSchema = z.object({
  firstChoice: z.string().min(1, { message: "Válaszd ki az elsődleges szervezői csoportodat!" }),
  secondChoice: z.string().min(1, { message: "Válaszd ki a másodlagos szervezői csoportodat!" }),
  reason: z.string().min(1, { message: "Add meg, hogy miért szeretnél a kiválasztott csoportban szervező lenni!" }),
});

export type OrganizerGroupFormSchema = z.infer<typeof organizerGroupFormSchema>;

const selectableGroups = organizerGroups.filter(({ canSelect }) => canSelect).map(({ name }) => name);

const OrganizerGroupSelectForm = ({ defaultValues, onNext, onBack }: StepProps<OrganizerGroupFormSchema>) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<OrganizerGroupFormSchema>({
    resolver: zodResolver(organizerGroupFormSchema),
    mode: "onTouched",
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="space-y-10">
        <Fieldset
          legend="Melyik munkacsoportban szeretnél szervező lenni? – 1. opció"
          error={errors.firstChoice?.message}
        >
          <ChoiceList
            idPrefix="first-choice"
            options={selectableGroups}
            registration={register("firstChoice")}
            columns={2}
          />
        </Fieldset>

        <Fieldset
          legend="Melyik munkacsoportban szeretnél szervező lenni? – 2. opció"
          error={errors.secondChoice?.message}
        >
          <ChoiceList
            idPrefix="second-choice"
            options={selectableGroups}
            registration={register("secondChoice")}
            columns={2}
          />
        </Fieldset>

        <Field
          label="Miért szeretnél az általad megjelölt munkacsoportokban tevékenykedni?"
          htmlFor="reason"
          error={errors.reason?.message}
        >
          <textarea id="reason" className={textareaClass} {...register("reason")} />
        </Field>
      </div>

      <StepFooter
        onBack={() => onBack(getValues())}
        canProceed={isValid}
        disabledHint="Ki kell választanod egy választ!"
      />
    </form>
  );
};

export default OrganizerGroupSelectForm;
