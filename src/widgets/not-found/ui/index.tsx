import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@shared/components/ui/glass-card";

interface NotFoundProps {
	title?: string;
	message?: string;
}

export const NotFound = ({
	title = "Страница не найдена",
	message = "К сожалению, мы не смогли найти то, что вы ищете",
}: NotFoundProps) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-9999 flex items-center justify-center bg-background/95 backdrop-blur-sm'
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.8, y: 30 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.9, y: 20 }}
				transition={{ type: "spring", damping: 20, stiffness: 100 }}
			>
				<GlassCard
					variant='elevated'
					glow
					className='relative flex w-75 flex-col items-center overflow-hidden px-7 pb-8 pt-9 text-center'
				>
					<div className='relative mb-5 flex h-24 w-24 items-center justify-center'>
						<motion.div
							animate={{
								scale: [1, 1.1, 1],
								opacity: [0.3, 0.6, 0.3],
							}}
							transition={{ duration: 2.5, repeat: Infinity }}
							className='absolute -inset-2 rounded-full bg-accent/20 blur-xl'
						/>
						<motion.img
							animate={{
								y: [0, -4, 2, 0],
								rotate: [0, 8, -5, 0],
								x: [0, 3, -3, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/refs/heads/main/Objects/Magnifying%20Glass%20Tilted%20Left.webp'
							className='relative z-10 h-20 w-20 object-contain drop-shadow-2xl'
						/>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						className='mb-3'
					>
						<span className='text-5xl font-black tracking-tighter text-muted-foreground/20'>
							404
						</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className='mb-1 text-[22px] font-bold text-foreground'
					>
						{title}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='mb-6 text-sm text-muted-foreground'
					>
						{message}
					</motion.p>

					<div className='relative h-1 w-full overflow-hidden rounded-full bg-muted'>
						<motion.div
							animate={{ x: ["-50%", "150%", "-50%"] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className='absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-accent/60 to-transparent'
						/>
					</div>

					<motion.button
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleGoBack}
						className='mt-5 rounded-xl bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20'
					>
						Вернуться назад
					</motion.button>
				</GlassCard>
			</motion.div>
		</motion.div>
	);
};
