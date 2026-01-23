import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { UserPurpose } from "..";

export const userPurposeApi = createApi({
	reducerPath: "userPurposeApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Purpose", "Interests"],
	endpoints: (builder) => ({
		getUserPurposes: builder.query<UserPurpose[], void>({
			query: () => "user-purpose/get-all",
			providesTags: ["Purpose"],
		}),
	}),
});

export const { useGetUserPurposesQuery } = userPurposeApi;
