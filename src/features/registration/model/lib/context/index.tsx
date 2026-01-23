import type { UseFormReturn } from "react-hook-form";
import type { RegistrationFormData } from "../../types";
import { createContext, useContext } from "react";

interface RegistrationContextProps {
	form: UseFormReturn<RegistrationFormData>;
}

const RegistrationContext = createContext<RegistrationContextProps | null>(
	null,
);

type Props = {
	form: UseFormReturn<RegistrationFormData>;
	children: React.ReactNode;
};

export const RegistrationProvider: React.FC<Props> = ({ form, children }) => {
	return (
		<RegistrationContext.Provider value={{ form }}>
			{children}
		</RegistrationContext.Provider>
	);
};

export const useRegistrationContext = () => {
	const context = useContext(RegistrationContext);
	if (!context) {
		throw new Error(
			"useRegistrationContext must be used within a RegistrationProvider",
		);
	}

	return context;
};
