import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Subscribe } from "../types/subscribe";
import type { UserSubscribe } from "../types/user-subscribe";

export const subscribeApi = createApi({
	reducerPath: "subscribeApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Subscribe"],
	endpoints: (builder) => ({
		getAllPlans: builder.query<Subscribe[], void>({
			query: () => ({
				url: `subscribe/get-all-plans`,
			}),
			providesTags: ["Subscribe"],
			keepUnusedDataFor: 3000,
		}),
		getPlanById: builder.query<Subscribe, string>({
			query: (id: string) => ({
				url: `subscribe/get-plan-by-id/${id}`,
			}),
		}),
		getUserSubscribe: builder.query<UserSubscribe, string>({
			query: (userId: string) => ({
				url: `user-subscribe/get-by-user-id/${userId}`,
			}),
		}),
	}),
});

export const {
	useGetAllPlansQuery,
	useGetPlanByIdQuery,
	useGetUserSubscribeQuery,
} = subscribeApi;
