import { useQuestionnarieInstructions } from "@/widgets/questionnaires/model";

export const QuestionnaireInstructions: React.FC = () => {
	const { handleRenderButtons } = useQuestionnarieInstructions();

	return <>{handleRenderButtons()}</>;
};
