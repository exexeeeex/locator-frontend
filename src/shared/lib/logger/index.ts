import { env } from "@/shared/config/_api-url";
import log from "loglevel";

if (env === "development") {
	log.setLevel("debug");
} else log.setLevel("error");

export const logger = log;
