import { useGetCandidatesQuery } from "../api";

export const useCandidates = () => {
	const { data, isLoading, isError } = useGetCandidatesQuery();

	return {
		data,
		isLoading,
		isError,
	};
};
