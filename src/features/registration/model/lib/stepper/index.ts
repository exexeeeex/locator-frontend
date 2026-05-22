import {
	REGISTRATION_STEPS,
	type RegistrationStep,
} from "../../constants/limits";

export function nextStep(step: RegistrationStep): RegistrationStep {
	const index = REGISTRATION_STEPS.indexOf(step);
	return REGISTRATION_STEPS[Math.min(index + 1, REGISTRATION_STEPS.length - 1)];
}

export function prevStep(step: RegistrationStep): RegistrationStep {
	const index = REGISTRATION_STEPS.indexOf(step);
	return REGISTRATION_STEPS[Math.max(index - 1, 0)];
}
