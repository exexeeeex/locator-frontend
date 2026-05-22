import type { TelegramWebApp } from "../";

const isDev = import.meta.env.DEV;

export const getTelegram = () => {
	if (!isDev && window.Telegram?.WebApp) {
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

	return {
		ready: () => {},
		expand: () => {},
		initData,
		initDataUnsafe,

		BackButton: {
			show: () => {},
			hide: () => {},
			onClick: (_cb: () => void) => {},
			offClick: (_cb: () => void) => {},
		},

		MainButton: {
			show: () => {},
			hide: () => {},
			enable: () => {},
			disable: () => {},
			onClick: (_cb: () => void) => {},
			offClick: (_cb: () => void) => {},
			setText: (_text: string) => {},
		},

		close: () => {},
		setHeaderColor: (_params: { color: string; textColor: string }) => {},
		setBackgroundColor: (_color: string) => {},
	} as TelegramWebApp;
};
