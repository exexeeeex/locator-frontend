import { combineReducers, type Reducer } from "@reduxjs/toolkit";
import { createRootReducer } from "./root-reducer";

export class AsyncReducerManager {
	private reducers: Record<string, Reducer> = {};
	private injectedKeys = new Set<string>();

	constructor() {
		this.reducers = createRootReducer();
		Object.keys(this.reducers).forEach((key) => {
			this.injectedKeys.add(key);
		});
	}

	add(key: string, reducer: Reducer, replace: boolean = false): void {
		if (this.has(key) && !replace) {
			return;
		}

		this.reducers[key] = reducer;
		this.injectedKeys.add(key);
	}

	remove(key: string): void {
		if (!this.has(key)) {
			return;
		}
		delete this.reducers[key];
		this.injectedKeys.delete(key);
	}

	has(key: string): boolean {
		return key in this.reducers;
	}

	getReducers(): Record<string, Reducer> {
		return { ...this.reducers };
	}

	getInjectedKeys(): string[] {
		return Array.from(this.injectedKeys);
	}

	getCombinedReducer(): Reducer {
		return combineReducers(this.reducers);
	}
}

export const asyncReducerManager = new AsyncReducerManager();
