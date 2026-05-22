import { Icon, InterestsList } from "@/shared/components";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { useQuestionnariesContext } from "../../../context";
import { getUserAge } from "@/entities/user";
import { QuestionnaireActions } from "../actions";
import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { DetailItem } from "@/widgets/profile";

type QuestionnaireInfoBlockProps = {
	isVisible: boolean;
};

export const QuestionnaireInfoBlock: React.FC<QuestionnaireInfoBlockProps> = ({
	isVisible,
}) => {
	const { candidate } = useQuestionnariesContext();

	const job = candidate.userAdditional?.job;
	const education = candidate.userAdditional?.education;
	const hasDetails = !!(job || education);

	return (
		<div className='absolute bottom-0 left-0 right-0 z-10 p-4 pb-12 flex flex-col justify-end pointer-events-none'>
			{isVisible ? (
				<motion.div
					key='expanded'
					initial={{ opacity: 1, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 30 }}
					transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
					className='pointer-events-auto'
				>
					<div
						className={cn(
							"rounded-[2rem] p-5",
							"bg-card/90 border border-white/20",
							"border border-white/15",
							"transition-all duration-300",
						)}
					>
						<div className='flex flex-col gap-3'>
							<div className='flex items-baseline gap-2'>
								<h2 className='font-bold text-2xl tracking-tight text-foreground'>
									{candidate.username}
								</h2>
								<span className='text-xl text-foreground/90 font-medium'>
									{getUserAge(candidate.birthday)}
								</span>
							</div>

							<div className='flex items-center gap-1 text-foreground/80 -ml-1 -mt-2'>
								<Icon
									icon='pin'
									className='shrink-0'
								/>
								<span className='text-base mt-1 text-foreground font-medium'>
									{candidate.city.name}
								</span>
							</div>

							{hasDetails && (
								<div className='flex flex-col gap-2 mt-1'>
									{job && (
										<DetailItem
											className='bg-secondary text-foreground'
											icon='work'
											title='Работа'
											value={job}
										/>
									)}
									{education && (
										<DetailItem
											className='bg-secondary text-foreground'
											icon='education'
											title='Образование'
											value={education}
										/>
									)}
								</div>
							)}

							{candidate.about && (
								<div className='mt-1 rounded-2xl bg-secondary px-3.5 py-3 '>
									<p className='text-md text-foreground/95 leading-relaxed line-clamp-3'>
										{candidate.about}
									</p>
								</div>
							)}

							{candidate.selectedInterests.length > 0 && (
								<div className='mt-1'>
									<InterestsList
										badgeClassName={cn(
											"bg-secondary hover:bg-gray-700 text-white",
											"text-xs px-3 py-1.5 transition-colors",
										)}
										interests={Array.from(
											new Map(
												candidate.selectedInterests.map((interest) => [
													interest.userInterest.id,
													interest.userInterest,
												]),
											).values(),
										)}
									/>
								</div>
							)}
						</div>

						<div className='mt-5'>
							<QuestionnaireActions />
						</div>
					</div>
				</motion.div>
			) : (
				<motion.div
					key='collapsed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 0.99, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
					className='pointer-events-auto flex flex-col items-center gap-4'
				>
					<GlassCard
						className={cn(
							"w-full rounded-[1.5rem] px-5 py-4",
							"border border-white/15",
						)}
					>
						<div className='flex items-baseline gap-2'>
							<h2 className='font-bold text-2xl tracking-tight text-foreground'>
								{candidate.username}
							</h2>
							<span className='text-lg text-foreground/90 font-medium'>
								{getUserAge(candidate.birthday)}
							</span>
						</div>
						<div className='flex items-center gap-1 text-foreground/80 -ml-1 mt-1'>
							<Icon
								icon='pin'
								className='shrink-0'
							/>
							<span className='text-sm font-medium'>{candidate.city.name}</span>
						</div>
					</GlassCard>

					<QuestionnaireActions />
				</motion.div>
			)}
		</div>
	);
};
