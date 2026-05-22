import type { User } from "..";

export const userDataService = {
	getUserData: (): User | null => {
		const data = localStorage.getItem("_user-data");
		if (!data) return null;
		return JSON.parse(data) as User;
	},
	getUserId: () => {
		return userDataService.getUserData()?.id ?? null;
	},
	getUserTelegramId: () => {
		return userDataService.getUserData()?.telegramId ?? null;
	},
	getProfileId: () => {
		return localStorage.getItem("_profile-id");
	},
};
