import { useUserProfile } from "@/features/profile";
import { useParams } from "react-router-dom";
import { Error } from "@/shared/components";
import { ProfileProvider } from "@/widgets/profile/ui/context";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { ProfileBody } from "@/widgets/profile";
import { UserProfileMedia } from "./media";

export const UserProfile: React.FC = () => {
	const params = useParams();

	const { profile, error } = useUserProfile(params.id as string);

	if (!profile) return <Error message='Профиль не найден' />;
	if (!profile.city)
		return <Error message='Ошибка получения информации профиля' />;

	return (
		<ProfileProvider
			error={error}
			profile={profile}
		>
			<GlassCard
				glow
				className='mb-12 p-0'
			>
				<UserProfileMedia media={profile.userMedias} />
				<div className='mb-7'>
					<ProfileBody />
				</div>
			</GlassCard>
		</ProfileProvider>
	);
};
