import { Questionnaires } from "@/widgets/questionnaires/ui";
import { matchApi } from "@/entities/match";
import { interactionApi } from "@/entities/interaction";
import { complaintApi } from "@/entities/complaint/model";
import { ApiModuleProvider } from "@/shared/lib/api/store/api-module-provider";
import { Loader } from "@/shared/components/ui/loader";

const questionnairesApis = [matchApi, interactionApi, complaintApi];

export const QuestionnairesPage = () => {
	return (
		<ApiModuleProvider
			apis={questionnairesApis}
			fallback={<Loader />}
		>
			<Questionnaires />
		</ApiModuleProvider>
	);
};
