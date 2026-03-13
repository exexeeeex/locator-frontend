import type { RegistrationFormData } from "@/features/registration";
import { FieldGroup } from "@/shared/components/ui/field-group";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { CityChanger } from "@/widgets/city-changer";
import { Controller, useFormContext } from "react-hook-form";

export const RegistrationStepLocation: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormData>();
  return (
    <GlassCard>
      <SectionHeader
        icon={"pin"}
        label="Город"
        gradient="from-emerald-500 to-teal-400"
      />
      <FieldGroup label="Город" error={errors.cityId?.message}>
        <Controller
          name="cityId"
          control={control}
          render={({ field }) => (
            <CityChanger
              currentCity={field.value}
              onSelectCity={field.onChange}
            />
          )}
        />
      </FieldGroup>
    </GlassCard>
  );
};
