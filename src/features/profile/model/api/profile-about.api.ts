import type { UserProfile } from "@/entities/user";
import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { profileApi } from "./profile.api";

export const profileAboutApi = createApi({
	reducerPath: "profileAboutApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["About", "MyProfile"],
	endpoints: (builder) => ({
		updateAboutField: builder.mutation<
			UserProfile,
			{ about: string; profileId: string }
		>({
			query: ({ about, profileId }) => ({
				url: `user-profile/about`,
				method: "PATCH",
				body: { about },
				headers: {
					profileid: profileId,
				},
			}),
			async onQueryStarted({ about }, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					profileApi.util.updateQueryData(
						"getMyProfile",
						undefined,
						(draft) => {
							draft.about = about;
						},
					),
				);
				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
			invalidatesTags: ["MyProfile"],
		}),
	}),
});

export const { useUpdateAboutFieldMutation } = profileAboutApi;
