import type { Subscribe } from "../types/subscribe";
import type { UserSubscribe } from "../types/user-subscribe";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const subscribeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllPlans: builder.query<Subscribe[], void>({
			query: () => ({
				url: `subscribe/get-all-plans`,
			}),
			providesTags: ["Subscribes"],
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
