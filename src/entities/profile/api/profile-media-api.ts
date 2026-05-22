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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Medias" as const, id })),
              { type: "Medias", id: "LIST" },
            ]
          : [{ type: "Medias", id: "LIST" }],
    }),
    deleteMedia: builder.mutation<UserMedia[], string>({
      query: (id: string) => ({
        url: `user-media/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Medias", id },
        { type: "Medias", id: "LIST" },
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
      invalidatesTags: [{ type: "Medias", id: "LIST" }, "MyProfile"],
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
