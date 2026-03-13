import { RegistrationInterestsSelector } from "@/features/registration";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";

export const RegistrationStepInterests: React.FC = () => {
  return (
    <GlassCard>
      <SectionHeader
        icon="fire"
        label="Интересы"
        gradient="from-red-500 to-orange-400"
      />
      <RegistrationInterestsSelector />
    </GlassCard>
  );
};
