import {
	RegistrationStepActions,
	useRegistrationForm,
	useRegistrationStep,
} from "@features/registration";
import { RegistrationMain } from "./main-form";
import { RegistrationPhoto } from "./photo-upload";
import { RegistrationPrioritySelector } from "./priority-selector";
import { FormProvider } from "react-hook-form";

export const RegistrationForm = () => {
	const { form, handleRegistrationSubmit } = useRegistrationForm();
	const { step, nextStep, prevStep } = useRegistrationStep(form.trigger);

	return (
		<FormProvider {...form}>
			<form onSubmit={handleRegistrationSubmit}>
				{step === "main" && (
					<>
						<RegistrationMain />
						<RegistrationStepActions
							step={step}
							next={nextStep}
							prev={prevStep}
						/>
					</>
				)}
				{step === "photo" && (
					<>
						<RegistrationPhoto />
						<RegistrationStepActions
							step={step}
							next={nextStep}
							prev={prevStep}
						/>
					</>
				)}
				{step === "priority" && (
					<>
						<RegistrationPrioritySelector />
						<RegistrationStepActions
							step={step}
							next={nextStep}
							prev={prevStep}
						/>
					</>
				)}
			</form>
		</FormProvider>
	);
};
