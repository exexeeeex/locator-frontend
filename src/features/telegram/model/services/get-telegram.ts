import type { TelegramWebApp } from "@entities/telegram";

const isDev = import.meta.env.DEV;

export const getTelegram = () => {
  if (!isDev && window.Telegram?.WebApp) {
    sessionStorage.setItem(
      "_tg-init",
      JSON.stringify(window.Telegram.WebApp.initData)
    );
    sessionStorage.setItem(
      "_tg-init-user",
      JSON.stringify(window.Telegram.WebApp.initDataUnsafe?.user)
    );
    sessionStorage.setItem(
      "__telegram__initParams",
      JSON.stringify(window.Telegram)
    );
    return window.Telegram.WebApp;
  }

  const initDataUnsafe = {
    user: {
      id: 123456789,
      username: "dev",
      first_name: "dev",
    },
  };
  const initData = import.meta.env.VITE_MOCK_INIT_DATA;

  sessionStorage.setItem("_tg-init", initData);
  sessionStorage.setItem("_tg-init-user", JSON.stringify(initDataUnsafe.user));

  return {
    ready: () => {},
    initData,
    initDataUnsafe,
  } as TelegramWebApp;
};
