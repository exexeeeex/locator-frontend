import { type RegistrationFormData } from "@/features/registration";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/components";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useFormContext, useWatch } from "react-hook-form";

const slotStyle = {
	outline: "none",
	boxShadow: "none",
	WebkitTapHighlightColor: "transparent",
} as const;

const slotClassName = `
  focus-visible:ring-0
  text-2xl font-semibold
  w-14 h-14
  border-white/[0.06]
  bg-white/[0.04]
  rounded-xl
  transition-all duration-300
  focus-visible:bg-primary/10
  focus-visible:border-primary/30
` as const;

export const RegistrationStepAgeRange: React.FC = () => {
	const { control, setValue } = useFormContext<RegistrationFormData>();
	const minAge = useWatch({ control, name: "minAge", defaultValue: "16" });
	const maxAge = useWatch({ control, name: "maxAge", defaultValue: "60" });

	return (
		<GlassCard>
			<SectionHeader
				icon='ruler'
				label='Диапазон возраста'
				gradient='from-teal-500 to-emerald-400'
			/>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex flex-col items-center gap-2'>
					<span className='text-xs font-medium uppercase tracking-wider text-muted-foreground/50'>
						От
					</span>
					<InputOTP
						value={minAge}
						onChange={(e: string) => setValue("minAge", e)}
						pattern={REGEXP_ONLY_DIGITS}
						maxLength={2}
					>
						<InputOTPGroup className='gap-1.5'>
							<InputOTPSlot
								style={slotStyle}
								className={slotClassName}
								index={0}
							/>
							<InputOTPSlot
								style={slotStyle}
								className={slotClassName}
								index={1}
							/>
						</InputOTPGroup>
					</InputOTP>
				</div>

				<div className='flex flex-col items-center gap-1 mt-6'>
					<div className='h-0.5 w-12 rounded-full bg-linear-to-r from-teal-500/40 to-emerald-400/40' />
				</div>

				<div className='flex flex-col items-center gap-2'>
					<span className='text-xs font-medium uppercase tracking-wider text-muted-foreground/50'>
						До
					</span>
					<InputOTP
						value={maxAge}
						onChange={(e: string) => setValue("maxAge", e)}
						pattern={REGEXP_ONLY_DIGITS}
						maxLength={2}
					>
						<InputOTPGroup className='gap-1.5'>
							<InputOTPSlot
								style={slotStyle}
								className={slotClassName}
								index={0}
							/>
							<InputOTPSlot
								style={slotStyle}
								className={slotClassName}
								index={1}
							/>
						</InputOTPGroup>
					</InputOTP>
				</div>
			</div>
		</GlassCard>
	);
};
