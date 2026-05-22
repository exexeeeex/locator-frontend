import { useWatch, type Control } from "react-hook-form";
import type { RegistrationFormData } from "../types";
import { GENDER } from "@/shared/constants/gender";

export const useRegistrationMain = (control: Control<RegistrationFormData>) => {
	const gender = useWatch({
		control,
		name: "gender",
		defaultValue: GENDER.FEMALE,
	});

	const isMale = gender === GENDER.MALE;
	const isFemale = gender === GENDER.FEMALE;
	const genderLabel = isMale ? "Мужчина" : "Женщина";

	return {
		gender,
		isMale,
		isFemale,
		genderLabel,
	};
};
