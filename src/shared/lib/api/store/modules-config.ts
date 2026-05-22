import { authenticationApi } from "@/features/authentication";
import type { ModuleConfig } from "./types";

export const authenticationModule: ModuleConfig = {
	apis: [authenticationApi],
};

import { registrationApi } from "@/features/registration";

export const registrationModule: ModuleConfig = {
	key: "registration",
	apis: [registrationApi],
	injectOn: ["/registration"],
};

import {
	profileApi,
	profileAboutApi,
	profileMediaApi,
	profileQualityApi,
} from "@/entities/profile/api";

export const profileModule: ModuleConfig = {
	key: "profile",
	apis: [profileApi, profileAboutApi, profileMediaApi, profileQualityApi],
	injectOn: ["/profile", "/profile/:id"],
};

import { interactionApi } from "@/entities/interaction";
import { complaintApi } from "@/entities/complaint/model";

export const interactionModule: ModuleConfig = {
	key: "interaction",
	apis: [interactionApi, complaintApi],
	injectOn: ["/", "/questionnaires"],
};

import { matchApi } from "@/entities/match";

export const matchModule: ModuleConfig = {
	key: "match",
	apis: [matchApi],
	injectOn: ["/", "/questionnaires"],
};

import { subscribeApi } from "@/entities/subscribe/api";

export const subscribeModule: ModuleConfig = {
	key: "subscribe",
	apis: [subscribeApi],
	injectOn: ["/subscribe"],
};

import { cityApi } from "@/entities/city";
import { interestApi } from "@/entities/interest";
import { userPurposeApi } from "@/entities/user";
import { userInterestsApi } from "@/entities/user/model";

export const sharedDataModule: ModuleConfig = {
	key: "sharedData",
	apis: [cityApi, interestApi, userPurposeApi, userInterestsApi],

	injectImmediately: false,
};

import { pingApi } from "@/features/server-ping";

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
