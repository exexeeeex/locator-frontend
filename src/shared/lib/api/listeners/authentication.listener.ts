import { authenticationApi } from "@/features/authentication";
import { getTelegram } from "@/features/telegram/model";
import { createListenerMiddleware } from "@reduxjs/toolkit";

export const authenticationListener = createListenerMiddleware();

const tg = getTelegram();

authenticationListener.startListening({
	matcher: authenticationApi.endpoints.me.matchRejected,
	effect: async (action, listenerApi) => {
		if (action.payload?.status !== 401) return;

		const initData = tg.initData;

		if (!initData) return;

		await listenerApi.dispatch(authenticationApi.endpoints.login.initiate({ initData }));

		listenerApi.dispatch(authenticationApi.endpoints.me.initiate(undefined, { forceRefetch: true }));
	},
});
