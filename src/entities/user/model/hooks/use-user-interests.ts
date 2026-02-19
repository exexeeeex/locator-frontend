import { useGetUserInterestsQuery } from "../..";
import { skipToken } from "@reduxjs/toolkit/query";

export const useUserInterests = (userId?: string) => {
	const result = useGetUserInterestsQuery(userId ? userId : skipToken);

	return {
		interests: result.data,
		isError: result.isError,
		isLoading: result.isLoading,
	};
};
