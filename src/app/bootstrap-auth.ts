import { authenticationApi } from "@/features/authentication";
import { store } from "@/shared/lib/api/store";

export const bootstrapAuth = (initData: string) => {
  const hasAuthData = Boolean(localStorage.getItem("_auth-data"));

  if (hasAuthData) return;

  store.dispatch(authenticationApi.endpoints.login.initiate(initData));
};
