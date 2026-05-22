import type { Reducer } from "@reduxjs/toolkit";
import { ReducerInjector } from "./injector/reducer-injector";

type ApiLike = {
	reducerPath: string;
	reducer: Reducer;
};

interface ApiModuleProviderProps {
	apis: ApiLike[];
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

export const ApiModuleProvider = ({
	apis,
	children,
	fallback,
}: ApiModuleProviderProps) => {
	return (
		<ReducerInjector
			fallback={fallback}
			reducers={apis.map((api) => ({
				key: api.reducerPath,
				reducer: api.reducer,
			}))}
		>
			{children}
		</ReducerInjector>
	);
};
