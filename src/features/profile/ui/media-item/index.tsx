import type { UserMedia } from "@/entities/user/model/types";
import { createContext, use } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/shared/components";
import { cn } from "@/shared/lib/utils";

type MediaActionsContextType = {
	onDelete: (id: string) => void;
	changePriority: (mediaId: string, profileId: string) => void;
};

export const MediaActionsContext =
	createContext<MediaActionsContextType | null>(null);

export const MediaItem = ({ media }: { media: UserMedia }) => {
	const context = use(MediaActionsContext);

	if (!context) return null;

	return (
		<motion.div
			layout
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.5 }}
			className='aspect-square relative overflow-hidden rounded-xl group'
		>
			<div
				className='absolute w-10 flex items-center justify-center h-10 right-2 top-2 p-1
                rounded-2xl bg-red-500/50 z-10
                opacity-100 transition-opacity'
			>
				<button
					onClick={(e) => {
						e.stopPropagation();
						context.onDelete(media.id);
					}}
					type='button'
					aria-label='Удалить фото'
					className='cursor-pointer hover:scale-110 transition-transform'
				>
					<Icon
						icon='close'
						size={45}
					/>
				</button>
			</div>
			<div
				className={cn(
					"absolute w-10 flex items-center justify-center h-10 left-3 top-2 p-1",
					"rounded-2xl z-10",
					"opacity-100 transition-opacity",
					media.isPriority ? `bg-yellow-300/70` : `bg-secondary/80`,
				)}
			>
				<button
					onClick={(e) => {
						e.stopPropagation();
						context.changePriority(media.id, media.userProfileId);
					}}
					type='button'
					aria-label='Сделать главным'
					className='cursor-pointer hover:scale-110 transition-transform'
				>
					<Icon
						icon='star'
						size={24}
					/>
				</button>
			</div>
			<img
				className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
				src={media.link}
				alt='User Media'
				loading='lazy'
			/>
		</motion.div>
	);
};
