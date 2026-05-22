import { getUserAge, type UserProfile } from "@/entities/user";
import type { IconType } from "@/shared/types";

export const useProfileBody = (profile: UserProfile) => {
	const allDetails = {
		job: {
			value: profile.userAdditional?.job ?? "Не указано",
			label: "Профессия",
			icon: "work" as IconType,
		},
		education: {
			value: profile.userAdditional?.education ?? "Не указано",
			label: "Образование",
			icon: "education" as IconType,
		},
		purpose: {
			value: profile.purpose?.name ?? "Не указано",
			label: "Ищу",
			icon: "heart" as IconType,
		},
	};

	return {
		details: Object.entries(allDetails).map(([key, data]) => ({
			key,
			...data,
		})),
		city: profile.city,
		region: profile.city?.region,
		age: getUserAge(profile.birthday ?? ""),
	};
};
