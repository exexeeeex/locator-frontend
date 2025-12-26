import type { RegistrationFormValues } from "./registration-values";

export interface RegistrationRequest {
  data: RegistrationFormValues;
  files: File[];
}
