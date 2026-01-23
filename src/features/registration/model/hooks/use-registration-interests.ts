import { useGetAllInterestsQuery } from "@/entities/interest";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";
import type { RegistrationFormData } from "../types";

export const useRegistrationInterests = (
	setValue: UseFormSetValue<RegistrationFormData>,
	watch: UseFormWatch<RegistrationFormData>,
) => {
	const { data: interests, isError, isLoading } = useGetAllInterestsQuery();

	const selectedInterests = watch("selectedInterestsIds") || [];

	const handleToggleInterest = (id: string) => {
		if (!id) return;

		const isSelected = selectedInterests.includes(id);
		let updatedInterests: string[] = [];

		if (isSelected) {
			updatedInterests = selectedInterests.filter(
				(interestId) => interestId !== id,
			);
		} else {
			updatedInterests = [...selectedInterests, id];
		}

		if (setValue) {
			setValue("selectedInterestsIds", updatedInterests, {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	};

	return {
		interests,
		isError,
		isLoading,

		handleToggleInterest,
		selectedInterests,
	};
};
