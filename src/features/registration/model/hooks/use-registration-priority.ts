import { useWatch, type Control } from "react-hook-form";
import type { RegistrationFormData } from "..";
import { useUserPurpose } from "@/entities/user";

export const useRegistrationPriority = (
  control: Control<RegistrationFormData>,
) => {
  const { purposes, isError: purposesFetchError } = useUserPurpose();

  const preferredGender = useWatch({
    control,
    name: "preferredGender",
    defaultValue: "male",
  });

  const minAge = useWatch({ control, name: "minAge", defaultValue: "16" });
  const maxAge = useWatch({ control, name: "maxAge", defaultValue: "60" });

  const purposeId = useWatch({
    control,
    name: "purposeId",
    defaultValue: purposes?.[1].id,
  });

  return {
    purposes,
    purposesFetchError,
    preferredGender,
    minAge,
    maxAge,
    purposeId,
  };
};
