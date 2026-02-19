import type { UserMedia } from "@/entities/user/model/types";
import { useMyMedia } from "@/features/profile/model";
import { Icon, Modal } from "@/shared/components";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	userMedia?: UserMedia[];
	isDeleting: boolean;
	deleteMedia: (id: string) => void;
};

export const MyProfileAvatarModal: React.FC<Props> = ({
	open,
	onOpenChange,
	userMedia,
	deleteMedia,
}) => {
	const ref = useRef<HTMLInputElement>(null);

	const isLimitReached = userMedia && userMedia.length >= 6;
	const { handleFileChange } = useMyMedia();

	return (
		<div>
			<Modal
				disabled={isLimitReached}
				open={open}
				onOpenChange={onOpenChange}
				trigger={<div className='hidden' />}
				buttonProps={"Добавить фото"}
				action={() => ref.current?.click()}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4'
				>
					{userMedia?.map((media) => (
						<div
							key={media.id}
							className='aspect-square relative overflow-hidden rounded-xl'
						>
							<div className='absolute right-2 top-2 p-1 rounded-2xl bg-red-500/50'>
								<div
									onClick={(e) => {
										e.stopPropagation();
										deleteMedia(media.id);
									}}
									role='button'
									aria-label='Удалить фото'
									className='cursor-pointer'
								>
									<Icon
										icon={"close"}
										size={24}
										color={"white"}
										fill={"none"}
										stroke={"white"}
									/>
								</div>
							</div>
							<img
								className='w-full h-full object-cover active:scale-105 transition-transform duration-300'
								src={`${media.link}`}
								alt='User media'
							/>
						</div>
					))}
				</motion.div>
			</Modal>
			<input
				hidden
				ref={ref}
				type='file'
				multiple
				accept='image/*'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleFileChange(e, userMedia ? userMedia[0].userProfileId : "")
				}
			/>
		</div>
	);
};
