import * as yup from "yup";
import type { RegistrationFormData } from "../types";

export const registrationSchema: yup.ObjectSchema<RegistrationFormData> =
	yup.object({
		username: yup
			.string()
			.min(3, "Имя должно содержать не менее 3 символов")
			.max(20, "Имя не должно превышать 20 символов")
			.required("Укажите имя!"),
		birthday: yup.date().required("Укажите дату рождения!"),
		about: yup
			.string()
			.required("Расскажите о себе")
			.min(10, "Расскажите о себе побольше")
			.max(500, "Не так много (500 символов)"),
		gender: yup.mixed<"male" | "female">().oneOf(["male", "female"]).required(),
		cityId: yup.string().required("Выберите город проживания!"),
		selectedInterestsIds: yup
			.array()
			.of(yup.string().required())
			.min(1, "Выберите хотя бы один интерес")
			.required("Выберите интересы"),
		purposeId: yup.string().required("Выберите предпочтения!"),
		education: yup.string().default("Не указано"),
		job: yup.string().default("Не указано"),
		preferredGender: yup
			.mixed<"male" | "female">()
			.oneOf(["male", "female"])
			.default("male"),
		minAge: yup.string().default("16"),
		maxAge: yup.string().default("50"),
		files: yup
			.array()
			.of(yup.mixed<File>().required())
			.min(1, "Загрузите хотя бы одно фото")
			.max(5, "Максимум 5 фото")
			.required("Загрузите фото!"),
	});
