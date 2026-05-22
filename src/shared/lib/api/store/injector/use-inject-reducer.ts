import { useEffect } from "react";
import type { Reducer } from "@reduxjs/toolkit";
import { store } from "../store";
import { logger } from "@/shared/lib/logger";

export const useInjectReducer = (
	key: string,
	reducer: Reducer,
	options?: { replace?: boolean },
): void => {
	useEffect(() => {
		const manager = (store as any).asyncReducerManager;

		if (!manager) {
			logger.error("AsyncReducerManager не найден в store");
			return;
		}

		if (manager.has(key) && !options?.replace) {
			return;
		}

		manager.add(key, reducer, options?.replace);
		store.replaceReducer(manager.getCombinedReducer());
	}, [key, reducer, options?.replace]);
};
