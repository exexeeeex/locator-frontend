import type { Interest } from "../types";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const interestApi = baseApi.injectEndpoints({
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
