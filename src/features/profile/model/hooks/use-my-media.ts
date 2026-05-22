import { useCallback } from "react";
import {
	profileApi,
	useDeleteMediaMutation,
	useSetPriorityMutation,
	useUploadMediaMutation,
} from "../../../../entities/profile/api";
import { notifyService } from "@/shared/services";
import { useDispatch } from "react-redux";
import { logger } from "@/shared/lib/logger";

const { notifyLoading, notifyUpdate } = notifyService;

type UseMyMediaReturn = {
	handleUpload: (
		e: React.ChangeEvent<HTMLInputElement>,
		profileId: string,
	) => Promise<void>;
	handleDelete: (id: string) => Promise<void>;
	handleChangePriority: (id: string, profileId: string) => Promise<void>;
};

export const useMyMediaActions = (): UseMyMediaReturn => {
	const dispatch = useDispatch();

	const [deleteMediaMutation] = useDeleteMediaMutation();
	const [uploadMediaMutation] = useUploadMediaMutation();
	const [setPriorityMutation] = useSetPriorityMutation();

	const handleDeleteMedia = useCallback(
		async (id: string) => {
			const toastId = notifyLoading("Удаление фотографии..");
			try {
				await deleteMediaMutation(id).unwrap();
				dispatch(profileApi.util.invalidateTags(["MyProfile"]));
				notifyUpdate(toastId, "Фотография удалена", true);
			} catch (e) {
				notifyUpdate(toastId, `Ошибка при удалении`, false);
				logger.error("Failed to delete media:", e);
			}
		},
		[deleteMediaMutation],
	);

	const handleFileUpload = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>, profileId: string) => {
			const files = e.target.files;
			if (!files || !profileId) return;

			const fileList = Array.from(files).slice(0, 5);

			const formData = new FormData();
			fileList.forEach((file) => formData.append("files", file));

			const toastId = notifyLoading("Загрузка фотографий...");
			try {
				await uploadMediaMutation({ body: formData, profileId }).unwrap();
				dispatch(profileApi.util.invalidateTags(["MyProfile"]));
				notifyUpdate(toastId, "Фотографии загружены!", true);
			} catch (e) {
				notifyUpdate(toastId, "Ошибка загрузки", false);
				logger.error("Failed to upload media:", e);
			}
		},
		[uploadMediaMutation],
	);

	const handleSetPriority = useCallback(
		async (id: string, profileId: string) => {
			const toastId = notifyLoading("Обновление приоритета...");
			try {
				await setPriorityMutation({
					profileId: profileId,
					mediaId: id,
				}).unwrap();
				dispatch(profileApi.util.invalidateTags(["MyProfile"]));
				notifyUpdate(toastId, "Приоритет обновлён!", true);
			} catch (e) {
				notifyUpdate(toastId, "Ошибка обновления приоритета", false);
				logger.error("Failed to set media priority:", e);
			}
		},
		[setPriorityMutation],
	);

	return {
		handleUpload: handleFileUpload,
		handleDelete: handleDeleteMedia,
		handleChangePriority: handleSetPriority,
	};
};
