import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getApiMiddlewares } from "./middleware";
import { asyncReducerManager } from "./async-reducer-manager";
import { allModules, coreModules } from "./modules-config";

export const store = configureStore({
	reducer: asyncReducerManager.getCombinedReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["files", "registrationThunk"],
				ignoredPaths: ["files", "registration"],
			},
		}).concat(getApiMiddlewares()),
});

coreModules.forEach((name) => {
	const mod = allModules[name];
	mod.apis.forEach((api: any) => {
		asyncReducerManager.add(api.reducerPath, api.reducer);
	});
});
store.replaceReducer(asyncReducerManager.getCombinedReducer());

declare global {
	interface Window {
		__REDUX_STORE__?: typeof store;
	}
}

(store as any).asyncReducerManager = asyncReducerManager;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

if (import.meta.env.DEV) {
	window.__REDUX_STORE__ = store;
}
