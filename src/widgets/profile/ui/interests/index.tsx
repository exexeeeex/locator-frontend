import { useUserInterests } from "@/entities/user";
import { useProfile } from "../context";
import { InterestsList } from "@/shared/components";

export const ProfileInterests: React.FC = () => {
	const { profile } = useProfile();
	const { interests, isLoading, isError } = useUserInterests(profile?.id);

	if (isError) return <span>Не удалось загрузить интересы</span>;
	if (isLoading) return <span>Loading...</span>;
	if (!interests || interests.length === 0) return <div>No interests</div>;

	return (
		<>
			<h2 className='font-semibold text-lg mb-2'>Интересы</h2>
			<InterestsList interests={interests ?? []} />
		</>
	);
};
