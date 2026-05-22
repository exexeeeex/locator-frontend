import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const profileQualityApi = createApi({
	reducerPath: "profileQualityApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["ProfileQuality", "MyProfile"],
	endpoints: (builder) => ({
		getProfileQuality: builder.query<number, string>({
			query: (profileId: string) => ({
				url: `user-profile/get-profile-quality/${profileId}`,
			}),
			providesTags: (_result, _error, profileId) => [
				{ type: "ProfileQuality", id: profileId },
			],
		}),
	}),
});

export const { useGetProfileQualityQuery } = profileQualityApi;
