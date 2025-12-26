import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { _apiUrl } from "../config/_api-url";
import { tokenService } from "../lib/auth/token";
import type { AuthenticationResponse } from "@/entities/authentication/models";
import { userDataService } from "@/entities/user/services";

const { get } = tokenService;
const { getUserId } = userDataService;

export const baseQuery = fetchBaseQuery({
  baseUrl: _apiUrl,
  prepareHeaders: (headers) => {
    headers.set("user-id", getUserId() ?? "");
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
  if (
    result.error?.data &&
    typeof result.error.data === "object" &&
    "message" in result.error.data
  ) {
  }

  if (result.error && result.error.status === 401) {
    const refreshToken = get("refresh");

    if (!refreshToken) return result;

    const refreshResult = await baseQuery(
      {
        url: `authentication/refresh-tokens`,
        method: "POST",
        body: { refreshToken: refreshToken },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const newAccessToken = (refreshResult.data as AuthenticationResponse)
        .tokensPair.accessToken;

      localStorage.setItem(
        "_auth-data",
        JSON.stringify({
          accessToken: newAccessToken,
          refreshToken: refreshToken,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      window.location.reload();
    }
  }
  return result;
};

export default baseQueryWithReauth;
