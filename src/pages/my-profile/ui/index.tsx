import {
	profileApi,
	profileAboutApi,
	profileMediaApi,
	profileQualityApi,
} from "@/entities/profile/api";
import { MyProfile } from "@widgets/my-profile";
import { ApiModuleProvider } from "@/shared/lib/api";
import { Loader } from "@/shared/components/ui/loader";
import { userInterestsApi } from "@/entities/user/model";
import { subscribeApi } from "@/entities/subscribe/api";

const profileApis = [
	profileApi,
	profileAboutApi,
	profileMediaApi,
	profileQualityApi,
	userInterestsApi,
	subscribeApi,
];

export const MyProfilePage = () => (
	<ApiModuleProvider
		apis={profileApis}
		fallback={<Loader />}
	>
		<MyProfile />
	</ApiModuleProvider>
);
