import { userPurposeApi } from "@/entities/user/model/api/user-purpose";
import { registrationApi } from "@/features/registration";
import { authenticationApi } from "@features/authentication";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cityApi } from "@entities/city";
import { profileApi } from "@/features/profile";
import authenticationReducer from "@features/authentication/model/slices/authentication";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [userPurposeApi.reducerPath]: userPurposeApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userPurposeApi.middleware)
      .concat(authenticationApi.middleware)
      .concat(cityApi.middleware)
      .concat(registrationApi.middleware)
      .concat(profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
