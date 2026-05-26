import {
	RegistrationStepActions,
	useRegistrationForm,
	useRegistrationStep,
} from "@/features/registration";
import { cn } from "@/shared/lib/utils";
import { FormProvider } from "react-hook-form";
import { RegistrationMain } from "./components";
import {
	RegistrationPriority,
	RegistrationStepPhoto,
} from "./components/steps";

const STEPS = [
	{ key: "main", label: "О себе", emoji: "👤" },
	{ key: "photo", label: "Фото", emoji: "📸" },
	{ key: "priority", label: "Поиск", emoji: "🎯" },
] as const;

export const RegistrationForm = () => {
	const { form, handleRegistrationSubmit } = useRegistrationForm();
	const { step, goNext, goPrev } = useRegistrationStep(form.trigger);
	const currentIndex = STEPS.findIndex((s) => s.key === step);

	return (
		<FormProvider {...form}>
			<form
				onSubmit={handleRegistrationSubmit}
				className='space-y-6 mb-20'
			>
				<div className='flex items-center justify-center gap-2 px-4'>
					{STEPS.map((s, i) => (
						<div
							key={s.key}
							className='flex items-center gap-2'
						>
							<div
								className={cn(
									"flex items-center gap-1.5 rounded-full px-3 py-1.5",
									"text-sm font-medium transition-all duration-300",
									i === currentIndex
										? "bg-primary/15 text-primary border border-primary/20"
										: i < currentIndex
											? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
											: "bg-primary/10 text-muted-foreground/40 border border-white/4",
								)}
							>
								<span>{i < currentIndex ? "✓" : s.emoji}</span>
								<span className='hidden sm:inline'>{s.label}</span>
							</div>
							{i < STEPS.length - 1 && (
								<div
									className={cn(
										"h-0.5 w-8 rounded-full transition-colors duration-300",
										i < currentIndex ? "bg-emerald-500/30" : "bg-primary/10",
									)}
								/>
							)}
						</div>
					))}
				</div>

				{step === "main" && <RegistrationMain />}
				{step === "photo" && <RegistrationStepPhoto />}
				{step === "priority" && <RegistrationPriority />}

				<RegistrationStepActions
					step={step}
					next={goNext}
					prev={goPrev}
				/>
			</form>
		</FormProvider>
	);
};
