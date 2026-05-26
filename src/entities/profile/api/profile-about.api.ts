import type { UserProfile } from "@/entities/user";
import { baseApi } from "@/shared/lib/api/store/base-api";
import { profileApi } from "./profile.api";

export const profileAboutApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		updateAboutField: builder.mutation<
			UserProfile,
			{
				about: string;
				profileId: string;
			}
		>({
			query: ({ about, profileId }) => ({
				url: `user-profile/about`,

				method: "PATCH",

				body: {
					about,
				},

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

			invalidatesTags: [
				{
					type: "MyProfile",
					id: "SELF",
				},
			],
		}),
	}),
});

export const { useUpdateAboutFieldMutation } = profileAboutApi;
