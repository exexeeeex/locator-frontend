import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { UserInterests } from "../..";
import type { Interest } from "@/entities/interest";

export const userInterestsApi = createApi({
	reducerPath: "userInterestsApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Interests"],
	endpoints: (builder) => ({
		getUserInterests: builder.query<Interest[], string>({
			query: (userId: string) =>
				`user-interest/get-by-user-profile-id/${userId}`,
			transformResponse: (response: UserInterests[]) => {
				return (response ?? []).map((u) => u.userInterest);
			},
			providesTags: ["Interests"],
		}),
	}),
});

export const { useGetUserInterestsQuery } = userInterestsApi;
