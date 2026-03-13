import { FieldGroup } from "@/shared/components/ui/field-group";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";
import "react-day-picker/style.css";
import type { RegistrationFormData } from "@/features/registration";
import { ru } from "react-day-picker/locale";
import { cn } from "@/shared/lib/utils";

export const RegistrationStepBirthday: React.FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<RegistrationFormData>();

	return (
		<GlassCard glow>
			<SectionHeader
				icon={"fire"}
				label='Дата рождения'
				gradient='from-accent to-primary'
			/>

			<FieldGroup
				label='Выбери дату'
				error={errors.birthday?.message}
			>
				<Controller
					name='birthday'
					control={control}
					render={({ field }) => (
						<div
							className={cn(
								"flex justify-center rounded-[1.5rem] p-4",
								"bg-muted/50 border border-border",
							)}
						>
							<DayPicker
								mode='single'
								locale={ru}
								selected={field.value ? new Date(field.value) : undefined}
								onSelect={(d) => field.onChange(d?.toISOString())}
								captionLayout='dropdown'
								fromYear={1980}
								toYear={new Date().getFullYear() - 16}
								className='!font-sans text-[15px]'
								classNames={{
									caption_label: "hidden",
									caption: "flex justify-center gap-2",
									dropdown: cn(
										"bg-card text-foreground rounded-xl px-2 py-1.5",
										"border border-border max-h-48 overflow-y-auto",
									),
									dropdown_month: "max-h-48 overflow-y-auto",
									dropdown_year: "max-h-48 overflow-y-auto",
									chevron: "fill-primary",
									day: "rounded-xl hover:bg-primary/10 transition-colors text-foreground",
									selected: cn(
										"!bg-gradient-to-br !from-primary !to-accent",
										"!text-primary-foreground rounded-xl ",
									),
									today: "border border-primary/40 text-primary rounded-xl",
								}}
							/>
						</div>
					)}
				/>
			</FieldGroup>
		</GlassCard>
	);
};
