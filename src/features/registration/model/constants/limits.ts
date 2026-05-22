export const REGISTRATION_LIMITS = {
	filesMax: 5,
} as const;

export const REGISTRATION_STEPS = ["main", "photo", "priority"] as const;
export type RegistrationStep = (typeof REGISTRATION_STEPS)[number];
