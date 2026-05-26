import { baseApi } from "@/shared/lib/api/store/base-api";

export const profileQualityApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProfileQuality: builder.query<number, string>({
			query: (profileId: string) => ({
				url: `user-profile/get-profile-quality/${profileId}`,
			}),
			providesTags: (_result, _error, profileId) => [
				{ type: "ProfileQuality", id: profileId },
			],
		}),
	}),
});
export const { useGetProfileQualityQuery } = profileQualityApi;
