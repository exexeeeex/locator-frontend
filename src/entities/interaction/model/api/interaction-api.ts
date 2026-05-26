import type { LikeResponse } from "../types/like-response";
import { InteractionType } from "../types";
import { userDataService } from "@/entities/user";
import { baseApi } from "@/shared/lib/api/store/base-api";

const { getProfileId } = userDataService;

export const interactionApi = baseApi.injectEndpoints({
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
