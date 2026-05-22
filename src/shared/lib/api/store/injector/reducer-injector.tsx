import type { Reducer } from "@reduxjs/toolkit";
import { store } from "../store";
import { useLayoutEffect, useState } from "react";
import { logger } from "@/shared/lib/logger";

type ReducerEntry = {
	key: string;
	reducer: Reducer;
};

interface ReducerInjectorProps {
	reducers: ReducerEntry[];
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

export const ReducerInjector = ({
	reducers,
	children,
	fallback,
}: ReducerInjectorProps) => {
	const manager = (store as any).asyncReducerManager;

	const [ready, setReady] = useState(() => {
		if (!manager) return false;

		return reducers.every(({ key }) => manager.has(key));
	});

	const reducerKeys = reducers.map((item) => item.key).join("|");

	useLayoutEffect(() => {
		if (!manager) {
			logger.error("AsyncReducerManager не найден в store");
			return;
		}

		let changed = false;

		reducers.forEach(({ key, reducer }) => {
			if (!manager.has(key)) {
				manager.add(key, reducer);
				changed = true;
			}
		});

		if (changed) store.replaceReducer(manager.getCombinedReducer());

		setReady(true);
		logger.debug(
			`ReducerInjector: reducers [${reducerKeys.split("|").join(", ")}] injected and ready.`,
		);
	}, [reducerKeys]);

	if (!ready) return <>{fallback}</>;

	return <>{children}</>;
};
