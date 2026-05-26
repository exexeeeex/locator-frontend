import type { UserPurpose } from "..";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const userPurposeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserPurposes: builder.query<UserPurpose[], void>({
			query: () => "user-purpose/get-all",
			providesTags: ["UserPurpose"],
		}),
	}),
});

export const { useGetUserPurposesQuery } = userPurposeApi;
