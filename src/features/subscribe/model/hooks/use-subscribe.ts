import {
	useGetAllPlansQuery,
	useGetUserSubscribeQuery,
} from "@/entities/subscribe/api";

export const useSubscribe = (userId?: string) => {
	const { data, isLoading, error } = useGetAllPlansQuery();
	const {
		data: userSubscribe,
		isLoading: userSubscribeLoading,
		error: userSubscribeError,
	} = useGetUserSubscribeQuery(userId!, {
		skip: !userId,
	});

	return {
		data,
		isLoading,
		error,
		userSubscribe,
		userSubscribeLoading,
		userSubscribeError,
	};
};
