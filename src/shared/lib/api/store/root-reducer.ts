import authenticationReducer from "@/features/authentication/model/slices/authentication";
import { candidateSlice } from "@/entities/match";
import { authenticationApi } from "@/features/authentication";

export const createRootReducer = () => ({
	authentication: authenticationReducer,
	candidate: candidateSlice.reducer,
	[authenticationApi.reducerPath]: authenticationApi.reducer,
});
