import { useState } from 'react';
import type { RegistrationStep } from '../types';

export const useRegistrationStep = () => {
    const [step, setStep] = useState<RegistrationStep>('main');

    const nextStep = () => {
        setStep((prev) =>
            prev === 'main' ? 'photo' : prev === 'photo' ? 'priority' : prev,
        );
    };

    const prevStep = () => {
        setStep((prev) =>
            prev === 'priority' ? 'photo' : prev === 'photo' ? 'main' : prev,
        );
    };

    return { step, nextStep, prevStep };
};
