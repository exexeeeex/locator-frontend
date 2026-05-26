import { type RegistrationFormData } from "@/features/registration";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { useFormContext, useWatch } from "react-hook-form";
import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { useUserPurpose } from "@/entities/user";

const purposeEmojis: Record<string, string> = {
	Общение: "💬",
	Дружба: "🤝",
	Отношения: "💕",
	Свидания: "🌹",
};

export const RegistrationStepPurpose: React.FC = () => {
	const { control, setValue } = useFormContext<RegistrationFormData>();
	const { purposes, isError: purposesFetchError } = useUserPurpose();

	const purposeId = useWatch({
		control,
		name: "purposeId",
		defaultValue: purposes?.[1]?.id || "",
	});

	if (purposesFetchError) {
		return (
			<GlassCard>
				<div className='flex items-center justify-center py-8 text-muted-foreground/50'>
					Ошибка загрузки данных
				</div>
			</GlassCard>
		);
	}

	return (
		<GlassCard glow>
			<SectionHeader
				icon='fire'
				label='Цель знакомства'
				gradient='from-indigo-500 to-blue-400'
			/>
			<div className='grid grid-cols-2 gap-3'>
				{purposes?.map((purpose) => {
					const isActive = purposeId === purpose.id;
					const emoji = purposeEmojis[purpose.name] || "✨";

					return (
						<motion.button
							key={purpose.id}
							type='button'
							whileTap={{ scale: 0.97 }}
							onClick={() => setValue("purposeId", purpose.id)}
							className={cn(
								"relative flex flex-col items-center justify-center gap-1.5",
								"h-20 rounded-2xl border text-sm font-medium",
								"transition-all duration-300 overflow-hidden z-50",
								isActive
									? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_24px_rgba(var(--primary),0.12)]"
									: "border-white/6 bg-primary/3 text-muted-foreground hover:bg-white/[0.06] hover:border-white/[0.1]",
							)}
						>
							<span className='text-2xl'>{emoji}</span>
							<span className='relative z-10'>{purpose.name}</span>
							{isActive && (
								<div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-500/5 animate-in fade-in duration-300' />
							)}
						</motion.button>
					);
				})}
			</div>
		</GlassCard>
	);
};
