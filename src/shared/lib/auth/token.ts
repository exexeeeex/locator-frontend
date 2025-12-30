import type { TokensResponse } from "@features/authentication/model/types";

const STORAGE_KEY = "_auth-data";

export const tokenService = {
  get(type: "access" | "refresh") {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    const parsedData = JSON.parse(data) as TokensResponse;
    return type === "access" ? parsedData.accessToken : parsedData.refreshToken;
  },
};
