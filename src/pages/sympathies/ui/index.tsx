import { interactionApi } from "@/entities/interaction";
import { Sympathies } from "@/widgets/sympathies/ui";
import { matchApi } from "@/entities/match";
import { profileApi } from "@/features/profile";
import { complaintApi } from "@/entities/complaint";
import { ApiModuleProvider } from "@/shared/lib/api";
import { Loader } from "@/shared/components/ui/loader";

const sympathiesApis = [interactionApi, matchApi, profileApi, complaintApi];

export const SympathiesPage: React.FC = () => {
	return (
		<ApiModuleProvider
			apis={sympathiesApis}
			fallback={<Loader />}
		>
			<Sympathies />
		</ApiModuleProvider>
	);
};
