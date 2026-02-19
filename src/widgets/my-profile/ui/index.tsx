import { useMyProfile } from "@/features/profile";
import { MyProfileHeader } from ".";
import { ProfileBody, ProfileInterests } from "@/widgets/profile";
import { Error } from "@/shared/components";
import { ProfileProvider } from "@/widgets/profile/ui/context";
import { useErrorRedirect } from "@/shared/lib";

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
			<section
				className='
      			  rounded-3xl
      			  bg-card/80 backdrop-blur-xl
      			  border border-border/40
      			  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]
      			'
			>
				<MyProfileHeader />
				<ProfileBody />
			</section>
		</ProfileProvider>
	);
};
