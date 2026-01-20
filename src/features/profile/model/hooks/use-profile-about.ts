import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const useProfileAbout = () => {
	const [open, setOpen] = useState<boolean>(false);

	const schema = yup.object().shape({
		about: yup
			.string()
			.min(10)
			.max(500, "Максимальная длина описания 500 символов")
			.required("Описание обязательно"),
	});

	const { register, watch } = useForm<{ about: string }>({
		resolver: yupResolver(schema),
		defaultValues: { about: "" },
	});

	return {
		open,
		setOpen,
		register,
		watch,
	};
};
