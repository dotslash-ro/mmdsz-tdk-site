import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { organizerGroups } from "../../constants";
import { ChoiceList, Fieldset, StepFooter, type StepProps } from "./form-ui";

const hasOrganizedFormSchema = z.object({
  hasOrganized: z.string(),
  organizerGroup: z
    .array(z.string().min(1, { message: "Add meg a szervezői csoport nevét!" }).default("-"))
    .default([]),
});

export type HasOrganizedFormSchema = z.infer<typeof hasOrganizedFormSchema>;

const groupNames = organizerGroups.map(({ name }) => name);

const HasOrganizedForm = ({ defaultValues, onNext, onBack }: StepProps<HasOrganizedFormSchema>) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<HasOrganizedFormSchema>({
    resolver: zodResolver(hasOrganizedFormSchema),
    mode: "onTouched",
    defaultValues,
  });

  const hasOrganized = watch("hasOrganized");
  const organizerGroup = watch("organizerGroup");
  const canProceed = hasOrganized === "Nem" || (hasOrganized === "Igen" && organizerGroup != null);

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <div className="space-y-10">
        <Fieldset legend="Szerveztél már TDK-t?">
          <ChoiceList
            idPrefix="has-organized"
            options={["Igen", "Nem"]}
            registration={register("hasOrganized")}
            columns={2}
          />
        </Fieldset>

        {hasOrganized === "Igen" && (
          <Fieldset
            legend="Milyen munkacsoportban tevékenykedtél?"
            hint="Több is megjelölhető."
            error={errors.organizerGroup?.message}
          >
            <ChoiceList
              type="checkbox"
              idPrefix="past-group"
              options={groupNames}
              registration={register("organizerGroup")}
              columns={2}
            />
          </Fieldset>
        )}
      </div>

      <StepFooter
        onBack={() => onBack(getValues())}
        canProceed={canProceed}
        disabledHint="Add meg a szervezői csoport nevét!"
      />
    </form>
  );
};

export default HasOrganizedForm;
