import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ChoiceList, Fieldset, StepFooter, type StepProps } from "./form-ui";

const options = ["Igen, első félévben", "Igen, második félévben", "Igen, egész évben", "Nem"] as const;

const traineeShipFormSchema = z.object({
  answer: z.enum(options),
});

export type TraineeShipFormSchema = z.infer<typeof traineeShipFormSchema>;

const TraineeshipInfoForm = ({ defaultValues, onNext, onBack }: StepProps<TraineeShipFormSchema>) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<TraineeShipFormSchema>({
    resolver: zodResolver(traineeShipFormSchema),
    mode: "onTouched",
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <Fieldset
        legend="Az elmúlt tanévben voltál fél éves vagy egész éves részképzésen?"
        hint="Erasmus, Hunyadi János, EMMI-ELTE"
        error={errors.answer?.message}
      >
        <ChoiceList idPrefix="traineeship" options={options} registration={register("answer")} />
      </Fieldset>

      <StepFooter
        onBack={() => onBack(getValues())}
        canProceed={isValid}
        disabledHint="Ki kell választanod egy választ!"
      />
    </form>
  );
};

export default TraineeshipInfoForm;
