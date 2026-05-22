import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {
	profileAboutApi,
	useUpdateAboutFieldMutation,
} from "../../../../entities/profile/api";
import { notifyService } from "@/shared/services";

const { notifyLoading, notifyUpdate } = notifyService;

export const useProfileAbout = () => {
	const [open, setOpen] = useState<boolean>(false);
	const dispatch = useDispatch();

	const [updateAboutFieldMutation] = useUpdateAboutFieldMutation();

	const schema = yup.object().shape({
		about: yup
			.string()
			.min(10)
			.max(500, "Максимальная длина описания 500 символов")
			.required("Описание обязательно"),
	});

	const { register, watch } = useForm<{ about: string }>({
		resolver: yupResolver(schema),
		defaultValues: { about: "" },
	});

	const handleUpdateProfileAboutField = useCallback(
		async (about: string, profileId: string) => {
			const toastId = notifyLoading("Обновление..");
			try {
				await updateAboutFieldMutation({ about, profileId }).unwrap();
				dispatch(profileAboutApi.util.invalidateTags(["MyProfile", "About"]));
				notifyUpdate(toastId, "Информация обновлена", true);
				setOpen(false);
			} catch (e: unknown) {
				let errorMessage = "Неизвестная ошибка";

				if (e instanceof Error) {
					errorMessage = e.message;
				} else if (typeof e === "object" && e !== null && "message" in e) {
					errorMessage = String(e.message);
				} else if (typeof e === "string") {
					errorMessage = e;
				}

				notifyUpdate(toastId, `Ошибка обновления: ${errorMessage}`, false);
			}
		},
		[updateAboutFieldMutation],
	);

	return {
		open,
		setOpen,
		register,
		watch,
		handleUpdateProfileAboutField,
	};
};
