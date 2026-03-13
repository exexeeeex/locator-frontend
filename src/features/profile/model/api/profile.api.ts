import type { UserProfile } from "@/entities/user";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "@/shared/lib/api/base-query";

export const profileApi = createApi({
	reducerPath: "profileApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["MyProfile", "UserProfile"],
	keepUnusedDataFor: 300,
	endpoints: (builder) => ({
		getUserProfile: builder.query<UserProfile, string>({
			query: (userId: string) => ({
				url: `user-profile/get-user-profile-by-id/${userId}`,
			}),
			providesTags: ["UserProfile"],
		}),
		getMyProfile: builder.query<UserProfile, void>({
			query: () => "user-profile/me",
			providesTags: ["MyProfile"],
		}),
	}),
});

export const { useGetUserProfileQuery, useGetMyProfileQuery } = profileApi;
