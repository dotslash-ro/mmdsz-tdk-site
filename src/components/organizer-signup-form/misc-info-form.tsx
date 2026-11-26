import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ChoiceList, Fieldset, StepFooter, type StepProps } from "./form-ui";

const miscInfOFormSchema = z.object({
  willBePresenting: z.string(),
  drivesACar: z.string(),
  isPartOfDanceGroup: z.string(),
});

export type MiscInfoFormSchema = z.infer<typeof miscInfOFormSchema>;

const yesNo = ["Igen", "Nem"];

const MiscInfoForm = ({ defaultValues, onNext, onBack }: StepProps<MiscInfoFormSchema>) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, isSubmitting },
  } = useForm<MiscInfoFormSchema>({
    resolver: zodResolver(miscInfOFormSchema),
    mode: "onTouched",
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="space-y-10">
        <Fieldset legend="A 34. TDK-ra készülsz dolgozattal?">
          <ChoiceList idPrefix="presenting" options={yesNo} registration={register("willBePresenting")} columns={2} />
        </Fieldset>

        <Fieldset legend="Tagja vagy az MMDSZ haladó néptánccsoportnak?">
          <ChoiceList idPrefix="dance" options={yesNo} registration={register("isPartOfDanceGroup")} columns={2} />
        </Fieldset>

        <Fieldset
          legend="Van autód és tudnád használni a TDK ideje alatt?"
          hint="A szervezés ideje alatt elfogyasztott üzemanyag költségeit igyekszünk megtéríteni."
        >
          <ChoiceList idPrefix="drive" options={yesNo} registration={register("drivesACar")} columns={2} />
        </Fieldset>
      </div>

      <StepFooter onBack={() => onBack(getValues())} canProceed={isValid && !isSubmitting} nextLabel="Jelentkezés" />
    </form>
  );
};

export default MiscInfoForm;
