import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { _apiUrl } from "@shared/config";
import { tokenService } from "..";
import type { TokensResponse } from "@features/authentication";

const { get } = tokenService;
export const baseQuery = fetchBaseQuery({
  baseUrl: _apiUrl,
  prepareHeaders: (headers) => {
    const authData = localStorage.getItem("user-data");
    let userId = "";

    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        userId = parsed.id || "";
      } catch (error) {
        console.error("Error parsing auth data:", error);
      }
    }

    headers.set("user-id", userId);
    const accessToken = get("access");
    if (!accessToken) return headers;
    headers.set("Authorization", `Bearer ${accessToken}`);
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // if (
  //   result.error?.data &&
  //   typeof result.error.data === "object" &&
  //   "message" in result.error.data
  // ) {
  // }

  if (result.error && result.error.status === 401) {
    const refreshToken = get("refresh");

    if (!refreshToken) return result;

    const refreshResult = await baseQuery(
      {
        url: `authentication/refresh-token`,
        method: "POST",
        body: { refreshToken: refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const newAccessToken = (refreshResult.data as TokensResponse).accessToken;

      localStorage.setItem(
        "_auth-data",
        JSON.stringify({
          accessToken: newAccessToken,
          refreshToken: refreshToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      window.location.reload();
    }
  }
  return result;
};

export default baseQueryWithReauth;
