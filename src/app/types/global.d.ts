import type { TelegramWebApp } from "@entities/telegram";

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}
