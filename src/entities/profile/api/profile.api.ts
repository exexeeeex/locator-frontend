import type { UserProfile } from "@/entities/user";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { logger } from "@/shared/lib/logger";

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
			async onQueryStarted(_, { queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					const existingProfileId = localStorage.getItem("_profile-id");
					if (!existingProfileId && data?.id) {
						localStorage.setItem("_profile-id", data.id);
					}
				} catch (error) {
					logger.error("Failed to save profile id to localStorage:", error);
				}
			},
		}),
	}),
});

export const { useGetUserProfileQuery, useGetMyProfileQuery } = profileApi;
