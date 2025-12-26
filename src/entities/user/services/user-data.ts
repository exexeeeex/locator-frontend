import type { User } from "../models";

export const userDataService = {
  getUserData: (): User | null => {
    const data = localStorage.getItem("_user-data");
    if (!data) return null;
    return JSON.parse(data) as User;
  },
  getUserId: () => {
    return userDataService.getUserData()?.id ?? null;
  },
  getUserTelegramId: () => {
    return userDataService.getUserData()?.telegramId ?? null;
  },
};
