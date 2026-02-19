import type { RegistrationFormValues } from "..";
import { userDataService } from "./user-data";

const { getUserTelegramId } = userDataService;

export const parsedUserService = {
	parseUserDataToRegistrationRequest: (data: RegistrationFormValues) => {
		if (!data) {
			throw new Error("Invalid registration data");
		}

		return {
			user: {
				telegramId: getUserTelegramId(),
			},
			userProfile: {
				username: data.username,
				birthday: data.birthday,
				about: data.about,
				gender: data.gender,
				cityId: data.cityId,
				purposeId: data.purposeId,
			},
			userAdditional: {
				education: data.education,
				job: data.job,
			},
			userPreferences: {
				preferredGender: data.preferredGender,
				minAge: Number(data.minAge),
				maxAge: Number(data.maxAge),
			},
			userInterests: {
				selectedInterestsIds: data.selectedInterestsIds,
			}, 
		};
	},
};
