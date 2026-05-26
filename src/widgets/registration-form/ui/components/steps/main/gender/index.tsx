import { type RegistrationFormData } from "@/features/registration";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { logger } from "@/shared/lib/logger";
import { cn } from "@/shared/lib/utils";
import { useFormContext, useWatch } from "react-hook-form";
import { GENDER } from "@/shared/constants/gender";

export const RegistrationStepGender: React.FC = () => {
	const formContext = useFormContext<RegistrationFormData>();

	if (!formContext) {
		logger.error("RegistrationStepGender: useFormContext returned null");
		return <div>Ошибка загрузки формы</div>;
	}

	const { control, setValue } = formContext;
	const gender = useWatch({
		control,
		name: "gender",
		defaultValue: GENDER.FEMALE,
	});

	const isMale = gender === GENDER.MALE;
	const isFemale = gender === GENDER.FEMALE;

	return (
		<GlassCard>
			<SectionHeader
				icon={"heart"}
				label='Выбери свой пол'
				gradient='from-primary/40 to-accent/50'
			/>
			<div className='grid grid-cols-2 gap-3'>
				<button
					type='button'
					onClick={() => setValue("gender", "male")}
					className={cn(
						"group relative h-14 rounded-2xl border text-[15px] font-medium",
						"transition-all duration-300 overflow-hidden",
						isMale
							? "border-blue-400/40 bg-blue-500/10 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
							: "border-white/6 bg-cyan-400/4 text-muted-foreground hover:bg-white/6",
					)}
				>
					<span className='relative z-10 flex items-center justify-center gap-2'>
						<span className='text-xl'>👨</span>
						Мужчина
					</span>
					{isMale && (
						<div className='absolute inset-0 bg-linear-to-r from-blue-500/10 to-cyan-500/5 animate-in fade-in duration-500' />
					)}
				</button>

				<button
					type='button'
					onClick={() => setValue("gender", "female")}
					className={cn(
						"group relative h-14 rounded-2xl border text-[15px] font-medium",
						"transition-all duration-300 overflow-hidden",
						isFemale
							? "border-pink-400/40 bg-pink-500/10 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
							: "border-white/6 bg-primary/4 text-muted-foreground hover:bg-white/6",
					)}
				>
					<span className='relative z-10 flex items-center justify-center gap-2'>
						<span className='text-xl'>👩</span>
						Женщина
					</span>
					{isFemale && (
						<div className='absolute inset-0 bg-linear-to-r from-pink-500/10 to-rose-500/5 animate-in fade-in duration-500' />
					)}
				</button>
			</div>
		</GlassCard>
	);
};
