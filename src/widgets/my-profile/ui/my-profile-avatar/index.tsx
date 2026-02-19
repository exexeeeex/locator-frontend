import { useMyProfile } from "@/features/profile";
import { useMyMedia } from "@/features/profile/model";
import { Icon } from "@/shared/components";
import { MyProfileAvatarModal } from "..";

export const MyProfileAvatar: React.FC = () => {
	const { userMedias } = useMyProfile();
	const { openModal, setOpenModal, deleteMedia } = useMyMedia();

	const avatar = () => (userMedias?.length ? `${userMedias[0].link}` : "");

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
					onClick={() => setOpenModal(!openModal)}
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
				userMedia={userMedias}
				open={openModal}
				onOpenChange={setOpenModal}
				isDeleting={false}
				deleteMedia={deleteMedia}
			/>
		</>
	);
};
