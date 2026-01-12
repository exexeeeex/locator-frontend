import {
    useRegistrationForm,
    useRegistrationStep,
} from '@features/registration';
import { RegistrationMain } from './main-form';
import { RegistrationPhoto } from './photo-upload';
import { RegistrationPrioritySelector } from './priority-selector';
import { Button } from '@shared/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import { REGISTRATION_STEP_FIELDS } from '@/features/registration/model/config';
import { SLIDE_MOTION_PROPS } from '@/shared/config';

export const RegistrationForm = () => {
    const { form, handleFileChange, files, onSubmit } = useRegistrationForm();

    const { step, nextStep, prevStep } = useRegistrationStep();

    const {
        control,
        register,
        formState: { errors, isSubmitting },
        trigger,
    } = form;

    const handleNextStep = async () => {
        const isValid = await trigger(REGISTRATION_STEP_FIELDS[step]);

        if (!isValid) return;

        nextStep();
    };

    return (
        <form onSubmit={onSubmit}>
            <AnimatePresence mode='wait'>
                {step === 'main' && (
                    <motion.div key='main' {...SLIDE_MOTION_PROPS}>
                        <RegistrationMain
                            control={control}
                            register={register}
                            errors={errors}
                            setValue={form.setValue}
                        />
                        <Button
                            className='mb-17.5 rounded-md w-full text-xl font-semibold'
                            type='button'
                            onClick={handleNextStep}
                        >
                            Продолжить
                        </Button>
                    </motion.div>
                )}
                {step === 'photo' && (
                    <motion.div key='main' {...SLIDE_MOTION_PROPS}>
                        <RegistrationPhoto
                            files={files}
                            onFileChange={handleFileChange}
                        />
                        <Button
                            className='mb-17.5 rounded-md w-full text-xl font-semibold'
                            type='button'
                            onClick={handleNextStep}
                        >
                            Продолжить
                        </Button>
                    </motion.div>
                )}
                {step === 'priority' && (
                    <motion.div key='main' {...SLIDE_MOTION_PROPS}>
                        <RegistrationPrioritySelector
                            control={control}
                            setValue={form.setValue}
                        />
                        <Button
                            className='mb-17.5 rounded-md w-full text-xl font-semibold'
                            type='button'
                            onClick={prevStep}
                        >
                            Назад
                        </Button>
                        <Button
                            disabled={isSubmitting}
                            type='submit'
                            className='mb-15'
                        >
                            {isSubmitting ? 'Создание...' : 'Создать анкету'}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};
