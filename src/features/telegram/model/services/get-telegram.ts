import type { TelegramWebApp } from "@entities/telegram";

const isDev = import.meta.env.DEV;

export const getTelegram = () => {
  if (!isDev && window.Telegram?.WebApp) return window.Telegram.WebApp;

  return {
    ready: () => {},
    initData: import.meta.env.VITE_MOCK_INIT_DATA,
    initDataUnsafe: {
      user: {
        id: 123456789,
        username: "dev",
        first_name: "dev",
      },
    },
  } as TelegramWebApp;
};
