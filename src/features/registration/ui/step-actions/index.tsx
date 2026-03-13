import { Button } from "@/shared/components";
import { useFormContext } from "react-hook-form";
import type { RegistrationFormData, RegistrationStep } from "../../model";

type Props = {
	step: RegistrationStep;
	next: () => void;
	prev: () => void;
};

export const RegistrationStepActions: React.FC<Props> = ({
	step,
	next,
	prev,
}) => {
	const {
		formState: { isSubmitting },
	} = useFormContext<RegistrationFormData>();

	return (
		<div className='flex flex-col gap-3 pt-4'>
			{(step === "photo" || step === "priority") && (
				<Button
					type='button'
					variant='secondary'
					onClick={prev}
					className='
          			  h-12 w-full rounded-2xl
          			  border border-white/6
          			  bg-primary/50 hover:bg-white/6
          			  text-base font-medium
          			  backdrop-blur-md
          			  transition-all duration-300
          			  hover:border-white/10
          			  active:scale-[0.98]
          			'
				>
					← Назад
				</Button>
			)}

			{step === "priority" ? (
				<Button
					disabled={isSubmitting}
					type='submit'
					className='
          			  h-12 w-full rounded-2xl
          			  bg-linear-to-r from-primary to-accent
          			  text-base font-semibold text-white
          			  shadow-lg shadow-primary/20
          			  transition-all duration-300
          			  hover:shadow-primary/30
          			  hover:scale-[1.01]
          			  active:scale-[0.98]
          			  disabled:opacity-60
          			'
				>
					{isSubmitting ? "Создание..." : "Создать анкету"}
				</Button>
			) : (
				<Button
					type='button'
					onClick={next}
					className='
          			  h-12 w-full rounded-2xl
          			  bg-linear-to-r from-primary to-accent
          			  text-base font-semibold text-white
          			  shadow-lg shadow-primary/20
          			  transition-all duration-300
          			  hover:shadow-primary/30
          			  hover:scale-[1.01]
          			  active:scale-[0.98]
          			'
				>
					Продолжить →
				</Button>
			)}
		</div>
	);
};
