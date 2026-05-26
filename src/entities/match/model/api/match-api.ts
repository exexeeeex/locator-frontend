import { type LikeResponse } from "@/entities/interaction/model/types/like-response";
import { type UserProfile } from "@/entities/user";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const matchApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMatches: builder.query<LikeResponse[], void>({
			query: () => ({
				url: `matches/get-to-me`,
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({ type: "Matches" as const, id })),
							{ type: "Matches", id: "LIST" },
						]
					: [{ type: "Matches", id: "LIST" }],
		}),
		getCandidates: builder.query<UserProfile[], void>({
			query: () => ({
				url: `matches/get-candidates`,
			}),
		}),
	}),
});
export const { useGetMatchesQuery, useGetCandidatesQuery } = matchApi;
