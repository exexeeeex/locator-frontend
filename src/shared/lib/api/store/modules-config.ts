import type { ModuleConfig } from "./types";
import { authenticationApi } from "@/features/authentication";
import { registrationApi } from "@/features/registration";
import {
	profileApi,
	profileAboutApi,
	profileMediaApi,
	profileQualityApi,
} from "@/entities/profile/api";
import { interactionApi } from "@/entities/interaction";
import { complaintApi } from "@/entities/complaint/model";
import { matchApi } from "@/entities/match";
import { subscribeApi } from "@/entities/subscribe/api";
import { cityApi } from "@/entities/city";
import { interestApi } from "@/entities/interest";
import { userPurposeApi } from "@/entities/user";
import { userInterestsApi } from "@/entities/user/model";
import { pingApi } from "@/features/server-ping";

export const authenticationModule: ModuleConfig = {
	apis: [authenticationApi],
};

export const registrationModule: ModuleConfig = {
	key: "registration",
	apis: [registrationApi],
	injectOn: ["/registration"],
};

export const profileModule: ModuleConfig = {
	key: "profile",
	apis: [profileApi, profileAboutApi, profileMediaApi, profileQualityApi],
	injectOn: ["/profile", "/profile/:id"],
};

export const interactionModule: ModuleConfig = {
	key: "interaction",
	apis: [interactionApi, complaintApi],
	injectOn: ["/", "/questionnaires"],
};

export const matchModule: ModuleConfig = {
	key: "match",
	apis: [matchApi],
	injectOn: ["/", "/questionnaires"],
};

export const subscribeModule: ModuleConfig = {
	key: "subscribe",
	apis: [subscribeApi],
	injectOn: ["/subscribe"],
};

export const sharedDataModule: ModuleConfig = {
	key: "sharedData",
	apis: [cityApi, interestApi, userPurposeApi, userInterestsApi],
	injectImmediately: false,
};

export const serverModule: ModuleConfig = {
	key: "server",
	apis: [pingApi],
	injectImmediately: true,
};

export const allModules: Record<string, ModuleConfig> = {
	authentication: authenticationModule,
	registration: registrationModule,
	profile: profileModule,
	interaction: interactionModule,
	match: matchModule,
	subscribe: subscribeModule,
	sharedData: sharedDataModule,
	server: serverModule,
};

export const coreModules = Object.entries(allModules)
	.filter(([_, module]) => module.injectImmediately)
	.map(([name, _]) => name);

export const lazyModules = Object.entries(allModules)
	.filter(([_, module]) => !module.injectImmediately)
	.map(([name, _]) => name);
