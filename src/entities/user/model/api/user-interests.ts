import type { UserInterests } from "../..";
import type { Interest } from "@/entities/interest";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const userInterestsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserInterests: builder.query<Interest[], string>({
			query: (userId: string) =>
				`user-interest/get-by-user-profile-id/${userId}`,
			transformResponse: (response: UserInterests[]) => {
				return (response ?? []).map((u) => u.userInterest);
			},
			providesTags: ["UserInterests"],
		}),
	}),
});

export const { useGetUserInterestsQuery } = userInterestsApi;
