import { userPurposeApi } from "@entities/user/api/user-purpose";
import { authenticationApi } from "@features/authentication";
import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "@features/authentication/model/slices/authentication";
import { userRegistrationApi } from "@features/user/api/user-registration";
import { useDispatch } from "react-redux";
import { cityApi } from "@entities/city";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [userPurposeApi.reducerPath]: userPurposeApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
    [userRegistrationApi.reducerPath]: userRegistrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userPurposeApi.middleware)
      .concat(authenticationApi.middleware)
      .concat(cityApi.middleware)
      .concat(userRegistrationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
