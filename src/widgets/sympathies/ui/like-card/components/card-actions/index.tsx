import { useLikeCardActions } from "@/widgets/sympathies/model";
import { useLikeCardContext } from "../../context";

export const SympathiesLikeCardActions: React.FC = () => {
	const { user, isLike, to } = useLikeCardContext();
	const { handleRenderButtons } = useLikeCardActions();

	return (
		<div className='flex items-center gap-2 mt-4'>
			{handleRenderButtons({
				isLike,
				user,
				myProfileId: to,
			})}
		</div>
	);
};
