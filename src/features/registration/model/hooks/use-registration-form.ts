import { useAppDispatch } from "@shared/lib/api/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/registration-schema";
import { registrationThunk } from "@/features/registration";
import type { RegistrationFormData } from "../types";
import { notifyService } from "@shared/services";
import { parseApiError } from "@/shared/lib/error";

const { notifyError } = notifyService;

export const useRegistrationForm = () => {
	const dispatch = useAppDispatch();

	const form = useForm<RegistrationFormData>({
		resolver: yupResolver(registrationSchema),
		defaultValues: {
			username: "",
			birthday: new Date(),
			about: "",
			gender: "female",
			cityId: "",
			purposeId: "",
			education: "Не указано",
			selectedInterestsIds: [],
			job: "Не указано",
			preferredGender: "male",
			minAge: "16",
			maxAge: "50",
			files: [],
		},
	});

	const onSubmit = async (data: RegistrationFormData) => {
		try {
			const result = await dispatch(
				registrationThunk({
					data,
					files: data.files || [],
				}),
			);
			console.log("Dispatch result:", result);
		} catch (error: unknown) {
			console.error("Registration error:", error);
			notifyError(parseApiError(error, "Ошибка регистрации"));
		}
	};

	const handleRegistrationSubmit = form.handleSubmit(onSubmit);

	return {
		form,
		handleRegistrationSubmit,
	};
};
