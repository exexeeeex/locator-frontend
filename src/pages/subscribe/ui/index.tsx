import { subscribeApi } from "@/entities/subscribe/api";
import { SubscribeList } from "@/widgets/subscribe/ui";
import { ApiModuleProvider } from "@/shared/lib/api/store/api-module-provider";
import { Loader } from "@/shared/components/ui/loader";

export const SubscribePage: React.FC = () => {
	return (
		<ApiModuleProvider
			apis={[subscribeApi]}
			fallback={<Loader />}
		>
			<SubscribeList />
		</ApiModuleProvider>
	);
};
