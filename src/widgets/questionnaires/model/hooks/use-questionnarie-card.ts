import { InteractionType } from "@/entities/interaction/model/types";
import { incremented } from "@/entities/match";
import { userDataService } from "@/entities/user";
import { useCreateInteraction } from "@/features/like";
import { useAppDispatch } from "@/shared/lib";
import type { RootState } from "@/shared/lib/api/store/store";
import { logger } from "@/shared/lib/logger";
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

const { getProfileId } = userDataService;

export const useQuestionnarieCard = () => {
	const { handleCreateInteraction } = useCreateInteraction();
	const dispatch = useAppDispatch();

	const [isVisibleInfoBlock, setIsVisibleInfoBlock] = useState(true);
	const positionIndex = useSelector(
		(state: RootState) => state.candidate.value,
	);

	const toggleInfoBlock = useCallback(() => {
		setIsVisibleInfoBlock((prev) => !prev);
	}, []);

	const goToNext = useCallback(() => {
		dispatch(incremented());
		setIsVisibleInfoBlock(true);
	}, [positionIndex]);

	const handleInteract = useCallback(
		async (targetUserId: string, type: InteractionType) => {
			try {
				const profileId = getProfileId();
				if (!profileId) return;
				await handleCreateInteraction(targetUserId, profileId, type);
				goToNext();
			} catch (error) {
				logger.error(`Error: `, error);
			}
		},
		[handleCreateInteraction, goToNext],
	);

	return {
		isVisibleInfoBlock,
		toggleInfoBlock,
		positionIndex,
		handleInteract,
		goToNext,
	};
};
