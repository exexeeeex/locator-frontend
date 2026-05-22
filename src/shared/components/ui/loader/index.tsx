import { motion } from "framer-motion";
import { GlassCard } from "../glass-card";

export const Loader = () => {
	const pts = [
		{ x: "15%", y: "20%", d: 0, s: 4 },
		{ x: "80%", y: "15%", d: 0.5, s: 3 },
		{ x: "10%", y: "70%", d: 1, s: 5 },
		{ x: "85%", y: "65%", d: 1.5, s: 4 },
		{ x: "50%", y: "85%", d: 0.8, s: 3 },
		{ x: "70%", y: "80%", d: 0.3, s: 4 },
	];

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
					{pts.map((p, i) => (
						<motion.div
							key={i}
							className={`absolute rounded-full ${i % 2 ? "bg-accent" : "bg-primary"}`}
							style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
							animate={{
								y: [0, -30, -50],
								scale: [0, 1, 0],
								opacity: [0, 0.7, 0],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: p.d,
								ease: "easeInOut",
							}}
						/>
					))}

					<div className='relative mb-5 flex h-24 w-24 items-center justify-center'>
						<motion.div
							animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
							transition={{ duration: 2, repeat: Infinity }}
							className='absolute -inset-2 rounded-full bg-primary/20 blur-xl'
						/>
						<motion.img
							animate={{ y: [0, -6, 4, 0], rotate: [0, 3, -2, 0] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/refs/heads/main/Symbols/Heart%20On%20Fire.webp'
							className='relative z-10 h-20 w-20 object-contain drop-shadow-2xl'
						/>
					</div>

					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className='mb-1 text-[22px] font-bold text-foreground'
					>
						Загрузка...
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='mb-6 text-sm text-muted-foreground'
					>
						Подождите немного, подготавливаем данные
					</motion.p>

					<div className='relative h-1 w-full overflow-hidden rounded-full bg-muted'>
						<motion.div
							animate={{ x: ["-100%", "200%"] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className='absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent'
						/>
					</div>

					<div className='mt-4 flex gap-1.5'>
						{[0, 0.15, 0.3].map((delay, i) => (
							<motion.div
								key={i}
								animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
								transition={{ duration: 1.4, repeat: Infinity, delay }}
								className='h-1.5 w-1.5 rounded-full bg-primary'
							/>
						))}
					</div>
				</GlassCard>
			</motion.div>
		</motion.div>
	);
};
