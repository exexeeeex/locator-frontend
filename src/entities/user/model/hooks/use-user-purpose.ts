import { useGetUserPurposesQuery } from "../../";

export const useUserPurpose = () => {
  const { data: purposes, isError, isLoading } = useGetUserPurposesQuery();

  return {
    purposes,
    isError,
    isLoading,
  };
};
