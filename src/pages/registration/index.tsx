import { registrationApi } from "@/features/registration";
import { RegistrationForm } from "@widgets/registration-form";
import { ApiModuleProvider } from "@/shared/lib/api";
import { interestApi } from "@/entities/interest";
import { Loader } from "@/shared/components/ui/loader";
import { profileApi } from "@/features/profile";
import { cityApi } from "@/entities/city";
import { userPurposeApi } from "@/entities/user";

const registrationApis = [
	registrationApi,
	interestApi,
	profileApi,
	cityApi,
	userPurposeApi,
];

export const RegistrationPage: React.FC = () => {
	return (
		<ApiModuleProvider
			apis={registrationApis}
			fallback={<Loader />}
		>
			<RegistrationForm />
		</ApiModuleProvider>
	);
};
