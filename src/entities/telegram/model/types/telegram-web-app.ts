import type { TelegramUser } from "./telegram-user";

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe?: {
    user?: TelegramUser;
  };
  ready: () => void;
}
