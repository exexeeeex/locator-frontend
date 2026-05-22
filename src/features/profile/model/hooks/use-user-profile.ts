import { useGetUserProfileQuery } from "../../../../entities/profile/api";

export const useUserProfile = (userId: string) => {
	const { data, isError, isLoading, refetch, error } =
		useGetUserProfileQuery(userId);

	return {
		profile: data,
		isError,
		isLoading,
		error,
		refetchProfile: refetch,
	};
};
