import { Button, Icon } from "@/shared/components";
import { useQuestionnariesContext } from "../../../context";
import { cn } from "@/shared/lib/utils";
import { InteractionType } from "@/entities/interaction/model/types";

export const QuestionnaireActions: React.FC = () => {
	const { candidate, handleInteract } = useQuestionnariesContext();

	return (
		<div className='flex w-full items-center justify-center gap-5'>
			<Button
				type='button'
				onClick={(e) => {
					e.preventDefault();
					handleInteract(candidate.userId, InteractionType.DISLIKE);
				}}
				className={cn(
					"group relative w-18 h-18 rounded-full",
					"bg-background/90 hover:bg-white/20 border border-white/20",
					"backdrop-blur-xl transition-all duration-300 active:scale-90",
				)}
			>
				<Icon
					size={50}
					icon='close'
					className='text-white/80 group-hover:text-white transition-colors'
				/>
			</Button>

			<Button
				variant={"outline"}
				type='button'
				onClick={(e) => {
					e.preventDefault();
					handleInteract(candidate.userId, InteractionType.SUPER_LIKE);
				}}
				className={cn(
					"group relative w-18 h-18 rounded-full",
					"border border-white/25",
					"bg-amber-200/50 backdrop-blur-2xl -mt-2",
				)}
			>
				<Icon
					icon='star'
					size={36}
					className='text-white drop-shadow-lg'
				/>
			</Button>

			<Button
				variant={"outline"}
				type='button'
				onClick={(e) => {
					e.preventDefault();
					handleInteract(candidate.userId, InteractionType.LIKE);
				}}
				className={cn(
					"group relative w-18 h-18 rounded-full",
					"border border-white/25",
					"bg-pink-400/50 backdrop-blur-2xl",
				)}
			>
				<Icon
					size={36}
					icon='heart'
					className='text-white drop-shadow-lg'
				/>
			</Button>
		</div>
	);
};
