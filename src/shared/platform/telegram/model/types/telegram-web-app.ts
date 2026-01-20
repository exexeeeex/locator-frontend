import type { TelegramUser } from "./telegram-user";

export interface TelegramBackButton {
	show: () => void;
	hide: () => void;
	onClick(cb: () => void): void;
	offClick(cb: () => void): void;
}

export interface TelegramMainButton {
	show: () => void;
	hide: () => void;
	enable: () => void;
	disable: () => void;
	setText(text: string): void;
	onClick(cb: () => void): void;
	offClick(cb: () => void): void;
}

export interface TelegramWebApp {
	initData: string;
	initDataUnsafe?: {
		user?: TelegramUser;
	};
	ready: () => void;

	BackButton: TelegramBackButton;
	MainButton: TelegramMainButton;

	close: () => void;
	setHeaderColor: (params: { color: string; textColor: string }) => void;
	setBackgroundColor: (color: string) => void;
}
