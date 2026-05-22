import { useCandidates } from "@/entities/match";
import { Questionnaire } from "./questionnaire";
import { Error } from "@/shared/components";
import { useQuestionnarieCard } from "../model";
import { QuestionnariesContext } from "./context";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "@/shared/components/ui/loader";
import { useMemo } from "react";

export const Questionnaires: React.FC = () => {
	const { data, isLoading } = useCandidates();
	const {
		positionIndex,
		isVisibleInfoBlock,
		toggleInfoBlock,
		handleInteract,
		goToNext,
	} = useQuestionnarieCard();

	const currentCandidate = data?.[positionIndex];

	const contextValue = useMemo(
		() => ({
			candidate: currentCandidate!,
			isVisibleInfoBlock,
			toggleInfoBlock,
			handleInteract,
			skip: goToNext,
		}),
		[
			currentCandidate,
			isVisibleInfoBlock,
			toggleInfoBlock,
			handleInteract,
			goToNext,
		],
	);

	if (isLoading) return <Loader />;

	if (!data || data.length === 0) {
		return <Error message='Не нашли анкет для вас' />;
	}

	if (!currentCandidate) {
		return <Error message='Анкеты закончились' />;
	}

	return (
		<QuestionnariesContext.Provider value={contextValue}>
			<section className='h-[95.5vh] select-none overflow-hidden'>
				<AnimatePresence mode='popLayout'>
					<motion.div
						key={currentCandidate.userId}
						initial={{ opacity: 0, y: 24, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -16, scale: 0.98 }}
						transition={{
							duration: 0.38,
							ease: [0.22, 1, 0.36, 1],
						}}
						className='h-full'
					>
						<Questionnaire />
					</motion.div>
				</AnimatePresence>
			</section>
		</QuestionnariesContext.Provider>
	);
};
