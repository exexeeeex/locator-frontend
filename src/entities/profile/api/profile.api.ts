import type { UserProfile } from "@/entities/user";
import { baseApi } from "@/shared/lib/api/store/base-api";
import { logger } from "@/shared/lib/logger";

export const profileApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserProfile: builder.query<UserProfile, string>({
			query: (userId) => ({
				url: `user-profile/get-user-profile-by-id/${userId}`,
			}),
			providesTags: (_result, _error, userId) => [
				{
					type: "UserProfile",
					id: userId,
				},
			],
		}),
		getMyProfile: builder.query<UserProfile, void>({
			query: () => `user-profile/me`,
			keepUnusedDataFor: 300,
			providesTags: [
				{
					type: "MyProfile",
					id: "SELF",
				},
			],
			async onQueryStarted(_, { queryFulfilled }) {
				try {
					const { data: profile } = await queryFulfilled;
					const existingProfileId = localStorage.getItem("_profile-id");

					if (!existingProfileId && profile?.id) {
						localStorage.setItem("_profile-id", profile.id);
					}
				} catch (error) {
					logger.error("Failed to save profile id to localStorage:", error);
				}
			},
		}),
	}),
});

export const { useGetUserProfileQuery, useGetMyProfileQuery } = profileApi;
