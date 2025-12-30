import { useGetUserProfileQuery } from "../api";

export const useUserProfile = (userId: string) => {
  const { data, isError, isLoading, refetch } = useGetUserProfileQuery(userId);

  return {
    profile: data,
    isError,
    isLoading,
    refetchProfile: refetch,
  };
};
