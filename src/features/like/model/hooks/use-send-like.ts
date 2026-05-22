import { useCreateMutation } from "@/entities/interaction/model/api";
import { InteractionType } from "@/entities/interaction/model/types";
import { matchApi } from "@/entities/match";
import { logger } from "@/shared/lib/logger";
import { notifyService } from "@/shared/services";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const { notifySuccess, notifyError } = notifyService;

export const useCreateInteraction = () => {
	const dispatch = useDispatch();

	const [createInteraction] = useCreateMutation();

	const handleCreateInteraction = useCallback(
		async (targetUserId: string, profileId: string, type: InteractionType) => {
			try {
				await createInteraction({ targetUserId, profileId, type }).unwrap();
				dispatch(matchApi.util.invalidateTags(["Matches"]));
				notifySuccess(
					type == InteractionType.LIKE || type == InteractionType.SUPER_LIKE
						? "Лайк отправлен!"
						: "Дизлайк поставлен!",
				);
			} catch (e) {
				notifyError(`Ошибка при отправке оценки`);
				logger.error("Failed to create interaction:", e);
			}
		},
		[createInteraction],
	);

	return {
		handleCreateInteraction,
	};
};
