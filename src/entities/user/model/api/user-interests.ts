import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { UserInterests } from "../..";

export const userInterestsApi = createApi({
	reducerPath: "userInterestsApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Interests"],
	endpoints: (builder) => ({
		getUserInterests: builder.query<UserInterests[], string>({
			query: (userId: string) =>
				`user-interest/get-by-user-profile-id/${userId}`,
			providesTags: ["Interests"],
		}),
	}),
});

export const { useGetUserInterestsQuery } = userInterestsApi;
