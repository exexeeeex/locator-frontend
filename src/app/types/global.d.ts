import type { TelegramWebApp } from "@/entities/telegram/models";

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}
