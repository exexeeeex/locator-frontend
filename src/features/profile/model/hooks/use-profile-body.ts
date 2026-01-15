import { getUserAge, type UserProfile } from "@/entities/user";
import { pick } from "@/shared/services";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProfileBody = (
	profile: UserProfile,
	error: FetchBaseQueryError | SerializedError | undefined,
) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (error) {
			if ("statusCode" in error) {
				if (error.statusCode === 404) navigate("/registration");
			}
		}
	}, [error]);

	return {
		userAdditional: pick(profile.userAdditional, ["job", "education"]),
		city: profile.city,
		region: profile.city.region,
		age: getUserAge(profile.birthday ?? ""),
		purpose: profile.purpose.name,
	};
};
