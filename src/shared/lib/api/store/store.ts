import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { baseApi } from "./base-api";

import candidateReducer from "@/entities/match/model/slice/candidate-slice";

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		candidate: candidateReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["files", "registrationThunk"],
				ignoredPaths: ["files", "registration"],
			},
		}).concat(baseApi.middleware),
});

import "./initialize-apis";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
