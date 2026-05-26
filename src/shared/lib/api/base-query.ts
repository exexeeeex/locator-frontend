import {
	fetchBaseQuery,
	type BaseQueryFn,
	type FetchArgs,
	type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { _apiUrl } from "@shared/config";
import { getTelegram } from "@/shared/platform/telegram";

export const baseQuery = fetchBaseQuery({
	baseUrl: _apiUrl,
	credentials: "include",
	timeout: 15000,
});

const tg = getTelegram();

let refreshPromise: Promise<void> | null = null;

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 401) {
		if (!tg.initData) return result;

		if (refreshPromise) {
			await refreshPromise;
			return await baseQuery(args, api, extraOptions);
		}

		refreshPromise = (async () => {
			try {
				await baseQuery(
					{
						url: "authentication/telegram",
						method: "POST",
						body: { initData: tg.initData },
					},
					api,
					extraOptions,
				);
			} finally {
				refreshPromise = null;
			}
		})();

		await refreshPromise;

		result = await baseQuery(args, api, extraOptions);
	}

	return result;
};

export default baseQueryWithReauth;
