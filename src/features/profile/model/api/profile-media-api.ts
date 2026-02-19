import type { UserMedia } from "@/entities/user/model/types";
import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const profileMediaApi = createApi({
	reducerPath: "profileMediaApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Medias", "MyProfile"],
	endpoints: (builder) => ({
		getProfileMedias: builder.query<UserMedia[], string>({
			query: (profileId: string) => ({
				url: `user-media/get-all/${profileId}`,
			}),
			providesTags: ["Medias"],
		}),
		deleteMedia: builder.mutation<UserMedia[], string>({
			query: (id: string) => ({
				url: `user-media/delete/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Medias", "MyProfile"],
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
			invalidatesTags: ["Medias", "MyProfile" ],
		}),
	}),
});

export const {
	useGetProfileMediasQuery,
	useDeleteMediaMutation,
	useUploadMediaMutation,
} = profileMediaApi;
