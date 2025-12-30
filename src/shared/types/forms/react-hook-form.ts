import type { RegistrationFormData } from "@/features/registration/model/types";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type RegistrationFormProps = {
  control: Control<RegistrationFormData>;
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
  setValue: UseFormSetValue<RegistrationFormData>;
};

export type RegistrationPriorityProps = Pick<
  RegistrationFormProps,
  "control" | "setValue"
>;
export type RegistrationMainProps = RegistrationFormProps;
export type RegistrationPhotoProps = {
  files: File[];
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
