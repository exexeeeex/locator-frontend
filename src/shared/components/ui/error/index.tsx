import { motion } from "framer-motion";
import { GlassCard } from "../glass-card";

interface ErrorProps {
	title?: string;
	message?: string;
	onRetry?: () => void;
}

export const Error = ({
	title = "Произошла ошибка",
	message = "Что-то пошло не так. Попробуйте ещё раз",
	onRetry,
}: ErrorProps) => {
	const pts = [
		{ x: "12%", y: "18%", d: 0, s: 4 },
		{ x: "82%", y: "12%", d: 0.6, s: 3 },
		{ x: "8%", y: "72%", d: 1.2, s: 5 },
		{ x: "88%", y: "68%", d: 0.4, s: 4 },
		{ x: "45%", y: "88%", d: 0.9, s: 3 },
		{ x: "72%", y: "82%", d: 0.2, s: 4 },
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0  flex items-center justify-center bg-background/95 backdrop-blur-sm'
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
					{pts.map((p, i) => (
						<motion.div
							key={i}
							className={`absolute rounded-full ${i % 2 ? "bg-destructive/60" : "bg-destructive"}`}
							style={{
								left: p.x,
								top: p.y,
								width: p.s,
								height: p.s,
							}}
							animate={{
								y: [0, -25, -45],
								scale: [0, 1, 0],
								opacity: [0, 0.6, 0],
							}}
							transition={{
								duration: 3.5,
								repeat: Infinity,
								delay: p.d,
								ease: "easeInOut",
							}}
						/>
					))}

					<div className='relative mb-5 flex h-24 w-24 items-center justify-center'>
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.4, 0.7, 0.4],
							}}
							transition={{ duration: 2.5, repeat: Infinity }}
							className='absolute -inset-2 rounded-full bg-destructive/20 blur-xl'
						/>
						<motion.img
							animate={{
								y: [0, -5, 3, 0],
								rotate: [0, -4, 3, 0],
							}}
							transition={{
								duration: 3.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/refs/heads/main/Symbols/Mending%20Heart.webp'
							className='relative z-10 h-20 w-20 object-contain drop-shadow-2xl'
						/>
					</div>

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
							animate={{ scaleX: [0, 1, 0] }}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className='absolute inset-y-0 left-0 w-full origin-center rounded-full bg-linear-to-r from-transparent via-destructive/60 to-transparent'
						/>
					</div>

					{onRetry && (
						<motion.button
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={onRetry}
							className='mt-5 rounded-xl bg-destructive/10 px-6 py-2.5 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/20'
						>
							Попробовать снова
						</motion.button>
					)}

					<div className='mt-4 flex gap-1.5'>
						{[0, 0.15, 0.3].map((delay, i) => (
							<motion.div
								key={i}
								animate={{
									scale: [1, 1.5, 1],
									opacity: [0.3, 0.8, 0.3],
								}}
								transition={{
									duration: 1.6,
									repeat: Infinity,
									delay,
								}}
								className='h-1.5 w-1.5 rounded-full bg-destructive'
							/>
						))}
					</div>
				</GlassCard>
			</motion.div>
		</motion.div>
	);
};
