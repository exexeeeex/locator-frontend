import { userPurposeApi } from "@/entities/user/model/api/user-purpose";
import { registrationApi } from "@/features/registration";
import { authenticationApi } from "@features/authentication";
import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cityApi } from "@entities/city";
import { profileApi } from "@/features/profile";
import authenticationReducer from "@features/authentication/model/slices/authentication";
import { authenticationListener } from "./listeners";
import { interestApi } from "@/entities/interest";
import { userInterestsApi } from "@/entities/user/model/api";

export const store = configureStore({
	reducer: {
		authentication: authenticationReducer,
		[registrationApi.reducerPath]: registrationApi.reducer,
		[authenticationApi.reducerPath]: authenticationApi.reducer,
		[userPurposeApi.reducerPath]: userPurposeApi.reducer,
		[cityApi.reducerPath]: cityApi.reducer,
		[profileApi.reducerPath]: profileApi.reducer,
		[interestApi.reducerPath]: interestApi.reducer,
		[userInterestsApi.reducerPath]: interestApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(userPurposeApi.middleware as Middleware)
			.concat(authenticationApi.middleware as Middleware)
			.concat(cityApi.middleware as Middleware)
			.concat(registrationApi.middleware as Middleware)
			.concat(profileApi.middleware as Middleware)
			.concat(authenticationListener.middleware as Middleware)
			.concat(interestApi.middleware as Middleware)
			.concat(userInterestsApi.middleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
