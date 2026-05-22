import { useGetProfileQualityQuery } from "@/entities/profile/api";

export const useProfileQuality = (profileId: string) => {
	return useGetProfileQualityQuery(profileId, {
		selectFromResult: ({ data, error, isLoading }) => ({
			data,
			error,
			isLoading,
		}),
	});
};
