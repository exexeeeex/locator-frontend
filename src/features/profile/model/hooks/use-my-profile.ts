import { useGetMyProfileQuery } from "..";

export const useMyProfile = () => {
	return useGetMyProfileQuery(undefined, {
		selectFromResult: ({ data, error, isLoading }) => ({
			profile: data,
			error,
			isLoading,

			city: data?.city,
			gender: data?.gender?.name,
			userMedias: data?.userMedias,
			purpose: data?.purpose,
			userId: data?.userId,
		}),
	});
};
