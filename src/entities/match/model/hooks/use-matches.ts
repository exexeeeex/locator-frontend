import { useGetMatchesQuery } from "../api";

export const useMatches = () => {
	const { data, isLoading, error, refetch } = useGetMatchesQuery();

	return {
		data,
		isLoading,
		error,
		refetch,
	};
};
