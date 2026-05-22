import {
	profileApi,
	profileAboutApi,
	profileMediaApi,
	profileQualityApi,
} from "@/entities/profile/api";
import { UserProfile } from "@/widgets/user-profile";
import { ApiModuleProvider } from "@/shared/lib/api/store/api-module-provider";
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

export const UserProfilePage: React.FC = () => {
	return (
		<ApiModuleProvider
			apis={profileApis}
			fallback={<Loader />}
		>
			<UserProfile />
		</ApiModuleProvider>
	);
};
