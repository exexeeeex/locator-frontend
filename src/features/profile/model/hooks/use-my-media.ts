import { useCallback, useTransition } from "react";
import {
	profileApi,
	useDeleteMediaMutation,
	useUploadMediaMutation,
} from "../api";
import { notifyService } from "@/shared/services";
import { useDispatch } from "react-redux";

const { notifyLoading, notifyUpdate } = notifyService;

type UseMyMediaReturn = {
	handleUpload: (
		e: React.ChangeEvent<HTMLInputElement>,
		profileId: string,
	) => Promise<void>;
	handleDelete: (id: string) => Promise<void>;
};

export const useMyMediaActions = (): UseMyMediaReturn => {
	const dispatch = useDispatch();

	const [deleteMediaMutation] = useDeleteMediaMutation();
	const [uploadMediaMutation] = useUploadMediaMutation();

	const handleDeleteMedia = useCallback(
		async (id: string) => {
			const toastId = notifyLoading("Удаление фотографии..");
			try {
				await deleteMediaMutation(id).unwrap();
				dispatch(profileApi.util.invalidateTags(["MyProfile"]));
				notifyUpdate(toastId, "Фотография удалена", true);
			} catch (e) {
				notifyUpdate(toastId, `Ошибка при удалении`, false);
				console.error(e);
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
				console.error(e);
			}
		},
		[uploadMediaMutation],
	);

	return {
		handleUpload: handleFileUpload,
		handleDelete: handleDeleteMedia,
	};
};
