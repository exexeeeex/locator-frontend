import type { UserMedia } from "@/entities/user/model/types";
import { useMyMediaActions } from "@/features/profile";
import {
	MediaActionsContext,
	MediaItem,
} from "@/features/profile/ui/media-item";
import { Modal } from "@/shared/components";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useOptimistic, useRef, useTransition } from "react";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	userMedia?: UserMedia[];
	profileId: string;
};

export const MyProfileAvatarModal: React.FC<Props> = ({
	open,
	onOpenChange,
	userMedia,
	profileId,
}) => {
	const ref = useRef<HTMLInputElement>(null);
	const { handleDelete, handleUpload } = useMyMediaActions();
	const [isPending, startTransition] = useTransition();

	const [optimisticMedia, removeOptimisticMedia] = useOptimistic(
		userMedia,
		(state, deleteId: string) => state?.filter((m) => m.id !== deleteId),
	);

	const isLimitReached = userMedia && userMedia.length >= 6;

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleUpload(e, profileId);
		e.target.value = "";
	};

	const onDeleteWrapper = (id: string) => {
		startTransition(async () => {
			removeOptimisticMedia(id);
			await handleDelete(id);
		});
	};

	const contextValue = useMemo(
		() => ({ onDelete: onDeleteWrapper }),
		[handleDelete],
	);

	return (
		<MediaActionsContext.Provider value={contextValue}>
			<div>
				<Modal
					disabled={isLimitReached || isPending}
					open={open}
					onOpenChange={onOpenChange}
					trigger={<div className='hidden' />}
					buttonProps={isLimitReached ? `Лимит фото (6)` : `Добавить фото`}
					action={() => ref.current?.click()}
				>
					<div className='mt-4 min-h-[200px]'>
						{optimisticMedia && optimisticMedia.length === 0 ? (
							<div className='flex items-center justify-center h-full text-gray-400'>
								Нет загруженных фотографий
							</div>
						) : (
							<motion.div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
								<AnimatePresence mode='popLayout'>
									{optimisticMedia &&
										optimisticMedia.map((media) => (
											<MediaItem
												key={media.id}
												media={media}
											/>
										))}
								</AnimatePresence>
							</motion.div>
						)}
					</div>
				</Modal>
				<input
					hidden
					ref={ref}
					type='file'
					multiple
					accept='image/*'
					onChange={onFileChange}
				/>
			</div>
		</MediaActionsContext.Provider>
	);
};
