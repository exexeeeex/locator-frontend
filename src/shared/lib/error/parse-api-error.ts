import type { ApiError } from "./types";

type AxiosLikeError = {
  response?: {
    data?: ApiError;
  };
};

export const parseApiError = (
  error: unknown,
  fallbackMessage = "Произошла ошибка"
): string => {
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    (error as AxiosLikeError).response?.data?.message
  )
    return (error as AxiosLikeError).response!.data!.message;

  return fallbackMessage;
};
