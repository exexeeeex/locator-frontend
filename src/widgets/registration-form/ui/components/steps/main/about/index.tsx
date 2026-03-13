import type { RegistrationFormData } from "@/features/registration";
import { Textarea } from "@/shared/components";
import { FieldGroup } from "@/shared/components/ui/field-group";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { cn } from "@/shared/lib/utils";
import { useFormContext } from "react-hook-form";

export const RegistrationStepAbout: React.FC = () => {
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext<RegistrationFormData>();

	const about = watch("about") || "";
	const maxLength = 300;
	const progress = Math.min(about.length / maxLength, 1);

	const progressColor =
		progress < 0.5
			? "from-primary/50 to-primary/70"
			: progress < 0.85
				? "from-primary/60 via-secondary/50 to-accent/60"
				: "from-primary/70 via-secondary/60 to-destructive/80";

	return (
		<GlassCard>
			<SectionHeader
				icon='profile'
				label='О себе'
				gradient='from-primary to-accent'
			/>

			<FieldGroup
				label='Расскажи о себе'
				error={errors.about?.message}
			>
				<div className='group relative'>
					<Textarea
						{...register("about")}
						maxLength={maxLength}
						placeholder='Люблю путешествия, горы и хороший кофе ☕️'
						rows={4}
						className={cn(
							"w-full resize-none rounded-2xl p-4",
							"text-[15px] leading-relaxed",
							"outline-none transition-all duration-300",

							"bg-foreground/2 border border-foreground/6",
							"placeholder:text-muted-foreground/40",

							"hover:bg-foreground/4 hover:border-primary/50",

							"focus:bg-primary focus:border-primary",
							"focus:ring-[3px] focus:ring-primary",
						)}
					/>

					<div
						className={cn(
							"pointer-events-none absolute inset-0 rounded-2xl",
							"bg-linear-to-br from-primary/12 via-transparent to-accent/12",
							"opacity-0 transition-opacity duration-500",
							"group-focus-within:opacity-100",
						)}
					/>
				</div>

				<div
					className={cn(
						"h-1.5 w-full mt-1 overflow-hidden rounded-full",
						"bg-foreground/4",
					)}
				>
					<div
						className={cn(
							"h-full rounded-full bg-linear-to-r transition-all duration-500 ease-out",
							progressColor,
						)}
						style={{ width: `${progress * 100}%` }}
					/>
				</div>
			</FieldGroup>
		</GlassCard>
	);
};
