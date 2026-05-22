import { type LikeResponse } from "@/entities/interaction/model/types/like-response";
import { type UserProfile } from "@/entities/user";
import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const matchApi = createApi({
	reducerPath: "matchApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Matches", "Candidates"],
	keepUnusedDataFor: 300,
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
