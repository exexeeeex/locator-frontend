import { useState } from "react";
import {
	useDeleteMediaMutation,
	profileApi,
	useGetMyProfileQuery,
	useUploadMediaMutation,
} from "../api";
import { notifyService } from "@/shared/services";
import { useDispatch } from "react-redux";
import { fileHelper } from "@/shared/lib";

const { notifyError, notifyLoading, notifyUpdate } = notifyService;
const { filterNewFiles } = fileHelper;

export const useMyMedia = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [files, setFiles] = useState<File[] | null>(null);

	const dispatch = useDispatch();
	const [deleteMediaMutation] = useDeleteMediaMutation();
	const [uploadMediaMutation] = useUploadMediaMutation();

	const deleteMedia = async (id: string) => {
		try {
			const toastLoading = notifyLoading("Удаление фотографии..");
			await deleteMediaMutation(id).unwrap?.();
			dispatch(profileApi.util.invalidateTags(["MyProfile"]));
			notifyUpdate(toastLoading, "Фотография удалена", true);
		} catch (e) {
			notifyError(e as string);
		}
	};

	const handleFileChange = async (
		e: React.ChangeEvent<HTMLInputElement>,
		profileId: string,
	) => {
		if (!e.target.files) return;

		const newFiles = Array.from(e.target.files);
		const filteredNewFiles = filterNewFiles(newFiles, files || []);
		const updatedFiles = [...(files || []), ...filteredNewFiles].slice(0, 5);

		let data = new FormData();
		updatedFiles?.forEach((file) => {
			data.append("files", file);
		});

		const toastLoading = notifyLoading("Загрузка фотографий..");

		try {
			await uploadMediaMutation({ body: data, profileId }).unwrap?.();
			dispatch(profileApi.util.invalidateTags(["MyProfile"]));
			notifyUpdate(toastLoading, "Фотография загружена", true);
			setFiles(null);
		} catch (e) {
			notifyUpdate(toastLoading, e as string, false);
		}
	};

	const { isLoading } = useGetMyProfileQuery(undefined);

	return {
		openModal,
		setOpenModal,
		deleteMedia,
		isDeliting: isLoading,
		files,
		handleFileChange,
	};
};
