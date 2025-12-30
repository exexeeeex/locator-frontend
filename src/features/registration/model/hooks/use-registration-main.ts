import { useWatch, type Control } from "react-hook-form";
import type { RegistrationFormData } from "../types";

export const useRegistrationMain = (control: Control<RegistrationFormData>) => {
  const gender = useWatch({
    control,
    name: "gender",
    defaultValue: "female",
  });

  const isMale = gender === "male";
  const isFemale = gender === "female";
  const genderLabel = isMale ? "Мужчина" : "Женщина";

  return {
    gender,
    isMale,
    isFemale,
    genderLabel,
  };
};
