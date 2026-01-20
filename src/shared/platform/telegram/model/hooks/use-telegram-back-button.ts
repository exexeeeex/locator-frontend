import { useLocation, useNavigate } from "react-router-dom";
import { getTelegram } from "../api";
import { useEffect } from "react";

export const useTelegramBackButton = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const tg = getTelegram();

	useEffect(() => {
		if (location.pathname === "/") {
			tg.BackButton.hide();
			return;
		}

		tg.BackButton.show();

		const handler = () => navigate(-1);

		tg.BackButton.onClick(handler);

		return () => {
			tg.BackButton.offClick(handler);
			tg.BackButton.hide();
		};
	}, [location.pathname]);
};
