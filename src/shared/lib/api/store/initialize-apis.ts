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

export {
	authenticationApi,
	registrationApi,
	profileApi,
	profileAboutApi,
	profileMediaApi,
	profileQualityApi,
	interactionApi,
	complaintApi,
	matchApi,
	subscribeApi,
	cityApi,
	interestApi,
	userPurposeApi,
	userInterestsApi,
	pingApi,
};
