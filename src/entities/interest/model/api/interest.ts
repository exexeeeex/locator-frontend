import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Interest } from "../types";

export const interestApi = createApi({
	reducerPath: "interestApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Interest", "InterestByName"],
	endpoints: (builder) => ({
		getAllInterests: builder.query<Interest[], void>({
			query: () => "user-interest/get-all",
			providesTags: ["Interest"],
		}),
		getInterestByName: builder.query<Interest[], string>({
			query: (name: string) => ({
				url: `user-interest/get-by-name`,
				params: { name },
			}),
			providesTags: ["InterestByName"],
		}),
	}),
});

export const { useGetAllInterestsQuery, useGetInterestByNameQuery } =
	interestApi;
