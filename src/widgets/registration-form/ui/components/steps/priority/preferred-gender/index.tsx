import {
	useRegistrationPriority,
	type RegistrationFormData,
} from "@/features/registration";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { cn } from "@/shared/lib/utils";
import { useFormContext } from "react-hook-form";

export const RegistrationStepPreferredGender: React.FC = () => {
	const { control, setValue } = useFormContext<RegistrationFormData>();
	const { preferredGender } = useRegistrationPriority(control);

	const options = [
		{
			value: "female" as const,
			label: "Девушку",
			emoji: "👩",
			activeColor:
				"border-pink-400/40 bg-pink-500/10 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.15)]",
		},
		{
			value: "male" as const,
			label: "Мужчину",
			emoji: "👨",
			activeColor:
				"border-blue-400/40 bg-blue-500/10 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]",
		},
	];

	return (
		<GlassCard>
			<SectionHeader
				icon={"settings"}
				label='Кого ищешь?'
				gradient='from-rose-500 to-pink-400'
			/>
			<div className='grid grid-cols-2 gap-3'>
				{options.map((option) => {
					const isActive = preferredGender === option.value;

					return (
						<button
							key={option.value}
							type='button'
							onClick={() => setValue("preferredGender", option.value)}
							className={cn(
								"relative flex items-center justify-center gap-2",
								"h-14 rounded-2xl border text-[15px] font-medium",
								"transition-all duration-300 overflow-hidden",
								isActive
									? option.activeColor
									: "border-white/6 bg-muted text-muted-foreground hover:bg-white/[0.06]",
							)}
						>
							<span className='text-xl'>{option.emoji}</span>
							{option.label}
						</button>
					);
				})}
			</div>
		</GlassCard>
	);
};
