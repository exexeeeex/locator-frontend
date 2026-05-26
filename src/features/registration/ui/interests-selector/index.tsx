import { useFormContext, useWatch } from "react-hook-form";
import { type RegistrationFormData } from "../../model";
import { InterestsList } from "@shared/components";
import { useGetAllInterestsQuery } from "@/entities/interest";

export const RegistrationInterestsSelector = () => {
	const { control, setValue } = useFormContext<RegistrationFormData>();
	const { data: interests } = useGetAllInterestsQuery();

	const selectedInterests = useWatch({
		control,
		name: "selectedInterestsIds",
		defaultValue: [],
	});

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

		setValue("selectedInterestsIds", updatedInterests, {
			shouldValidate: true,
			shouldDirty: true,
		});
	};

	return (
		<InterestsList
			interests={interests || []}
			selected={selectedInterests}
			onToggle={handleToggleInterest}
		/>
	);
};
