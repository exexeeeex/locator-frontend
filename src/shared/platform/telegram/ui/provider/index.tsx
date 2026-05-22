import { createContext } from "react";
import { getTelegram } from "../../model/api";
import { useEffect } from "react";

const TelegramContext = createContext(getTelegram());

export const TelegramProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const telegram = getTelegram();

	useEffect(() => {
		telegram.ready();
		telegram.expand();
	}, []);

	return (
		<TelegramContext.Provider value={telegram}>
			<div
				style={{
					paddingTop: `calc(20px + var(--tg-safe-area-inset-top, 0px) + var(--tg-content-safe-area-inset-top, 0px))`,
					paddingRight: `calc(10px + var(--tg-safe-area-inset-right, 0px))`,
					paddingBottom: `calc(20px + var(--tg-safe-area-inset-bottom, 0px) + var(--tg-content-safe-area-inset-bottom, 0px))`,
					paddingLeft: `calc(10px + var(--tg-safe-area-inset-left, 0px))`,
					minHeight: "100vh",
					boxSizing: "border-box",
				}}
			>
				{children}
			</div>
		</TelegramContext.Provider>
	);
};
