import { useFormContext } from "react-hook-form";
import {
	type RegistrationFormData,
	useRegistrationInterests,
} from "../../model";
import { InterestsList } from "@shared/components";

export const RegistrationInterestsSelector = () => {
	const { setValue, watch } = useFormContext<RegistrationFormData>();

	const {
		interests,
		selectedInterests,
		handleToggleInterest,
		isError,
		isLoading,
	} = useRegistrationInterests(setValue, watch);

	return (
		<InterestsList
			interests={interests || []}
			selected={selectedInterests}
			onToggle={handleToggleInterest}
		/>
	);
};
