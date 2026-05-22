import { useGetInteractionsToMeQuery } from "../api";

export const useInteraction = () => {
	const { data, isLoading, error, refetch } = useGetInteractionsToMeQuery();

	return {
		data,
		isLoading,
		error,
		refetch,
	};
};
