import { useGetUserInterestsQuery } from "../..";

export const useUserInterests = (userId: string) => {
	return useGetUserInterestsQuery(userId, {
		selectFromResult: ({ data, isError, isLoading }) => ({
			interests: data,
			isError,
			isLoading,
		}),
	});
};
