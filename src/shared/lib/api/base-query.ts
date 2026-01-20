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
});

const tg = getTelegram();

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 401) {
		if (!tg.initData) return result;

		await baseQuery(
			{
				url: "authentication/telegram",
				method: "POST",
				body: { initData: tg.initData },
			},
			api,
			extraOptions,
		);

		result = await baseQuery(args, api, extraOptions);
	}
	return result;
};

export default baseQueryWithReauth;
