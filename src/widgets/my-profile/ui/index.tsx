import { useMyProfile } from "@/features/profile";
import { MyProfileHeader } from ".";
import { ProfileBody } from "@/widgets/profile";
import { Error } from "@/shared/components";
import { ProfileProvider } from "@/widgets/profile/ui/context";
import { useErrorRedirect } from "@/shared/lib";
import { GlassCard } from "@/shared/components/ui/glass-card";

export const MyProfile: React.FC = () => {
	const { profile, error } = useMyProfile();

	useErrorRedirect(error, [{ status: 404, redirectTo: "/registration" }]);

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
				className='mb-20 p-0'
			>
				<MyProfileHeader />
				<ProfileBody />
			</GlassCard>
		</ProfileProvider>
	);
};
