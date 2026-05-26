import type { UserMedia } from "@/entities/user";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const profileMediaApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProfileMedias: builder.query<UserMedia[], string>({
			query: (profileId: string) => ({
				url: `user-media/get-all/${profileId}`,
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: "ProfileMedias" as const,
								id,
							})),
							{ type: "ProfileMedias", id: "LIST" },
						]
					: [{ type: "ProfileMedias", id: "LIST" }],
		}),
		deleteMedia: builder.mutation<UserMedia[], string>({
			query: (id: string) => ({
				url: `user-media/delete/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (_result, _error, id) => [
				{ type: "ProfileMedias", id },
				{ type: "ProfileMedias", id: "LIST" },
				"MyProfile",
			],
		}),
		uploadMedia: builder.mutation<
			UserMedia[],
			{ body: FormData; profileId: string }
		>({
			query: ({ body, profileId }) => ({
				url: `user-media/upload`,
				method: "POST",
				body,
				headers: {
					profileid: profileId,
				},
			}),
			invalidatesTags: [{ type: "ProfileMedias", id: "LIST" }, "MyProfile"],
		}),
		setPriority: builder.mutation<
			UserMedia[],
			{ mediaId: string; profileId: string }
		>({
			query: ({ mediaId, profileId }) => ({
				url: `user-media/set-priority`,
				method: "PATCH",
				headers: {
					profileid: profileId,
					mediaId: mediaId,
				},
			}),
		}),
	}),
});

export const {
	useGetProfileMediasQuery,
	useDeleteMediaMutation,
	useUploadMediaMutation,
	useSetPriorityMutation,
} = profileMediaApi;
