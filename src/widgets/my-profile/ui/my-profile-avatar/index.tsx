import { useMyProfile } from "@/features/profile";
import { Icon } from "@/shared/components";
import { MyProfileAvatarModal } from "..";
import { useState } from "react";

export const MyProfileAvatar: React.FC = () => {
	const { userMedias, profile } = useMyProfile();

	const avatar = () =>
		userMedias?.length ? `${userMedias.find((um) => um.isPriority)?.link}` : "";
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<div
				className='
      			  w-35 h-35
      			  rounded-full
      			  bg-card
      			  p-1
      			  shadow-lg
				  relative
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
				<div
					onClick={() => setOpen(!open)}
					className='bg-muted/80 border-border/40 border 
					bottom-0 right-2 
					w-9 h-9 
					flex justify-center items-center 
					rounded-full absolute'
				>
					<Icon
						icon={"camera"}
						size={24}
						color={"var(--foreground)"}
						fill={"none"}
						stroke={"var(--foreground)"}
					/>
				</div>
			</div>

			<MyProfileAvatarModal
				open={open}
				onOpenChange={setOpen}
				profileId={profile ? profile.id : ""}
				userMedia={userMedias}
			/>
		</>
	);
};
