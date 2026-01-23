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
		<div className='flex flex-col gap-2'>
			{(step === "photo" || step === "priority") && (
				<Button
					variant='secondary'
					onClick={prev}
					className='rounded-md w-full bg-muted text-xl font-semibold'
				>
					Назад
				</Button>
			)}

			{step === "priority" ? (
				<Button
					disabled={isSubmitting}
					type='submit'
					className='rounded-md w-full text-xl font-semibold'
				>
					{isSubmitting ? "Создание..." : "Создать анкету"}
				</Button>
			) : (
				<Button
					onClick={next}
					className='rounded-md w-full mb-15 text-xl font-semibold'
				>
					Продолжить
				</Button>
			)}
		</div>
	);
};
