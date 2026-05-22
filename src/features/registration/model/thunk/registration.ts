import { createAsyncThunk } from "@reduxjs/toolkit";
import { registrationApi } from "..";
import type { RegistrationRequest } from "@/entities/user";
import { notifyService } from "@/shared/services";
import { parsedUserService } from "@/entities/user";
import { parseApiError } from "@/shared/lib/error";

const { notifyError, notifySuccess } = notifyService;
const { parseUserDataToRegistrationRequest } = parsedUserService;

export const registrationThunk = createAsyncThunk<void, RegistrationRequest>(
	"user/registration",
	async ({ data, files }, { dispatch, rejectWithValue }) => {
		try {
			if (!data) return;

			const formData = new FormData();

			const dataToSend = parseUserDataToRegistrationRequest(data);

			formData.append("data", JSON.stringify(dataToSend));

			files.forEach((file) => {
				formData.append("files", file);
			});

			await dispatch(
				registrationApi.endpoints.registration.initiate(formData),
			).unwrap();

			notifySuccess("Анкета создана!");
			window.location.href = "/profile";
		} catch (error: unknown) {
			notifyError(
				typeof error === "object" && error !== null && "message" in error
					? (error.message as string)
					: "Неизвестная ошибка",
			);
			return rejectWithValue(error);
		}
	},
);
