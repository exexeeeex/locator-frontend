import { useGetMyProfileQuery } from "..";

export const useMyProfile = () => {
  const query = useGetMyProfileQuery();

  return {
    profile: query.data,
    error: query.error,
    refetch: query.refetch,
    isLoading: query.isLoading,

    city: query.data?.city,
    gender: query.data?.gender.name,
    userMedias: query.data?.userMedias,
    purpose: query.data?.purpose,
  };
};
