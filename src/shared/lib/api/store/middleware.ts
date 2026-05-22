import { authenticationListener } from "../listeners";
import type { Middleware } from "@reduxjs/toolkit";
import { allModules } from "./modules-config";

export const getApiMiddlewares = (): Middleware[] => {
	const middlewares: Middleware[] = [authenticationListener.middleware];
	const added = new Set<string>();

	for (const mod of Object.values(allModules)) {
		for (const api of mod.apis) {
			added.add(api.reducerPath);
			middlewares.push(api.middleware);
		}
	}

	return middlewares;
};
