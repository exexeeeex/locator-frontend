import { Carousel } from "@/shared/components/ui/carousel";
import {
	QuestionnaireInfoBlock,
	QuestionnaireInstructions,
	QuestionnairePhotos,
} from "./components";
import { useQuestionnariesContext } from "../context";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { memo } from "react";

export const Questionnaire: React.FC = memo(() => {
	const { isVisibleInfoBlock, toggleInfoBlock } = useQuestionnariesContext();

	return (
		<section className='w-full h-full relative overflow-hidden flex items-center justify-center '>
			<QuestionnaireInstructions />
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				className={cn(
					"w-full h-full max-h-220 relative overflow-hidden",
					"rounded-[2.5rem]",
					"ring-1 ring-white/15 dark:ring-white/10",
					"shadow-[0_12px_48px_-8px_rgba(0,0,0,0.25)]",
				)}
			>
				<Carousel
					onClick={toggleInfoBlock}
					className='w-full h-full [&_.overflow-hidden]:h-full'
					opts={{ loop: true }}
				>
					<QuestionnairePhotos />
					<QuestionnaireInfoBlock isVisible={isVisibleInfoBlock} />
				</Carousel>
			</motion.div>
		</section>
	);
});
