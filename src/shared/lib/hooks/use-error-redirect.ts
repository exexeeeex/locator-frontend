import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logger } from "../logger";

type RedirectRule = {
	status: number;
	redirectTo: string;
};

export const useErrorRedirect = (
	error?: FetchBaseQueryError | SerializedError,
	rules: RedirectRule[] = [],
) => {
	const navigate = useNavigate();

	useEffect(() => {
		logger.info("useErrorRedirect triggered with error:", error);

		if (!error || !("status" in error)) return;
		if (typeof error.status !== "number") return;

		const rule = rules.find((r) => r.status === error.status);
		if (rule) {
			navigate(rule.redirectTo);
		}
	}, [error, rules, navigate]);
};
