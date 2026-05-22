import { useState } from "react";
import type { RegistrationStep } from "../constants/limits";
import { nextStep, prevStep } from "../lib/stepper";
import type { UseFormTrigger } from "react-hook-form";
import type { RegistrationFormData } from "../types";
import { REGISTRATION_STEP_FIELDS } from "../config";

export const useRegistrationStep = (
	trigger: UseFormTrigger<RegistrationFormData>,
) => {
	const [step, setStep] = useState<RegistrationStep>("main");

	const goNext = async () => {
		const fields = REGISTRATION_STEP_FIELDS[step];

		const valid = fields.length ? await trigger(fields as any) : true;
		if (!valid) return;

		setStep((s) => nextStep(s));
	};

	const goPrev = () => setStep((s) => prevStep(s));

	return { step, goNext, goPrev };
};
