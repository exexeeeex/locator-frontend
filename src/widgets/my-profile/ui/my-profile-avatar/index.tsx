import { useMyProfile } from "@/features/profile";

export const MyProfileAvatar: React.FC = () => {
	const { userMedias } = useMyProfile();

	const avatar = () => (userMedias?.length ? `http://localhost:5000/${userMedias[0].link}` : "");

	return (
		<div
			className='
        w-[140px] h-[140px]
        rounded-full
        bg-card
        p-1
        shadow-lg
      '
		>
			<img
				src={avatar() || undefined}
				alt='user-avatar'
				className='
          w-full h-full
          rounded-full
          object-cover
          bg-muted
        '
			/>
		</div>
	);
};
