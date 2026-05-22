import { useInteraction } from "@/entities/interaction";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { Loader } from "@/shared/components/ui/loader";
import { SympathiesLikeCard } from "../like-card";
import { Error } from "@/shared/components";
import { AnimatePresence, motion } from "framer-motion";
import { InteractionType } from "@/entities/interaction/model/types/interaction-type";

export const SympathiesLikes = () => {
	const { data, isLoading, error } = useInteraction();

	if (error) return <Error message='Не удалось загрузить лайки' />;
	if (isLoading)
		return (
			<div className='h-full flex items-center justify-center'>
				<Loader />
			</div>
		);

	return (
		<motion.div>
			<AnimatePresence mode='popLayout'>
				{data ? (
					data
						.slice()
						.sort((a, b) => {
							if (
								a.type === InteractionType.SUPER_LIKE &&
								b.type === InteractionType.LIKE
							)
								return -1;
							if (
								a.type === InteractionType.LIKE &&
								b.type === InteractionType.SUPER_LIKE
							)
								return 1;
							return 0;
						})
						.map((like) => (
							<SympathiesLikeCard
								isLike={true}
								key={like.id}
								profile={like.profile}
								user={like.user}
								to={like.to}
							/>
						))
				) : (
					<div className='h-full flex items-center justify-center'>
						<GlassCard
							glow
							className='mt-[35vh] flex items-center justify-center'
						>
							<h1 className=' text-muted-foreground font-semibold text-xl'>
								Вас пока никто не лайкнул!💔
							</h1>
						</GlassCard>
					</div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
