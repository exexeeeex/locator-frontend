import { useAppDispatch } from "@/shared/lib/api/store/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/registration-schema";
import { registrationThunk } from "@/features/registration";
import type { RegistrationFormData } from "../types";
import { notifyService } from "@shared/services";
import { parseApiError } from "@/shared/lib/error";
import { logger } from "@/shared/lib/logger";
import { fileHelper } from "@/shared/lib/helpers/file-helper";

const { notifyError } = notifyService;
const { filterNewFiles } = fileHelper;

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
			await dispatch(
				registrationThunk({
					data,
					files: data.files || [],
				}),
			);
		} catch (error: unknown) {
			logger.error("Registration error:", error);
			notifyError(parseApiError(error, "Ошибка регистрации"));
		}
	};

	const handleRegistrationSubmit = form.handleSubmit(onSubmit);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const files = form.watch("files") || [];
		const newFiles = Array.from(e.target.files);
		const filteredNewFiles = filterNewFiles(newFiles, files);

		const updatedFiles = [...files, ...filteredNewFiles].slice(0, 5);

		if (files.length + newFiles.length > 5) {
			notifyError("Максимум 5 фото");
			return;
		}

		form.setValue("files", updatedFiles, {
			shouldValidate: true,
			shouldDirty: true,
		});

		e.target.value = "";
	};

	const handleFileRemove = (fileName: string) => {
		const files = form.watch("files") || [];
		const updatedFiles = files.filter((file) => file.name !== fileName);

		form.setValue("files", updatedFiles, {
			shouldValidate: true,
			shouldDirty: true,
		});
	};

	const handleToggleInterest = (id: string) => {
		if (!id) return;

		const selectedInterests = form.watch("selectedInterestsIds") || [];
		const isSelected = selectedInterests.includes(id);
		let updatedInterests: string[] = [];

		if (isSelected) {
			updatedInterests = selectedInterests.filter(
				(interestId) => interestId !== id,
			);
		} else {
			updatedInterests = [...selectedInterests, id];
		}

		form.setValue("selectedInterestsIds", updatedInterests, {
			shouldValidate: true,
			shouldDirty: true,
		});
	};

	return {
		form,
		handleRegistrationSubmit,
		handleFileChange,
		handleFileRemove,
		handleToggleInterest,
	};
};
