import { Icon } from "@/shared/components";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

type RatingBadgeProps = {
	score: number;
	className?: string;
	showLabel?: boolean;
};

export const RatingBadge: React.FC<RatingBadgeProps> = ({
	score,
	className,
	showLabel = true,
}) => {
	const percentage = Math.round((score ?? 0) * 100);
	const [isExpanded, setIsExpanded] = useState(false);

	const getVariant = () => {
		if (percentage >= 80)
			return "from-chart-4/25 to-chart-4/5 text-chart-4 dark:from-chart-4/30 dark:to-chart-4/10";
		if (percentage >= 50)
			return "from-primary/25 to-primary/5 text-primary dark:from-primary/30 dark:to-primary/10";
		return "from-muted/40 to-muted/10 text-muted-foreground dark:from-muted/30 dark:to-muted/5";
	};

	return (
		<Badge
			onClick={() => setIsExpanded((prev) => !prev)}
			className={cn(
				"relative flex items-center gap-1.5 font-medium overflow-hidden cursor-pointer select-none",
				"transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",

				"bg-card/40 backdrop-blur-sm",
				"hover:bg-white/6 hover:border-white/10",
				"active:scale-95",

				"bg-linear-to-r",
				getVariant(),

				"group",
				className,
			)}
		>
			<div
				className={cn(
					"absolute inset-0 bg-linear-to-r from-primary/5 to-transparent",
					"transition-opacity duration-500",
					isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100",
				)}
			/>

			{isExpanded && (
				<motion.div
					className='absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent'
					initial={{ x: "-100%" }}
					animate={{ x: "200%" }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				/>
			)}

			<div className='relative z-10 flex items-center gap-1.5'>
				{!isExpanded ? (
					<motion.div
						key='default'
						className='flex items-center gap-1.5 whitespace-nowrap'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<Icon
							icon='star'
							size={20}
							className=' transition-opacity group-hover:opacity-100'
						/>
						{showLabel && <span>Рейтинг:</span>}
						<span className='tabular-nums'>{percentage}%</span>
					</motion.div>
				) : (
					<motion.div
						key='expanded'
						className='flex items-center gap-1.5 text-wrap whitespace-wrap py-0.5'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<motion.div
							initial={{ rotate: -180, scale: 0 }}
							animate={{ rotate: 0, scale: 1 }}
							transition={{
								duration: 0.4,
								ease: [0.34, 1.56, 0.64, 1],
							}}
						>
							<Icon
								icon='star'
								size={18}
								className='opacity-90'
							/>
						</motion.div>
						<motion.span
							className='text-[13px] font-medium'
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1, duration: 0.3 }}
						>
							Заполняйте профиль, чтобы повысить рейтинг!
						</motion.span>
					</motion.div>
				)}
			</div>
		</Badge>
	);
};
