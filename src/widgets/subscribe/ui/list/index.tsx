import { AnimatePresence, motion } from "framer-motion";

import { SubscribeCard } from "../card";

import { cn } from "@/shared/lib/utils";

import { useSubscribeList } from "../../";

export const SubscribeList = () => {
	const { selectedPlan, otherPlans, selectPlan } = useSubscribeList();

	if (!selectedPlan) return null;

	return (
		<div className='px-4 py-6 space-y-6 overflow-hidden'>
			<AnimatePresence mode='wait'>
				<motion.div
					key={selectedPlan.id}
					initial={{
						opacity: 0,
						y: 30,
						scale: 0.96,
						filter: "blur(10px)",
					}}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1,
						filter: "blur(0px)",
					}}
					exit={{
						opacity: 0,
						y: -20,
						scale: 0.96,
						filter: "blur(8px)",
					}}
					transition={{
						type: "spring",
						stiffness: 220,
						damping: 22,
					}}
					className='scale-[1.02]'
				>
					<SubscribeCard plan={selectedPlan} />
				</motion.div>
			</AnimatePresence>

			<motion.div
				layout
				className='space-y-3'
			>
				{otherPlans?.map((plan, index) => (
					<motion.div
						layout
						key={plan.id}
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							delay: index * 0.04,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						onClick={() => selectPlan(plan.id)}
						className={cn(
							"rounded-2xl border bg-card p-4 transition-colors",
							"hover:border-primary/40",
							plan.name === "Premium" ? "text-primary bg-accent/10" : "",
						)}
					>
						<div className={cn("flex items-center justify-between")}>
							<div className='min-w-0'>
								<div className='font-semibold'>{plan.name}</div>

								<div className='text-sm text-muted-foreground line-clamp-2'>
									{plan.description}
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};
