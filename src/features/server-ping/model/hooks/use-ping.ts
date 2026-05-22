import { usePingQuery } from "../api";

export const usePing = () => {
  const { data, isError, refetch } = usePingQuery();

  return {
    data,
    isError,
    refetch,
  };
};
