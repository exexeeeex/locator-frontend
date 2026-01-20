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
	}, []);

	return (
		<TelegramContext.Provider value={telegram}>
			{children}
		</TelegramContext.Provider>
	);
};
