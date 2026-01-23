import { useUserInterests } from "@/entities/user";
import { useProfile } from "../context";
import { InterestsList } from "@/shared/components";

export const ProfileInterests: React.FC = () => {
	const { profile } = useProfile();
	const { interests, isError } = useUserInterests(profile.id);

	if (isError) return <span>Не удалось загрузить интересы</span>;

	console.log(profile.id);

	return (
		<InterestsList
			interests={interests?.map((interest) => interest.interest) ?? []}
		/>
	);
};
