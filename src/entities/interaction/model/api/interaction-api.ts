import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { LikeResponse } from "../types/like-response";
import { InteractionType } from "../types";
import { userDataService } from "@/entities/user";

const { getProfileId } = userDataService;

export const interactionApi = createApi({
	reducerPath: "interactionApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Interactions"],
	keepUnusedDataFor: 300,
	endpoints: (builder) => ({
		getInteractionsToMe: builder.query<LikeResponse[], void>({
			query: () => ({
				url: `interaction/get-to-me`,
				headers: {
					profileid: getProfileId() ?? "",
				},
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: "Interactions" as const,
								id,
							})),
							{ type: "Interactions", id: "LIST" },
						]
					: [{ type: "Interactions", id: "LIST" }],
		}),
		create: builder.mutation<
			LikeResponse[],
			{ targetUserId: string; profileId: string; type: InteractionType }
		>({
			query: ({ targetUserId, profileId, type }) => ({
				url: `interaction/create`,
				method: "POST",
				body: {
					targetUserId,
					type,
				},
				headers: {
					profileid: profileId,
				},
			}),
			invalidatesTags: [{ type: "Interactions", id: "LIST" }],
		}),
	}),
});

export const { useCreateMutation, useGetInteractionsToMeQuery } =
	interactionApi;
