import { useState } from "react";
import type { RegistrationFormData, RegistrationStep } from "../types";
import { REGISTRATION_STEP_FIELDS } from "../config";
import type { UseFormTrigger } from "react-hook-form";

export const useRegistrationStep = (
	trigger: UseFormTrigger<RegistrationFormData>,
) => {
	const [step, setStep] = useState<RegistrationStep>("main");

	const nextStep = async () => {
		const fields = REGISTRATION_STEP_FIELDS[step];

		const isValid = fields.length ? await trigger([...fields]) : true;

		if (!isValid) return;

		setStep((prev) =>
			prev === "main" ? "photo" : prev === "photo" ? "priority" : prev,
		);
	};

	const prevStep = () => {
		setStep((prev) =>
			prev === "priority" ? "photo" : prev === "photo" ? "main" : prev,
		);
	};

	return { step, nextStep, prevStep };
};
