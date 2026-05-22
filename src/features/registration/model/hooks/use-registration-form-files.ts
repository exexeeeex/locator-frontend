import type { UseFormSetValue, UseFormWatch } from "react-hook-form";
import type { RegistrationFormData } from "../types";
import { notifyService } from "@/shared/services/notify";
import { fileHelper } from "@/shared/lib/helpers/file-helper";

const { notifyError } = notifyService;
const { filterNewFiles } = fileHelper;

export const useRegistrationFormFiles = (
	setValue: UseFormSetValue<RegistrationFormData>,
	watch: UseFormWatch<RegistrationFormData>,
) => {
	const files = watch("files") || [];

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const newFiles = Array.from(e.target.files);
		const filteredNewFiles = filterNewFiles(newFiles, files);

		const updatedFiles = [...files, ...filteredNewFiles].slice(0, 5);

		if (files.length + newFiles.length > 5) {
			notifyError("Максимум 5 фото");
			return;
		}

		if (setValue) {
			setValue("files", updatedFiles, {
				shouldValidate: true,
				shouldDirty: true,
			});
		}

		e.target.value = "";
	};

	const handleFileRemove = (fileName: string) => {
		const updatedFiles = files.filter((file) => file.name !== fileName);

		if (setValue) {
			setValue("files", updatedFiles, {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	};

	return {
		files,
		handleFileChange,
		handleFileRemove,
	};
};
